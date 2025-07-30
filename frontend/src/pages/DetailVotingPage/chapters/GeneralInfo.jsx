import {
	AlarmClock,
	Calendar1,
	FileArchive,
	Globe,
	ScanFace,
} from 'lucide-react'
import { BlueTag, GrayTag, YellowTag } from '../../../components/Tags'
import { BlueButton } from '../../../components/Buttons'
import { Dropdown } from '../../../components/Inputs'
import { timeZones } from '../../../data/TimeZone'
import { useState } from 'react'

const DateRow = ({ date, time, title, column }) => {
	return (
		<>
			<p className='text-base font-regular whitespace-nowrap font-normal text-[#ccc] mb-2'>
				{title}
			</p>
			<div
				className={`flex ${
					column ? 'flex-col' : 'items-center'
				} gap-3  text-xl`}
			>
				<div className='flex gap-2 items-center'>
					<Calendar1 />
					<p className='font-regular text-base mt-[2px]'>{date}</p>
				</div>
				<div className='flex gap-2 items-center'>
					<AlarmClock />
					<p className='font-regular text-base mt-[2px]'>{time}</p>
				</div>
			</div>
		</>
	)
}

const GeneralInfo = ({ title, description, TZid, deadlines }) => {
	const materials = ['1', '2', '3', '4']

	return (
		<>
			<div className='bg-white shadow-sm rounded-[20px] p-6'>
				<p className='text-xl font-bold'>{title}</p>
				<div className='flex justify-between mb-4'>
					<p className='text-base font-regular text-[#ccc]'>{description}</p>
					<div className='flex items-center gap-3'>
						<Globe />
						<p className='text-base font-regular text-[#212121]'>
							{timeZones[TZid]}
						</p>
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex flex-col justify-between w-[399px]'>
						<div className='flex flex-col gap-3'>
							<div className='flex w-full'>
								<YellowTag wfull={true}>
									<ScanFace />
									<p>Голосование на этапе регистрации</p>
								</YellowTag>
							</div>
							<GrayTag>
								<FileArchive />
								<p>Тайное</p>
							</GrayTag>
							<div className='flex gap-1 items-center'>
								<p className='w-full text-base font-medium'>
									Вероятность переголосования
								</p>
								<div className='w-[77px]'>
									<BlueTag wfull={true}>
										<p className='font-medium text-base'>Есть</p>
									</BlueTag>
								</div>
							</div>
							<div className='flex gap-1 items-center'>
								<p className='w-full text-base font-medium '>
									Вероятность отмены регистрации
								</p>
								<div className='w-[77px]'>
									<BlueTag wfull={true}>
										<p className='font-medium text-base'>Есть</p>
									</BlueTag>
								</div>
							</div>
						</div>
						<BlueButton>
							<p>Результаты</p>
						</BlueButton>
					</div>
					<div className='grid grid-cols-2 gap-3 w-[482px]'>
						{deadlines.map((item, index) => {
							return (
								<div
									key={index}
									className={`${
										index === 0 || index === 1 ? 'col-span-1' : 'col-span-2'
									} ${
										index % 2 === 0 ? 'bg-[#EEFFED]' : 'bg-[#FFF7F7]'
									} flex flex-col py-1 px-3 gap-2 rounded-lg`}
								>
									<DateRow
										title={item.title}
										date={item.date}
										time={item.time}
										column={index === 0 || index === 1 ? true : false}
									/>
								</div>
							)
						})}
						<div className='col-span-2'>
							<Dropdown
								placeholder='Материалы голосования'
								options={materials}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default GeneralInfo
