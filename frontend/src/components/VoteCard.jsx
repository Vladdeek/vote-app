import {
	AlarmClock,
	Calendar1,
	ChartColumn,
	Flame,
	Globe,
	ScanFace,
	Trash2,
} from 'lucide-react'
import { GreenTag, YellowTag } from './Tags'

const DateRow = ({ date, time, title }) => {
	return (
		<>
			<p className='text-lg font-normal text-[#ccc] mb-2'>{title}</p>
			<div className='flex gap-3 items-center text-xl'>
				<div className='flex gap-2 items-center'>
					<Calendar1 />
					<p className='font-normal mt-[2px]'>{date}</p>
				</div>
				<div className='flex gap-2 items-center'>
					<AlarmClock />
					<p className='font-normal mt-[2px]'>{time}</p>
				</div>
			</div>
		</>
	)
}

const VoteCard = ({
	title,
	description,
	timezone,
	dateStartReg,
	dateStartVote,
	timeStartReg,
	timeStartVote,
	dateEndReg,
	dateEndVote,
	timeEndReg,
	timeEndVote,
}) => {
	return (
		<>
			<div className='bg-white flex flex-col gap-3 rounded-[20px] p-5 shadow-sm'>
				<p className='text-2xl font-semibold'>{title}</p>
				<div className='flex justify-between'>
					<p className='text-lg font-normal text-[#ccc]'>{description}</p>
					<div className='flex items-center gap-3'>
						<Globe />
						<p className='text-lg font-normal text-[#212121]'>{timezone}</p>
					</div>
				</div>
				<div className='grid grid-cols-3'>
					<div className='col-span-1 flex flex-col gap-2'>
						<GreenTag>
							<Flame />
							<p>Голосование активно</p>
						</GreenTag>
						<YellowTag>
							<ScanFace />
							<p>Голосование на этапе регистрации</p>
						</YellowTag>
					</div>
					<div className='col-span-1 grid grid-cols-2 grid-rows-2 gap-6'>
						<div className='col-span-1 row-span-1'>
							<DateRow
								title={'Начало регистрации'}
								date={dateStartReg}
								time={timeStartReg}
							/>
						</div>
						<div className='col-span-1 row-span-1'>
							<DateRow
								title={'Начало голосования'}
								date={dateStartVote}
								time={timeStartVote}
							/>
						</div>
						<div className='col-span-1 row-span-1'>
							<DateRow
								title={'Окончание регистрации'}
								date={dateEndReg}
								time={timeEndReg}
							/>
						</div>
						<div className='col-span-1 row-span-1'>
							<DateRow
								title={'Окончание голосования'}
								date={dateEndVote}
								time={timeEndVote}
							/>
						</div>
					</div>
					<div className='col-span-1 relative'>
						<div className='flex gap-3 absolute bottom-0 right-0'>
							<button className=' bg-[#f4f4f4] hover:bg-[#ccc] transition-all rounded-lg p-2 cursor-pointer'>
								<ChartColumn />
							</button>
							<button className=' bg-[#f4f4f4] hover:bg-[#EE5B5B] hover:text-[#FFE3E3] transition-all rounded-lg p-2 cursor-pointer'>
								<Trash2 />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default VoteCard
