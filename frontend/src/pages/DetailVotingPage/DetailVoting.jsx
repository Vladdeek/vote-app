import {
	AlarmClock,
	AlignRight,
	Calendar1,
	ChartColumn,
	ClipboardCheck,
	FileArchive,
	FileText,
	Globe,
	Info,
	Layers,
	ScanFace,
	SquarePlus,
	UsersRound,
} from 'lucide-react'
import { useState } from 'react'
import { SideBar, SideBarBtn } from '../../components/SideBar'
import { timeZones } from '../../data/TimeZone'
import {
	BlueTag,
	GrayTag,
	GreenTag,
	RedTag,
	YellowTag,
} from '../../components/Tags'
import { BlueButton, Button, GrayButton } from '../../components/Buttons'
import { Dropdown } from '../../components/Inputs'
import ResultsForAdmin from './chapters/ResultsForAdmin'
import VotingMembers from './chapters/VotingMembers'
import VotingStatistic from './chapters/VotingStatistic'
import GeneralInfo from './chapters/GeneralInfo'

const DetailVoting = () => {
	const [isActive, setIsActive] = useState(0)
	const [isRole, setIsRole] = useState('администратор')

	const deadlines = [
		{ title: 'Начало регистрации', date: '10.09.2025', time: '8:00' },
		{ title: 'Окончание регистр.', date: '10.09.2025', time: '12:00' },
		{ title: 'Начало голосования', date: '10.09.2025', time: '10:00' },
		{ title: 'Окончание голосования', date: '11.09.2025', time: '00:00' },
	]
	return (
		<div className='mx-60 my-[99px] text-[#212121] '>
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
								<SideBarBtn
									index={5}
									activeIndex={isActive}
									setActiveIndex={setIsActive}
								>
									<FileText />
									<p>Результат</p>
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
								<SideBarBtn
									index={3}
									activeIndex={isActive}
									setActiveIndex={setIsActive}
								>
									<FileText />
									<p>Результат</p>
								</SideBarBtn>
							</>
						)}
					</SideBar>
				</div>
				<div className='col-span-3'>
					{(() => {
						switch (isActive) {
							case 0:
								return (
									<GeneralInfo
										title={'Название голосования'}
										description={'Название группы людей'}
										TZid={15}
										deadlines={deadlines}
									/>
								)
							case 1:
								return (
									<VotingStatistic
										totalPeople={10000}
										registeredCount={4000}
										votedCount={1750}
										conditionPercent={25}
										UpdateDate={'04.08.2025'}
										UpdateTime={'12:56'}
									/>
								)
							case 2:
								return <VotingMembers />
							case 3:
								return <Results />
							case 4:
								return <MyNewsletter />
							case 5:
								return <ResultsForAdmin />
						}
					})()}
				</div>
			</div>
		</div>
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

export default DetailVoting
