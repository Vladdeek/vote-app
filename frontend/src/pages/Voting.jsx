import {
	ArrowDownWideNarrow,
	Flame,
	Funnel,
	LibraryBig,
	ScanSearch,
} from 'lucide-react'
import {
	GreenButton,
	GrayButton,
	WhiteButton,
	PrevNextButton,
	TransButton,
} from '../components/Buttons'
import { AltStyleDropdown } from '../components/Inputs'
import VoteCard from '../components/VoteCard'

const Voting = () => {
	const options = ['Показать 10', 'Показать 15', 'Показать 20', 'Показать 25']
	const voteCardsData = [
		{
			title: 'Выборы старосты группы',
			description: 'Студенты группы ПИ-21-1',
			timezone: '(UTC+3) Россия - Москва (MSK)',
			dateStartReg: '06.07.2025',
			timeStartReg: '10:00',
			dateStartVote: '07.07.2025',
			timeStartVote: '10:00',
			dateEndReg: '06.07.2025',
			timeEndReg: '18:00',
			dateEndVote: '07.07.2025',
			timeEndVote: '18:00',
		},
		{
			title: 'Голосование за проект',
			description: "Команда разработчиков 'Alpha'",
			timezone: '(UTC+3) Россия - Москва (MSK)',
			dateStartReg: '10.07.2025',
			timeStartReg: '09:00',
			dateStartVote: '12.07.2025',
			timeStartVote: '09:00',
			dateEndReg: '11.07.2025',
			timeEndReg: '20:00',
			dateEndVote: '13.07.2025',
			timeEndVote: '20:00',
		},
		{
			title: 'Опрос по корпоративным мероприятиям',
			description: 'Сотрудники отдела маркетинга',
			timezone: '(UTC+3) Россия - Москва (MSK)',
			dateStartReg: '15.07.2025',
			timeStartReg: '11:00',
			dateStartVote: '16.07.2025',
			timeStartVote: '11:00',
			dateEndReg: '15.07.2025',
			timeEndReg: '17:00',
			dateEndVote: '16.07.2025',
			timeEndVote: '17:00',
		},
	]
	return (
		<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
			<p className='mak text-[40px] mb-5 '>Главная</p>
			<div className='inline-flex gap-2 mb-2'>
				<TransButton>
					<Funnel />
					<p>Фильтры</p>
				</TransButton>
				<TransButton>
					<ArrowDownWideNarrow />
					<p>Сортировка</p>
				</TransButton>
			</div>
			<div className='flex items-center justify-between bg-white shadow-sm rounded-2xl p-5 mb-3'>
				<div className='flex gap-2 items-center'>
					<GreenButton>
						<Flame />
						<p>Активные голосования</p>
					</GreenButton>
					<GrayButton>
						<LibraryBig />
						<p>Архивные голосования</p>
					</GrayButton>
				</div>
				<div className='flex gap-2 items-center'>
					<AltStyleDropdown placeholder='' options={options} />
					<PrevNextButton />
					<WhiteButton>
						<ScanSearch />
						<p>Поиск по таблице</p>
					</WhiteButton>
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				{voteCardsData.map((vote, index) => (
					<VoteCard
						key={index}
						title={vote.title}
						description={vote.description}
						timezone={vote.timezone}
						dateStartReg={vote.dateStartReg}
						dateStartVote={vote.dateStartVote}
						timeStartReg={vote.timeStartReg}
						timeStartVote={vote.timeStartVote}
						dateEndReg={vote.dateEndReg}
						dateEndVote={vote.dateEndVote}
						timeEndReg={vote.timeEndReg}
						timeEndVote={vote.timeEndVote}
					/>
				))}
			</div>
		</div>
	)
}
export default Voting
