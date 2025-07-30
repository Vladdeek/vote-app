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
import { VoteCard } from '../components/VoteCard'

const Voting = () => {
	const options = ['Показать 10', 'Показать 15', 'Показать 20', 'Показать 25']
	const voteCardsData = [
		{
			title: 'Выборы старосты группы',
			description: 'Студенты группы ПИ-21-1',
			timezone: '(UTC+3) Россия - Москва (MSK)',
			deadlines: [
				{ title: 'Начало регистрации', date: '06.07.2025', time: '8:00' },
				{ title: 'Окончание регистрации', date: '06.07.2025', time: '10:00' },
				{ title: 'Начало голосования', date: '06.07.2025', time: '10:00' },
				{ title: 'Окончание голосования', date: '11.07.2025', time: '00:00' },
			],
		},
		{
			title: 'Голосование за проект',
			description: "Команда разработчиков 'Alpha'",
			timezone: '(UTC+3) Россия - Москва (MSK)',
			deadlines: [
				{ title: 'Начало регистрации', date: '06.08.2025', time: '9:00' },
				{ title: 'Окончание регистрации', date: '06.08.2025', time: '10:00' },
				{ title: 'Начало голосования', date: '06.08.2025', time: '10:00' },
				{ title: 'Окончание голосования', date: '06.08.2025', time: '12:00' },
			],
		},
		{
			title: 'Опрос по корпоративным мероприятиям',
			description: 'Сотрудники отдела маркетинга',
			timezone: '(UTC+3) Россия - Москва (MSK)',
			deadlines: [
				{ title: 'Начало регистрации', date: '10.09.2025', time: '8:00' },
				{ title: 'Окончание регистрации', date: '10.09.2025', time: '12:00' },
				{ title: 'Начало голосования', date: '10.09.2025', time: '10:00' },
				{ title: 'Окончание голосования', date: '11.09.2025', time: '00:00' },
			],
		},
	]
	return (
		<div className='mx-60 my-[99px] text-[#212121] '>
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
				{voteCardsData.map((item, index) => (
					<VoteCard
						key={index}
						title={item.title}
						description={item.description}
						timezone={item.timezone}
						deadlines={item.deadlines}
					/>
				))}
			</div>
		</div>
	)
}
export default Voting
