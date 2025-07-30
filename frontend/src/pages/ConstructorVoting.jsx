import {
	CalendarClock,
	Eye,
	Layers,
	Plus,
	Rocket,
	Save,
	ScanSearch,
	ShieldUser,
	SquarePlus,
	Trash2,
	X,
} from 'lucide-react'
import { Children, useEffect, useRef, useState } from 'react'
import { SideBar, SideBarBtn } from '../components/SideBar'
import {
	Dropdown,
	InputDataTime,
	InputDefault,
	RadioList,
} from '../components/Inputs'
import {
	AltBlueButton,
	BlueButton,
	GrayButton,
	RadioBtn,
	TransButton,
} from '../components/Buttons'
import { CheckBox } from '../components/Components'
import { People } from '../data/People'

const Search = () => {
	const [inputStatus, setInputStatus] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = e => {
		const value = e.target.value
		setInputValue(value)
		setInputStatus(validate ? validate(value) : value.trim() !== '')
	}
	return (
		<div className='w-full inline-flex items-center gap-3 transition-all text-[#ccc] rounded-xl border-1 border-[#ccc] p-[12px] focus-within:text-[#212121] focus-within:border-[#212121]'>
			<ScanSearch />
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				className='outline-0 w-full'
				placeholder=''
			/>
		</div>
	)
}

const PeopleCard = ({ FullName, email, key }) => {
	const [thisPeople, setThisPeople] = useState(0)

	const handleRadioClick = value => {
		setThisPeople(value)
	}

	return (
		<div key={key} className='grid grid-cols-11 gap-2'>
			<div
				className={`col-span-9 flex flex-col items-start justify-center text-[#212121] ${
					thisPeople === 1
						? 'bg-[#FFE3E3]'
						: thisPeople === 2
						? 'bg-[#FFFBD0]'
						: thisPeople === 3
						? 'bg-[#D2F0FF]'
						: 'bg-[#f4f4f4]'
				} rounded-xl px-5 py-4 transition-all`}
			>
				<p className='text-base font-normal'>{FullName}</p>
				<p className='text-base font-normal'>{email}</p>
			</div>
			<div className='col-span-1 grid grid-rows-3 grid-cols-1 gap-1'>
				<label
					className={` ${
						thisPeople === 1
							? 'bg-[#FFE3E3] text-[#6D1717]'
							: 'bg-[#f4f4f4] text-[#212121]'
					} rounded-sm w-full flex items-center justify-center hover:brightness-95 transition-all cursor-pointer`}
				>
					<input
						type='radio'
						name={`radioGroup-${key}`} // Unique name for each card's radio group
						className='hidden peer'
						onChange={() => handleRadioClick(1)}
						checked={thisPeople === 1}
					/>
					<div className=''>
						<CalendarClock size={16} />
					</div>
				</label>

				<label
					className={` ${
						thisPeople === 2
							? 'bg-[#FFFBD0] text-[#747113]'
							: 'bg-[#f4f4f4] text-[#212121]'
					} rounded-sm w-full flex items-center justify-center hover:brightness-95 transition-all cursor-pointer`}
				>
					<input
						type='radio'
						name={`radioGroup-${key}`}
						className='hidden peer'
						onChange={() => handleRadioClick(2)}
						checked={thisPeople === 2}
					/>
					<div className=''>
						<ShieldUser size={16} />
					</div>
				</label>

				<label
					className={` ${
						thisPeople === 3
							? 'bg-[#D2F0FF] text-[#211E69]'
							: 'bg-[#f4f4f4] text-[#212121]'
					} rounded-sm w-full flex items-center justify-center hover:brightness-95 transition-all cursor-pointer`}
				>
					<input
						type='radio'
						name={`radioGroup-${key}`}
						className='hidden peer'
						onChange={() => handleRadioClick(3)}
						checked={thisPeople === 3}
					/>
					<div className=''>
						<Eye size={16} />
					</div>
				</label>
			</div>
			<div className='col-span-1 bg-[#f4f4f4] text-[#212121] rounded-lg w-full flex items-center justify-center hover:text-white hover:bg-[#EE5B5B] transition-all cursor-pointer'>
				<Trash2 />
			</div>
		</div>
	)
}

