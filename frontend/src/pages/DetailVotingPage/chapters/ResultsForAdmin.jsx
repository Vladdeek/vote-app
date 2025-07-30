import { AlignRight, ChartColumn } from 'lucide-react'
import { Button, GrayButton } from '../../../components/Buttons'

const ResultsBlock = ({ title, description, children, buttons = true }) => {
	return (
		<div className='bg-white shadow-sm rounded-[20px] p-6'>
			<p className='text-base font-bold'>{title}</p>
			<div className='flex justify-between mb-4'>
				<p className='text-base font-normal text-[#ccc]'>{description}</p>
				{buttons && (
					<div className='flex items-center gap-3'>
						<ChartColumn
							color='white'
							className='bg-[#212121] p-2 rounded-lg w-[36px] h-[36px] cursor-pointer'
						/>
						<AlignRight
							color='#212121'
							className='bg-[#f4f4f4] p-2 rounded-lg w-[36px] h-[36px] cursor-pointer'
						/>
					</div>
				)}
			</div>
			{children}
		</div>
	)
}

const ResultsForAdmin = () => {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<div className='bg-white shadow-sm rounded-[20px] p-6'>
					<p className='text-xl font-bold'>Результаты голосования</p>
				</div>
				<ResultsBlock
					title={'№1 Пример вопроса?'}
					description={'Необходимо выбрать один вариант ответа'}
				>
					<ResultsStyle1 />
				</ResultsBlock>
				<ResultsBlock
					title={'№2 Пример вопроса?'}
					description={'Необходимо выбрать один вариант ответа'}
				>
					<ResultsStyle3 />
				</ResultsBlock>
				<ResultsBlock
					title={'№3 Пример вопроса?'}
					description={'Необходимо выбрать один вариант ответа'}
				>
					<ResultsStyle4 />
				</ResultsBlock>
				<ResultsBlock
					title={'№4 Пример вопроса?'}
					description={'Необходимо выбрать один вариант ответа'}
				>
					<ResultsStyle5 />
				</ResultsBlock>
				<ResultsBlock title={'Итоги голосования'} buttons={false}>
					<ResultsStyle2 />
				</ResultsBlock>
			</div>
		</>
	)
}

