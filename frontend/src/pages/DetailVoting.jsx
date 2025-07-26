import {
	ChartColumn,
	ClipboardCheck,
	FileText,
	Info,
	Layers,
	SquarePlus,
	UsersRound,
} from 'lucide-react'
import { useState } from 'react'
import { SideBar, SideBarBtn } from '../components/SideBar'

const GeneralInfo = () => {
	return (
		<>
			<p className='mak text-[40px] mb-5 '>Общая информация</p>
		</>
	)
}
const VotingStatistic = () => {
	return (
		<>
			<p className='mak text-[40px] mb-5 '>Статистика голосований</p>
		</>
	)
}
const VotingMembers = () => {
	return (
		<>
			<p className='mak text-[40px] mb-5 '>Голосующие</p>
		</>
	)
}
const Results = () => {
	return (
		<>
			<p className='mak text-[40px] mb-5 '>Результаты</p>
		</>
	)
}
const MyNewsletter = () => {
	return (
		<>
			<p className='mak text-[40px] mb-5 '>Мой бюллетень</p>
		</>
	)
}

const DetailVoting = () => {
	const [isActive, setIsActive] = useState(0)
	const [isRole, setIsRole] = useState('администратор')
	return (
		<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
			<p className='mak text-[40px] mb-5 '>Детали голосований</p>
			<div className='grid grid-cols-4 gap-2'>
				<div className='col-span-1'>
					<SideBar>
						<SideBarBtn
							index={0}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<Info />
							<p>Общая информация</p>
						</SideBarBtn>
						{isRole == 'администратор' ? (
							<>
								<SideBarBtn
									index={1}
									activeIndex={isActive}
									setActiveIndex={setIsActive}
								>
									<ChartColumn />
									<p>Статистика голосований</p>
								</SideBarBtn>
								<SideBarBtn
									index={2}
									activeIndex={isActive}
									setActiveIndex={setIsActive}
								>
									<UsersRound />
									<p>Голосующие</p>
								</SideBarBtn>
							</>
						) : (
							<>
								<SideBarBtn
									index={4}
									activeIndex={isActive}
									setActiveIndex={setIsActive}
								>
									<ClipboardCheck />
									<p>Мой бюллетень</p>
								</SideBarBtn>
							</>
						)}
						<SideBarBtn
							index={3}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<FileText />
							<p>Результат</p>
						</SideBarBtn>
					</SideBar>
				</div>
				<div className='col-span-3'>
					<div className='bg-white shadow-sm rounded-[20px] p-6'>
						{(() => {
							switch (isActive) {
								case 0:
									return <GeneralInfo />
								case 1:
									return <VotingStatistic />
								case 2:
									return <VotingMembers />
								case 3:
									return <Results />
								case 4:
									return <MyNewsletter />
							}
						})()}
					</div>
				</div>
			</div>
		</div>
	)
}
export default DetailVoting
