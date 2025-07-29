import { CircleUserRound, ScanSearch, Settings2 } from 'lucide-react'
import { useState } from 'react'

const HeaderDropdown = ({ options = [], title }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = option => {
		setIsOpen(false)
	}

	return (
		<div
			onClick={toggleDropdown}
			className={`${
				isOpen && 'bg-[#505050]'
			} grid-cols-5 grid overflow-hidden rounded-2xl select-none`}
		>
			<div className='col-span-4'>
				<p className='p-3 cursor-pointer'>{title}</p>
				<div className={!isOpen && 'hidden'}>
					{options.map((option, index) => (
						<p
							key={index}
							className='p-3 w-10 cursor-pointer text-xl font-normal select-none transition-all'
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</p>
					))}
				</div>
			</div>
			<div
				className={`col-span-1 relative w-full flex justify-center ${
					!isOpen ? 'items-center' : 'items-start top-[7.5%]'
				} `}
			>
				<div
					className={`bg-[#ccc] w-2 ${
						!isOpen ? 'h-2' : 'h-[85%] '
					} absolute transition-all rounded-full`}
				></div>
			</div>
		</div>
	)
}

const AltHeaderDropdown = ({ options = [], title }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => setIsOpen(!isOpen)

	const handleOptionClick = option => {
		setIsOpen(false)
	}

	return (
		<div
			onClick={toggleDropdown}
			className={`border-1 ${
				isOpen && 'bg-white text-[#212121]'
			} border-white grid-cols-5 grid overflow-hidden rounded-2xl select-none hover:bg-white hover:text-[#212121] transition-all w-45`}
		>
			<div className='col-span-4 '>
				<p className='p-3 cursor-pointer'>{title}</p>
				<div className={!isOpen && 'hidden'}>
					{options.map((option, index) => (
						<p
							key={index}
							className='p-3 cursor-pointer text-xl font-normal select-none transition-all'
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</p>
					))}
				</div>
			</div>
			<div
				className={`col-span-1 relative w-full flex justify-center ${
					!isOpen ? 'items-center' : 'items-start top-[7.5%]'
				} `}
			>
				<div
					className={` w-2 ${
						!isOpen ? 'h-2 bg-[#ccc]' : 'h-[85%] bg-[#212121]'
					} absolute transition-all rounded-full`}
				></div>
			</div>
		</div>
	)
}

const Header = ({ isAuthorized, onClick }) => {
	const Users = ['Наблюдатель', 'Член счётной комиссии', 'Секретарь']
	const Voting = ['Список голосований', 'Конструктор голосований']
	const Add = ['Голосование', 'Шаблон голосований', 'Группу пользователей']
	return (
		<>
			<div className='h-25 bg-[#212121]'>
				<div className='flex justify-between py-[18px] mx-60 text-white text-lg font-medium'>
					<div className='flex gap-5 items-start'>
						<div className='flex items-start'>
							<img
								className='rounded-full h-16 w-16'
								src='https://placehold.co/64x64.png'
								alt=''
							/>
						</div>
						<div className='mt-1 flex gap-5'>
							<p className='px-5 h-13 flex items-start py-3 cursor-pointer hover:bg-[#505050] rounded-2xl'>
								Главная
							</p>
							{isAuthorized && (
								<div className='h-full flex items-start z-20'>
									<HeaderDropdown title={'Пользователи'} options={Users} />
								</div>
							)}
							{isAuthorized ? (
								<div className='h-full flex items-start z-20'>
									<HeaderDropdown title={'Голосования'} options={Voting} />
								</div>
							) : (
								<p>Голосования</p>
							)}

							{isAuthorized && (
								<div className='h-full flex items-start'>
									<AltHeaderDropdown title={'Добавить'} options={Add} />
								</div>
							)}
						</div>
					</div>
					<div className='flex h-15 gap-6 items-center'>
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
