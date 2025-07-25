import { CircleUserRound, ScanSearch, Settings2 } from 'lucide-react'
import { useState } from 'react'

const HeaderDropdown = ({ options = [], title }) => {
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
		<div className={`relative ${isOpen && 'bg-[#505050] rounded-t-xl'}`}>
			<div className='w-full inline-flex flex-col rounded-xl'>
				<div className='overflow-hidden cursor-pointer'>
					<div
						className='text-white gap-2 flex justify-between items-center p-[12px] select-none hover:bg-[#505050] rounded-xl transition-all'
						onClick={toggleDropdown}
					>
						<p>{title}</p>
						<div className='bg-[#ccc] rounded-full h-2 w-2'></div>
					</div>

					<ul
						className={`${
							!isOpen ? 'hidden' : 'block'
						} transition-all font-light absolute z-10 w-full bg-[#505050] overflow-hidden rounded-b-xl shadow-lg`}
					>
						{options.map((option, index) => (
							<li
								key={index}
								className='hover:bg-[#454545] p-2 cursor-pointer select-none transition-all'
								onClick={() => handleOptionClick(option)}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

const AltHeaderDropdown = ({ options = [], title }) => {
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
		<div
			className={`relative ${isOpen && 'bg-white text-[#212121] rounded-t-xl'}`}
		>
			<div className='w-full inline-flex flex-col rounded-xl'>
				<div className='overflow-hidden cursor-pointer'>
					<div
						className={`group gap-2 flex justify-between items-center p-[12px] select-none hover:bg-white hover:text-[#212121] border border-white ${
							!isOpen ? 'text-white' : 'text-[#212121]'
						} rounded-xl transition-all`}
						onClick={toggleDropdown}
					>
						<p>{title}</p>
						<div className='bg-[#ccc] rounded-full h-2 w-2 group-hover:bg-[#212121] transition-colors'></div>
					</div>

					<ul
						className={`${
							!isOpen ? 'hidden' : 'block'
						} transition-all font-light absolute z-10 w-full bg-white overflow-hidden rounded-b-xl shadow-lg`}
					>
						{options.map((option, index) => (
							<li
								key={index}
								className='hover:bg-[#f4f4f4] p-2 cursor-pointer select-none transition-all'
								onClick={() => handleOptionClick(option)}
							>
								{option}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

const Header = ({ isAuthorized }) => {
	const Users = ['Наблюдатель', 'Член счётной комиссии', 'Секретарь']
	const Voting = ['Список голосований', 'Конструктор голосований']
	const Add = ['Голосование', 'Шаблон голосований', 'Группу пользователей']
	return (
		<>
			<div className='h-25 bg-[#212121]'>
				<div className='flex justify-between py-[18px] mx-60 text-white text-lg font-medium'>
					<div className='flex gap-6 items-center'>
						<img
							className='rounded-full'
							src='https://placehold.co/64x64.png'
							alt=''
						/>
						<p>Главная</p>
						{isAuthorized && (
							<HeaderDropdown title={'Пользователи'} options={Users} />
						)}
						{isAuthorized ? (
							<HeaderDropdown title={'Голосования'} options={Voting} />
						) : (
							<p>Голосования</p>
						)}

						{isAuthorized && (
							<AltHeaderDropdown title={'Добавить'} options={Add} />
						)}
					</div>
					<div className='flex gap-6 items-center'>
						{isAuthorized && (
							<>
								<ScanSearch size={32} />
								<Settings2 size={32} />
							</>
						)}
						{!isAuthorized ? <p>Авторизация</p> : <p>Фамилия И. О.</p>}

						<CircleUserRound size={32} />
					</div>
				</div>
			</div>
		</>
	)
}
export default Header