const VoteConstruct = ({ title, delBtn = false, onClick }) => {
	const [options, setOptions] = useState([
		'Вариант ответа 1',
		'Вариант ответа 2',
	])

	const addOption = () => {
		setOptions([...options, `Вариант ответа ${options.length + 1}`])
	}

	const removeOption = index => {
		if (options.length <= 2) return
		const newOptions = [...options]
		newOptions.splice(index, 1)
		setOptions(newOptions)
	}

	const updateOption = (index, value) => {
		const newOptions = [...options]
		newOptions[index] = value
		setOptions(newOptions)
	}

	return (
		<>
			<div className='flex flex-col gap-3'>
				<div className='flex gap-2'>
					<p className='text-base font-bold'>{title}</p>
					{delBtn && (
						<X
							className='cursor-pointer text-[#ccc] hover:text-[#212121] transition'
							onClick={onClick}
						/>
					)}
				</div>

				<Dropdown
					title={'Тип вопроса'}
					required={true}
					placeholder='Выберите тип'
					options={['Произвольный вопрос', 'Еще какой то вопрос']}
				/>
				<InputDefault
					title={'Заголовок вопроса'}
					required={true}
					placeholder={'Введите заголовок'}
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<p className='mt-4 font-medium'>Варианты ответа</p>
				{options.map((option, index) => (
					<div key={index} className='flex gap-2 items-center'>
						<InputDefault
							value={option}
							onChange={e => updateOption(index, e.target.value)}
							placeholder={'Введите вариант ответа'}
							width={'w-full'}
						/>

						<button
							disabled={index < 2}
							onClick={() => removeOption(index)}
							className={` ${
								index >= 2
									? 'bg-[#f4f4f4] hover:bg-[#EE5B5B] hover:text-[#FFE3E3] cursor-pointer'
									: 'bg-[#f4f4f4] cursor-not-allowed opacity-50'
							} transition-all rounded-xl p-[13px] `}
						>
							<Trash2 />
						</button>
					</div>
				))}
				<GrayButton onClick={addOption}>
					<Plus />
					<p>Добавить вариант ответа</p>
				</GrayButton>
			</div>
		</>
	)
}

//я не ебу как оно работает
const ScrollableContainer = ({
	children,
	height = '350px',
	scrollbarWidth = '6px',
	trackColor = '#f4f4f4',
	thumbColor = '#212121',
	className = '',
}) => {
	const [scrollThumbHeight, setScrollThumbHeight] = useState(20)
	const [scrollThumbTop, setScrollThumbTop] = useState(0)
	const contentRef = useRef(null)
	const scrollTrackRef = useRef(null)

	const updateScrollThumb = () => {
		const contentElement = contentRef.current
		if (!contentElement || !scrollTrackRef.current) return

		const { scrollTop, scrollHeight, clientHeight } = contentElement
		const trackHeight = scrollTrackRef.current.clientHeight

		let newHeight = (clientHeight / scrollHeight) * trackHeight
		newHeight = Math.max(newHeight, 20)
		setScrollThumbHeight(newHeight)

		const newTop = (scrollTop / scrollHeight) * trackHeight
		setScrollThumbTop(newTop)
	}

	useEffect(() => {
		const contentElement = contentRef.current
		if (!contentElement) return

		updateScrollThumb() // Инициализация при монтировании

		contentElement.addEventListener('scroll', updateScrollThumb)
		const resizeObserver = new ResizeObserver(updateScrollThumb)
		resizeObserver.observe(contentElement)

		return () => {
			contentElement.removeEventListener('scroll', updateScrollThumb)
			resizeObserver.disconnect()
		}
	}, [])

	return (
		<div
			className={`flex overflow-hidden relative ${className}`}
			style={{ height }}
		>
			<div
				ref={scrollTrackRef}
				className='absolute left-0 top-0 h-full'
				style={{
					width: scrollbarWidth,
					background: trackColor,
					borderRadius: '6px',
				}}
			>
				<div
					style={{
						width: '100%',
						background: thumbColor,
						borderRadius: '6px',
						position: 'absolute',
						height: `${scrollThumbHeight}px`,
						top: `${scrollThumbTop}px`,
						transition: 'all 0.05s',
					}}
				/>
			</div>

			<div
				ref={contentRef}
				className='h-full pl-2 overflow-y-auto flex flex-col gap-3'
				style={{
					width: `calc(100% - ${scrollbarWidth})`,
					marginLeft: scrollbarWidth,
					scrollbarWidth: 'none',
					msOverflowStyle: 'none',
				}}
			>
				<style jsx>{`
					.custom-scrollbar-container::-webkit-scrollbar {
						display: none;
					}
				`}</style>
				{children}
			</div>
		</div>
	)
}

