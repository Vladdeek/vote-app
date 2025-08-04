import { useEffect, useState } from 'react'
import { StatisticCircle } from '../../../components/ProgressCircle'
import { AlarmClock, Calendar1, Check, X } from 'lucide-react'
import { Chart1 } from '../../../components/Charts'

const VotingStatistic = ({
	conditionPercent,
	UpdateDate,
	UpdateTime,
	totalPeople,
	registeredCount,
	votedCount,
}) => {
	const [conditionStatus, setConditionStatus] = useState(false)

	useEffect(() => {
		if (totalPeople > 0) {
			const currentPercent = (registeredCount / totalPeople) * 100
			if (currentPercent >= conditionPercent) {
				setConditionStatus(true)
			} else {
				setConditionStatus(false)
			}
		}
	}, [registeredCount, totalPeople, conditionPercent])

	return (
		<div className='flex flex-col gap-3'>
			<div className='bg-white shadow-sm rounded-[20px] h-fit p-6'>
				<div className='flex flex-col gap-2 mb-6'>
					<p className='text-xl font-bold'>Ход регистрации и голосования</p>
					<div className='flex gap-4 mb-4'>
						<p className='text-base font-normal'>Обновлено:</p>
						<div className='flex gap-2'>
							<Calendar1 />
							<p className='text-base font-normal'>{UpdateDate}</p>
						</div>
						<div className='flex gap-2'>
							<AlarmClock />
							<p className='text-base font-normal'>{UpdateTime}</p>
						</div>
					</div>
					<div className='flex gap-6'>
						<flex className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#FFD17D]'></div>
							<p className='text-base font-normal'>Зарегистрированы</p>
						</flex>
						<flex className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#f4f4f4]'></div>
							<p className='text-base font-normal'>Не зарегистрированы</p>
						</flex>
						<flex className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#5BC25B]'></div>
							<p className='text-base font-normal'>Проголосовали</p>
						</flex>
						<flex className='flex gap-2'>
							<div className='rounded-full h-5 w-5 bg-[#EE5B5B]'></div>
							<p className='text-base font-normal'>Не проголосовали</p>
						</flex>
					</div>
				</div>

				<div className='grid grid-cols-3 gap-5'>
					<div className='col-span-1'>
						<StatisticCircle
							totalPeople={totalPeople}
							registeredCount={registeredCount}
							votedCount={votedCount}
						/>
					</div>
					<div className='col-span-2 flex flex-col gap-10 my-auto'>
						<div className='flex flex-col gap-2'>
							<p className='font-normal text-base text-[#ccc]'>Условия:</p>
							<p className='font-semibold text-base'>
								Необходимо участие в голосовании более чем половины участников
							</p>
						</div>
						<div className='flex flex-col gap-4'>
							<p className='font-normal text-base text-[#ccc]'>Статус:</p>
							{conditionStatus ? (
								<div className='flex gap-2 text-[#5BC25B]'>
									<Check />
									<p className='font-semibold text-base '>Условия выполнены</p>
								</div>
							) : (
								<div className='flex gap-4 text-[#EE5B5B]'>
									<X />
									<p className='font-semibold text-base '>
										Условия не выполнены
									</p>
								</div>
							)}
						</div>
						<div className='flex flex-col gap-4'>
							<p className='font-normal text-base text-[#ccc]'>
								Электронная явка [{conditionPercent}%]
							</p>
							<div className='rounded-full w-2/3 bg-[#f4f4f4] h-4 overflow-hidden'>
								<div
									className='rounded-full bg-[#7DD4FF] h-full'
									style={{ width: `${conditionPercent}%` }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white shadow-sm rounded-[20px] h-fit p-6'>
				<div className='flex flex-col gap-2'>
					<p className='text-xl font-bold'>Ход регистрации и голосования</p>
					<Chart1
						series={[
							{
								name: 'Общая явка',
								data: [95, 82, 65, 59, 55, 52, 49, 39, 30, 32, 35],
							},
							{
								name: 'Явка голосующих',
								data: [25, 22, 20, 28, 38, 42, 45, 48, 53, 70, 88],
							},
						]}
						colors={['#7DD4FF', '#5BC25B']}
					/>
				</div>
			</div>
		</div>
	)
}
export default VotingStatistic
