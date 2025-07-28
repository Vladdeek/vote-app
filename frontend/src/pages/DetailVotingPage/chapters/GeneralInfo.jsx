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

const GeneralInfo = ({ title, description, TZid }) => {
	const materials = ['1', '2', '3', '4']
	return (
		<>
			<div className='bg-white shadow-sm rounded-[20px] p-6'>
				<p className='text-2xl font-semibold'>{title}</p>
				<div className='flex justify-between mb-4'>
					<p className='text-lg font-normal text-[#ccc]'>{description}</p>
					<div className='flex items-center gap-3'>
						<Globe />
						<p className='text-lg font-normal text-[#212121]'>
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
							<div className='flex justify-between items-center'>
								<p className='w-fit text-xl font-normal'>
									Вероятность переголосования
								</p>
								<div className='w-[77px]'>
									<BlueTag wfull={true}>
										<p>Есть</p>
									</BlueTag>
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<p className='w-fit text-xl font-normal'>
									Вероятность отмены регистрации
								</p>
								<div className='w-[77px]'>
									<BlueTag wfull={true}>
										<p>Есть</p>
									</BlueTag>
								</div>
							</div>
						</div>
						<BlueButton>
							<p>Результаты</p>
						</BlueButton>
					</div>
					<div className='grid grid-cols-2 gap-3 w-[482px]'>
						<div className='col-span-1 bg-[#EEFFED] flex flex-col py-1 px-3 gap-2 rounded-lg'>
							<p className='text-[#ccc] font-normal text-lg'>
								Начало регистрации
							</p>
							<div className='flex gap-3 text-xl items-center'>
								<Calendar1 />
								<p className='font-normal mt-[2px]'>06.07.2025</p>
							</div>
							<div className='flex gap-3 text-xl items-center'>
								<AlarmClock />
								<p className='font-normal mt-[2px]'>10:00</p>
							</div>
						</div>
						<div className='col-span-1 bg-[#FFF7F7] flex flex-col py-1 px-3 gap-2 rounded-lg'>
							<p className='text-[#ccc] font-normal text-lg'>
								Окончание регистрации
							</p>
							<div className='flex gap-3 text-xl items-center'>
								<Calendar1 />
								<p className='font-normal mt-[2px]'>06.07.2025</p>
							</div>
							<div className='flex gap-3 text-xl items-center'>
								<AlarmClock />
								<p className='font-normal mt-[2px]'>10:00</p>
							</div>
						</div>
						<div className='col-span-2 bg-[#EEFFED] flex flex-col py-1 px-3 gap-2 rounded-lg'>
							<p className='text-[#ccc] font-normal text-lg'>
								Начало голосования
							</p>
							<div className='flex gap-5 text-xl items-center'>
								<div className='flex gap-3 items-center'>
									<Calendar1 />
									<p className='font-normal mt-[2px]'>06.07.2025</p>
								</div>
								<div className='flex gap-3 items-center'>
									<AlarmClock />
									<p className='font-normal mt-[2px]'>10:00</p>
								</div>
							</div>
						</div>
						<div className='col-span-2 bg-[#FFF7F7] flex flex-col py-1 px-3 gap-2 rounded-lg'>
							<p className='text-[#ccc] font-normal text-lg'>
								Окончание голосования
							</p>
							<div className='flex gap-5 text-xl items-center'>
								<div className='flex gap-3 items-center'>
									<Calendar1 />
									<p className='font-normal mt-[2px]'>06.07.2025</p>
								</div>
								<div className='flex gap-3 items-center'>
									<AlarmClock />
									<p className='font-normal mt-[2px]'>10:00</p>
								</div>
							</div>
						</div>
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