const ResultsStyle1 = () => {
	const VotingMass = [
		{
			option: 'Вариант ответа 1',
			result: 900,
		},

		{
			option: 'Вариант ответа 2',
			result: 4,
		},
		{
			option: 'Вариант ответа 3',
			result: 210,
		},
		{
			option: 'Вариант ответа 4',
			result: 1,
		},
	]
	const AllVotingPoints = 500

	const sortedVotingMass = [...VotingMass].sort((a, b) => a.result - b.result)

	const maxResult = Math.max(...sortedVotingMass.map(item => item.result))

	return (
		<>
			<div className='grid grid-cols-5 gap-2'>
				<div className='col-span-3'>
					<p className='text-start text-[#ccc] text-base'>Вариант ответа</p>
					<div className='flex flex-col-reverse gap-2'>
						{sortedVotingMass.map((item, index) => (
							<div
								key={index}
								className='flex items-center p-3 rounded-lg bg-[#D2F0FF]'
							>
								<p className='text-start font-medium text-[#2E4550]'>
									{item.option}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className='col-span-2 gap-2'>
					<p className='text-start text-[#ccc] text-base'>Результат</p>
					<div className='flex flex-col-reverse gap-2'>
						{sortedVotingMass.map((item, index) => {
							const percentage = (item.result / AllVotingPoints) * 100
							const isMaxResult = item.result === maxResult

							return (
								<div
									key={index}
									className={`overflow-hidden rounded-lg border-1 ${
										isMaxResult ? 'border-[#E6FFDD]' : 'border-[#f4f4f4]'
									} `}
								>
									<div className='relative p-[11px] rounded-lg flex items-center'>
										<div
											className={`absolute top-0 left-0 h-full rounded-lg ${
												isMaxResult ? 'bg-[#E6FFDD]' : 'bg-[#f4f4f4]'
											}`}
											style={{ width: `${percentage}%` }}
										/>
										<div className='relative z-10 w-full'>
											<p className='text-start font-medium text-[#212121]'>
												{item.result}
											</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}
const ResultsStyle2 = () => {
	const VotingMass = [
		{
			option: 'За',
			result: 3200,
			color: '#5BC25B',
			textColor: '#59E059',
		},
		{
			option: 'Против',
			result: 288,
			color: '#EE5B5B',
			textColor: '#FF6B6B',
		},
		{
			option: 'Воздержались',
			result: 200,
			color: '#f4f4f4',
			textColor: '#ccc',
		},
	]

	const AllVotingPoints = VotingMass.reduce((sum, item) => sum + item.result, 0)
	console.log(AllVotingPoints)
	const maxResult = Math.max(...VotingMass.map(item => item.result))

	return (
		<div className='gap-4 p-4 grid grid-cols-3'>
			{VotingMass.map((item, index) => {
				const percentage = (item.result / AllVotingPoints) * 100

				return (
					<div key={index} className='flex flex-col items-center col-span-1'>
						<div className='relative w-full border-1 border-[#f4f4f4] rounded-[20px] h-[194px] flex flex-col justify-end overflow-hidden'>
							<div className='absolute top-3 text-center w-full flex justify-center'>
								<p className='text-xl font-bold'>{item.option}</p>
							</div>
							<div
								className={`w-full rounded-t-[20px] transition-all duration-500 `}
								style={{
									height: `${percentage}%`,
									backgroundColor: `${item.color}`,
								}}
							/>
							<div className='absolute bottom-3 flex justify-center w-full'>
								<p
									className={`text-xl font-bold ${
										percentage >= 14 && item.color !== '#f4f4f4'
											? 'text-white'
											: 'text-[#212121]'
									}`}
								>
									{percentage.toFixed(1)}%{' '}
									<span style={{ color: `${item.textColor}` }}>
										({item.result})
									</span>
								</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
const ResultsStyle3 = () => {
	const VotingMass = [
		{
			option: 'Вариант 1',
			result: 1000,
			color: '#EE5B5B',
		},
		{
			option: 'Вариант 2',
			result: 500,
			color: '#F57575',
		},
		{
			option: 'Вариант 3',
			result: 76,
			color: '#FFE3E3',
		},
	]

	const maxResult = Math.max(...VotingMass.map(item => item.result))
	const AllVotingPoints = maxResult

	return (
		<div className='grid grid-cols-5 gap-2'>
			<div className='col-span-3'>
				<div className='py-6 px-10 flex justify-between h-[313px]  border-1 border-[#f4f4f4] rounded-xl'>
					{VotingMass.map((item, index) => {
						const percentage = (item.result / AllVotingPoints) * 100

						return (
							<div
								key={index}
								className='flex flex-col items-center col-span-1'
							>
								<div className='relative rounded-xl h-full w-22 flex flex-col justify-end overflow-hidden'>
									<div
										className={`w-full rounded-t-xl transition-all duration-500 `}
										style={{
											height: `${percentage}%`,
											backgroundColor: `${item.color}`,
										}}
									/>
								</div>
								<div className='text-center w-full flex justify-center'>
									<p className='text-base font-normal text-[#ccc]'>
										{item.option}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className='col-span-2 flex flex-col gap-3 justify-center h-full'>
				{VotingMass.map((item, index) => {
					return (
						<p
							key={index}
							className='border-l-3 px-3 py-1'
							style={{
								borderColor: `${item.color}`,
							}}
						>
							{item.option}
						</p>
					)
				})}
			</div>
		</div>
	)
}

const ResultsStyle4 = () => {
	const VotingMass = [
		{
			question: 'Вопрос 1',
			results: [
				{ option: 'За', result: 100 },
				{ option: 'Против', result: 25 },
			],
			color: 1,
		},
		{
			question: 'Вопрос 2',
			results: [
				{ option: 'За', result: 10 },
				{ option: 'Против', result: 5 },
			],
			color: 2,
		},
		{
			question: 'Вопрос 3',
			results: [
				{ option: 'За', result: 133 },
				{ option: 'Против', result: 43 },
			],
			color: 3,
		},
		{
			question: 'Вопрос 4',
			results: [
				{ option: 'За', result: 321 },
				{ option: 'Против', result: 156 },
			],
			color: 4,
		},
		{
			question: 'Вопрос 5',
			results: [
				{ option: 'За', result: 75 },
				{ option: 'Против', result: 50 },
			],
			color: 5,
		},
	]
	const colors = {
		1: { primary: '#31B831', secondary: '#D7FFD7' },
		2: { primary: '#EE5B5B', secondary: '#FFC9C9' },
		3: { primary: '#FFD17D', secondary: '#FFF2D9' },
		4: { primary: '#4285F4', secondary: '#CADDFF' },
		5: { primary: '#CD4998', secondary: '#FFD3ED' },
	}

	return (
		<>
			<div className='grid grid-cols-5 gap-2'>
				<div className='col-span-3 border-1 border-[#f4f4f4] rounded-xl flex flex-col gap-3 p-4'>
					{VotingMass.map((item, index) => {
						const maxResult = Math.max(...item.results.map(item => item.result))
						const sortedResults = [...item.results].sort(
							(a, b) => b.result - a.result
						)
						const AllVotingPoints = maxResult

						return (
							<div key={index} className='flex flex-col'>
								{sortedResults.map((resultItem, resultIndex) => {
									const percentage = (resultItem.result / AllVotingPoints) * 100
									const isMaxResult = resultItem.result === maxResult
									return (
										<div
											key={resultIndex}
											className='flex w-full items-center gap-2'
										>
											<div
												className={`h-8 rounded-lg ${
													isMaxResult ? 'w-3/5' : ''
												}`}
												style={{
													width: isMaxResult ? '' : `${percentage}%`,
													backgroundColor: isMaxResult
														? colors[item.color].primary
														: colors[item.color].secondary,
												}}
											></div>
											<p>
												{resultItem.option} - {resultItem.result}
											</p>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
				<div className='col-span-2 flex flex-col gap-3 justify-center h-full'>
					{VotingMass.map((item, index) => {
						return (
							<p
								key={index}
								className='border-l-3 px-3 py-1'
								style={{
									borderColor: `${colors[item.color].primary}`,
								}}
							>
								{item.question}
							</p>
						)
					})}
				</div>
			</div>
		</>
	)
}

const ResultsStyle5 = () => {
	const VotingMass = [
		{
			question: 'Вопрос 1',
			results: [
				{ option: 'За', result: 10 },
				{ option: 'Против', result: 25 },
				{ option: 'Воздержаться', result: 5 },
			],
		},
		{
			question: 'Вопрос 2',
			results: [
				{ option: 'За', result: 10 },
				{ option: 'Против', result: 34 },
				{ option: 'Воздержаться', result: 25 },
			],
		},
		{
			question: 'Вопрос 3',
			results: [
				{ option: 'За', result: 133 },
				{ option: 'Против', result: 43 },
				{ option: 'Воздержаться', result: 25 },
			],
		},
		{
			question: 'Вопрос 4',
			results: [
				{ option: 'За', result: 13 },
				{ option: 'Против', result: 1 },
				{ option: 'Воздержаться', result: 25 },
			],
		},
	]

	const allOptions = VotingMass.flatMap(item =>
		item.results.map(result => result.option)
	)
	const uniqueOptions = [...new Set(allOptions)]

	const getOptionColor = option => {
		switch (option) {
			case 'За':
				return '#5BC25B'
			case 'Против':
				return '#EE5B5B'
			default:
				return '#ccc'
		}
	}

	return (
		<>
			<div className='grid grid-cols-5 gap-2'>
				<div className='col-span-3 border-1 border-[#f4f4f4] h-100 rounded-xl flex justify-between p-4'>
					{VotingMass.map((item, index) => {
						const maxResult = Math.max(...item.results.map(item => item.result))
						const AllVotingPoints = maxResult
						return (
							<div
								key={index}
								className='grid grid-cols-3 grid-rows-[1fr_auto] gap-1 w-30 '
							>
								{item.results.map((resultItem, resultIndex) => {
									const percentage = (resultItem.result / AllVotingPoints) * 100
									return (
										<>
											<div
												key={resultIndex}
												className='col-span-1 flex flex-col-reverse h-full'
											>
												<div
													className='rounded-lg'
													style={{
														height: `${percentage}%`,
														backgroundColor: getOptionColor(resultItem.option),
													}}
												></div>
											</div>
										</>
									)
								})}
								<p className='h-1 whitespace-nowrap text-[#ccc] text-center col-span-3 pb-4'>
									{item.question}
								</p>
							</div>
						)
					})}
				</div>
				<div className='col-span-2 flex flex-col gap-3 justify-center h-full'>
					{uniqueOptions.map((option, index) => (
						<p
							key={index}
							className='border-l-3 px-3 py-1'
							style={{
								borderColor: getOptionColor(option),
							}}
						>
							{option}
						</p>
					))}
				</div>
			</div>
		</>
	)
}

export default ResultsForAdmin