const VotingConstructor = () => {
	const FirstRadio = ['Тайное голосование', 'Открытое голосование']
	const SecondRadio = [
		'Закрытые списки',
		'Открытые списки',
		'Добавить пользователей',
		'Добавить группу',
	]
	const ThirdRadio = ['50% +1', 'Вариант 1', 'Вариант 2']
	const dateInputs = [
		'Начало регистрации',
		'Окончание регистрации',
		'Начало голосования',
		'Окончание голосования',
	]
	const groups = [
		{
			title: 'Отдел разработки',
			people: [
				{
					FullName: 'Смирнов Алексей Дмитриевич',
					email: 'smirnov.ad@techdev.ru',
				},
				{
					FullName: 'Кузнецова Екатерина Сергеевна',
					email: 'kuznetsova.es@techdev.ru',
				},
				{ FullName: 'Попов Игорь Васильевич', email: 'popov.iv@techdev.ru' },
				{
					FullName: 'Васильева Анна Михайловна',
					email: 'vasileva.am@techdev.ru',
				},
				{ FullName: 'Новиков Денис Павлович', email: 'novikov.dp@techdev.ru' },
			],
		},
		{
			title: 'Отдел маркетинга',
			people: [
				{
					FullName: 'Федорова Ольга Игоревна',
					email: 'fedorova.oi@market.com',
				},
				{
					FullName: 'Морозов Артем Викторович',
					email: 'morozov.av@market.com',
				},
				{
					FullName: 'Антонова Мария Александровна',
					email: 'antonova.ma@market.com',
				},
				{ FullName: 'Лебедев Кирилл Олегович', email: 'lebedev.ko@market.com' },
			],
		},
		{
			title: 'Финансовый отдел',
			people: [
				{
					FullName: 'Соколова Наталья Владимировна',
					email: 'sokolova.nv@finance.org',
				},
				{ FullName: 'Волков Петр Николаевич', email: 'volkov.pn@finance.org' },
				{
					FullName: 'Козлова Ирина Станиславовна',
					email: 'kozlova.is@finance.org',
				},
				{
					FullName: 'Павлов Александр Денисович',
					email: 'pavlov.ad@finance.org',
				},
				{
					FullName: 'Семенова Елена Витальевна',
					email: 'semenova.ev@finance.org',
				},
				{
					FullName: 'Голубев Дмитрий Анатольевич',
					email: 'golubev.da@finance.org',
				},
			],
		},
	]

	const [questions, setQuestions] = useState([{ id: 1 }])

	const addQuestion = () => {
		const newId =
			questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1
		setQuestions([...questions, { id: newId }])
	}

	const removeQuestion = id => {
		if (questions.length <= 1) return
		setQuestions(questions.filter(question => question.id !== id))
	}

	return (
		<>
			<div className='flex gap-3 items-center mb-3'>
				<p className='font-bold text-xl bg-[#f4f4f4] rounded-lg p-2'>ШАГ 1</p>
				<p className='font-bold text-xl'>Настройки</p>
			</div>
			<div className='grid grid-cols-3 gap-3'>
				<div className='col-span-2 grid grid-cols-2 gap-3'>
					<div className='col-span-2'>
						<InputDefault
							title={'Название голосования'}
							required={true}
							placeholder={'Введите название'}
						/>
					</div>
					<div className='col-span-2'>
						<RadioBtn
							title={'Доступность голосования'}
							options={FirstRadio}
							required={true}
							name={1}
						/>
					</div>
					<div className='col-span-2'>
						<RadioList
							title={'Условие кворума'}
							options={ThirdRadio}
							required={true}
							name={2}
						/>
					</div>
					{dateInputs.map((item, index) => {
						return (
							<div key={index} className='col-span-1'>
								<InputDataTime title={item} required={true} />
							</div>
						)
					})}
					<div className='col-span-2'>
						<CheckBox title={'Возможность отмены электронной регистрации'} />
					</div>
					<div className='col-span-2'>
						<CheckBox title={'Возможность изменения голоса'} />
					</div>
					<div className='col-span-2'>
						<RadioBtn
							title={'Настройки пользователей'}
							options={SecondRadio}
							required={true}
							name={3}
						/>
					</div>
					<div className='col-span-2 flex flex-col gap-2'>
						<Dropdown
							placeholder={'Выберите группу'}
							title={'Группа пользователей'}
							required={true}
							options={groups.map(item => item.title)}
						/>
						<Search />

						<ScrollableContainer>
							{People.map((item, index) => (
								<PeopleCard
									key={index}
									FullName={item.FullName}
									email={item.email}
								/>
							))}
						</ScrollableContainer>
					</div>
					<div className='col-span-2'>
						<CheckBox
							title={'Разрешить другим пользователям присоединяться по ссылке'}
						/>
					</div>
				</div>
				<div className='col-span-1 flex items-center h-3/5'>
					<div className='flex flex-col gap-3'>
						<p className='text-[#505050] text-base font-normal'>Подсказка</p>
						<p className='border-dashed border-2 border-[#757575] text-[#505050] text-base font-normal p-4 rounded-xl'>
							Условие кворума — установленное законом, уставом организации или
							регламентом число участников собрания (заседания), достаточное для
							признания данного собрания правомочным принимать решения по
							вопросам его повестки дня.
						</p>
					</div>
				</div>
			</div>
			<div className='flex gap-3 items-center mt-10 mb-3'>
				<p className='font-bold text-xl bg-[#f4f4f4] rounded-lg p-2'>ШАГ 2</p>
				<p className='font-bold text-xl'>Вопросы</p>
			</div>
			<div className='grid grid-cols-3 gap-5'>
				{questions.map((question, index) => (
					<div key={question.id} className='col-span-2'>
						<VoteConstruct
							title={`Вопрос №${index + 1}`}
							delBtn={index > 0} // Разрешаем удалять все кроме первого
							onClick={() => removeQuestion(question.id)}
						/>
					</div>
				))}

				<div className='col-span-2'>
					<button
						onClick={addQuestion}
						className='w-2/5 py-3 px-4 flex gap-3 items-center justify-center whitespace-nowrap rounded-lg text-lg font-normal text-[#212121] hover:bg-[#437DE9] hover:text-white transition-all cursor-pointer'
					>
						<Plus />
						<p>Добавить вопрос</p>
					</button>
				</div>
				<div className='col-span-2 grid grid-cols-2 gap-2 mt-5'>
					<div className='col-span-1'>
						<BlueButton>
							<Rocket />
							<p>Запустить голосование</p>
						</BlueButton>
					</div>
					<div className='col-span-1'>
						<AltBlueButton>
							<Save />
							<p>Сохранить шаблон</p>
						</AltBlueButton>
					</div>
				</div>
			</div>
		</>
	)
}

const VotingTemplates = () => {
	return (
		<>
			<p className='font-semibold text-2xl mb-3'>Список шаблонов</p>
			<div className='flex flex-col gap-3'>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
			</div>
		</>
	)
}

const Constructor = () => {
	const [isActive, setIsActive] = useState(0)
	return (
		<div className='mx-60 my-[99px] text-[#212121] '>
			<p className='mak text-[40px] mb-5 '>Конструктор голосований</p>
			<div className='grid grid-cols-4 gap-2'>
				<div className='col-span-1'>
					<SideBar>
						<SideBarBtn
							index={0}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<SquarePlus />
							<p>Добавить голосование</p>
						</SideBarBtn>
						<SideBarBtn
							index={1}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<Layers />
							<p>Шаблоны голосований</p>
						</SideBarBtn>
					</SideBar>
				</div>
				<div className='col-span-3'>
					<div className='bg-white shadow-sm rounded-[20px] p-6'>
						{isActive === 0 ? (
							<>
								<VotingConstructor />
							</>
						) : (
							<>
								<VotingTemplates />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Constructor
