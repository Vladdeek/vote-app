import { CircleCheck, Dot } from 'lucide-react'
import { useState } from 'react'

const InputDefault = ({ type, placeholder, title, required, validate }) => {
	const [inputStatus, setInputStatus] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		const value = e.target.value
		setInputValue(value)
		setInputStatus(validate ? validate(value) : value.trim() !== '')
	}

	return (
		<div className='w-full inline-flex flex-col'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px]'>{title}</p>
				{required && (
					<CircleCheck color={!inputStatus ? '#212121' : '#008200'} size={16} />
				)}
			</div>
			<input
				type={type}
				value={inputValue}
				onChange={handleInputChange}
				className='rounded-xl border-1 border-[#212121] p-[12px] text-gray-400'
				placeholder={placeholder}
			/>
		</div>
	)
}

const Dropdown = ({
	placeholder = 'Select an option',
	options = [],
	title,
	required,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const [inputStatus, setInputStatus] = useState(false)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
		setInputStatus(true)
	}

	return (
		<div className='w-full inline-flex flex-col relative'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px]'>{title}</p>
				{required && (
					<CircleCheck color={!inputStatus ? '#212121' : '#008200'} size={16} />
				)}
			</div>
			<div
				className={`  border-1 rounded-xl border-[#212121] overflow-hidden cursor-pointer`}
			>
				<div
					className='text-gray-400 flex justify-between items-center p-[12px] select-none'
					onClick={toggleDropdown}
				>
					{selectedOption ? selectedOption : placeholder}
					<Dot color='#212121' />
				</div>

				<ul
					className={`${
						!isOpen && 'hidden'
					} transition-all absolute z-10 w-full mt-2 bg-white  rounded-xl shadow-sm overflow-hidden`}
				>
					{options.map((option, index) => (
						<li
							key={index}
							className='hover:bg-gray-100 p-2 cursor-pointer select-none'
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export { InputDefault, Dropdown }
