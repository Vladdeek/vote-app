import { CircleUserRound, ScanSearch, Settings2 } from 'lucide-react'
import { useState } from 'react'

const Header = ({ isAuthorized }) => {
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
						{isAuthorized && <p>Пользователи</p>}
						<p>Голосования</p>
						{isAuthorized && (
							<p className='border-1 border-white rounded-xl py-2 px-5'>
								Добавить
							</p>
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
