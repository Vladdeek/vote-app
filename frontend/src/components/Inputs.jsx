import {
	AlarmClock,
	Calendar1,
	CircleCheck,
	Dot,
	Scan,
	ScanEye,
} from 'lucide-react'
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
			{title && (
				<div className='inline-flex items-center gap-[10px]'>
					<p className='text-[18px]'>{title}</p>
					{required && (
						<CircleCheck
							color={!inputStatus ? '#212121' : '#008200'}
							size={16}
						/>
					)}
				</div>
			)}

			<input
				type={type}
				value={inputValue}
				onChange={handleInputChange}
				className='rounded-xl border-1 border-[#212121] p-[12px] text-[#212121] placeholder:text-[#ccc]'
				placeholder={placeholder}
			/>
		</div>
	)
}

const RadioList = ({ options, title, required }) => {
	return (
		<div className='w-full inline-flex flex-col'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px]'>{title}</p>
				{required && <CircleCheck color={'#008200'} size={16} />}
			</div>
			<div className='relative flex flex-col gap-1 p-1 text-sm border-2 border-[#437DE9] rounded-lg'>
				{options.map((item, index) => (
					<label
						key={index}
						className='flex-1 text-start select-none col-span-1'
					>
						<input
							type='radio'
							name='radio'
							className='hidden peer'
							defaultChecked={index === 0}
						/>
						<span className='flex cursor-pointer items-center justify-start rounded-xl p-2 text-[#212121] transition-all duration-150 ease-in-out  peer-checked:text-[#437DE9] peer-checked:font-semibold'>
							{item}
						</span>
					</label>
				))}
			</div>
		</div>
	)
}

const InputDataTime = ({ title, required }) => {
	const [dateStatus, setDateStatus] = useState(false)
	const [timeStatus, setTimeStatus] = useState(false)
	const [dateValue, setDateValue] = useState('')
	const [timeValue, setTimeValue] = useState('')

	const handleDateChange = e => {
		const value = e.target.value
		setDateValue(value)
		setDateStatus(value.trim() !== '')
	}

	const handleTimeChange = e => {
		const value = e.target.value
		setTimeValue(value)
		setTimeStatus(value.trim() !== '')
	}

	return (
		<div className='w-full inline-flex flex-col gap-2'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px]'>{title}</p>
				{required && (
					<CircleCheck
						color={!(dateStatus && timeStatus) ? '#212121' : '#008200'}
						size={16}
					/>
				)}
			</div>
			<div className='inline-flex justify-between items-center border-1 border-[#212121] rounded-xl  p-[12px]  text-[#ccc]'>
				<div className='inline-flex gap-3'>
					<div className='inline-flex gap-1 items-center'>
						<Calendar1 className='text-[#212121]' size={20} />
						<input
							type='date'
							value={dateValue}
							onChange={handleDateChange}
							placeholder='Выберите дату'
							className={`outline-0 ${dateStatus && 'text-[#212121]'}`}
						/>
					</div>
					<div className='inline-flex gap-1 items-center'>
						<AlarmClock className='text-[#212121]' size={20} />
						<input
							type='time'
							value={timeValue}
							onChange={handleTimeChange}
							placeholder='Выберите время'
							className={`outline-0 ${dateStatus && 'text-[#212121]'}`}
						/>
					</div>
				</div>

				<div className='rounded-full h-2 w-2 bg-[#212121] '></div>
			</div>
		</div>
	)
}

const InputFixValue = ({ type, placeholder, title, inputValue }) => {
	return (
		<div className='w-full inline-flex flex-col'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px] text-[#ccc]'>{title}</p>
			</div>
			<input
				type={type}
				value={inputValue}
				className='rounded-xl border-1 border-[#212121] p-[12px] text-gray-400'
				placeholder={placeholder}
			/>
		</div>
	)
}

const InputPassword = ({ type, placeholder, title, inputValue }) => {
	const [isView, setIsView] = useState(false)
	return (
		<div className='w-full inline-flex flex-col'>
			<div className='inline-flex items-center gap-[10px]'>
				<p className='text-[18px] text-[#ccc]'>{title}</p>
			</div>
			<div className='rounded-xl flex items-center justify-between border-1 border-[#212121] pr-2'>
				<input
					type={isView ? 'text' : 'password'}
					value={inputValue}
					className=' p-[12px] text-gray-400 w-full outline-0'
					placeholder={placeholder}
				/>
				<button
					onClick={() => setIsView(prev => !prev)}
					className='h-full hover:bg-gray-100 transition-all p-1 rounded-md'
				>
					{!isView ? <Scan /> : <ScanEye />}
				</button>
			</div>
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
					className='text-gray-400 flex justify-between items-center p-[12px] select-none '
					onClick={toggleDropdown}
				>
					<p className='whitespace-nowrap'>
						{selectedOption ? selectedOption : placeholder}
					</p>
					<div className='bg-[#212121] h-2 w-2 rounded-full'></div>
				</div>

				<ul
					className={`${
						!isOpen && 'hidden'
					} transition-all absolute z-100 w-full mt-2 bg-white max-h-100 overflow-scroll rounded-xl shadow-sm`}
				>
					{options.map((option, index) => (
						<li
							key={index}
							className='hover:bg-gray-100 p-2 cursor-pointer select-none whitespace-nowrap'
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

const AltStyleDropdown = ({
	placeholder = 'Select an option',
	options = [],
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('Показать 10')
	const [inputStatus, setInputStatus] = useState(false)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = option => {
		setSelectedOption(option)
		setIsOpen(false)
		setInputStatus(true)
	}

	return (
		<div className='w-full inline-flex flex-col relative'>
			<div
				className={`  border-1 rounded-lg border-[#f4f4f4] overflow-hidden cursor-pointer`}
			>
				<div
					className='text-[#212121] flex justify-between items-center p-[13px] select-none'
					onClick={toggleDropdown}
				>
					{selectedOption ? selectedOption : placeholder}
					<Dot color='#212121' />
				</div>

				<ul
					className={`${
						!isOpen && 'hidden'
					} transition-all absolute z-10 w-full mt-2 bg-white max-h-100 overflow-scroll rounded-xl shadow-sm`}
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

export {
	InputDefault,
	InputFixValue,
	InputPassword,
	Dropdown,
	AltStyleDropdown,
	InputDataTime,
	RadioList,
}
