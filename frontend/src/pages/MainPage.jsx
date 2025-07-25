import { Flame, Rocket, ScanFace } from 'lucide-react'
import { AltBlueButton, BlueButton, RedButton } from '../components/Buttons'

const MainPage = () => {
	const heights = [
		'30%',
		'45%',
		'60%',
		'25%',
		'75%',
		'90%',
		'35%',
		'50%',
		'65%',
		'80%',
		'95%',
		'44%',
	]
	const colors = ['#BD3636', '#FFE3E3', '#E87C7C', '#F2A4A4']
	return (
		<>
			<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
				<p className='mak text-[40px] mb-5 '>Главная</p>
				<div className='grid grid-cols-6 gap-2 '>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5'>
						<p className='text-[38px] font-semibold'>3.000</p>
						<p className='text-[18px] font-light'>Голосований</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-semibold'>4.000.000</p>
							<p className='text-[18px] font-light'>Транзакций</p>
							<img
								className='h-full absolute right-0'
								src='assets/img/img1.svg'
								alt=''
							/>
						</div>
					</div>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5'>
						<p className='text-[38px] font-semibold'>150</p>
						<p className='text-[18px] font-light'>Администраторов</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-semibold'>1.500</p>
							<p className='text-[18px] font-light'>Уникальных пользователей</p>
							<img
								className='h-full absolute right-0'
								src='assets/img/img2.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
				<p className='mak text-[40px] mb-5 mt-[99px]'>
					Управление голосованием
				</p>
				<div className='flex gap-2'>
					<div className='flex flex-col gap-2'>
						<div className='bg-white rounded-[20px] p-5 w-[634px] h-[400px] grid grid-cols-5 gap-2'>
							<div className='col-span-3 flex flex-col justify-between'>
								<p className='font-semibold text-2xl'>
									Ваш голос — неприкосновенен.
								</p>
								<p className='text-lg font-light'>
									Участвуйте в голосованиях с криптографической защитой, где
									каждый выбор остаётся в вечном блокчейне. Влияйте на решения
									по-настоящему — без посредников, без фальсификаций.
									Присоединяйтесь к революции прозрачных решений!
								</p>
								<BlueButton>
									<Rocket />
									<p>Создать голосование</p>
								</BlueButton>
							</div>
							<img
								className='col-span-2 h-full rounded-[12px]'
								src='assets/img/ca5f98a87def00ad482c1f2027c8e36dd917f611.png'
								alt=''
							/>
						</div>
						<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[634px] h-[481px]'>
							<p className='font-semibold text-2xl'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the
							</p>
							<p className='font-light text-base text-[#CCCCCC]'>
								Группа пользователей
							</p>
							<div className='bg-[#FFFBD0] text-[#564E13] font-medium rounded-lg py-2 px-3 inline-flex items-center justify-center w-fit gap-2'>
								<ScanFace />
								<p>Голосование на этапе регистрации</p>
							</div>
							<div className='grid grid-cols-2 gap-2'>
								<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
									<p className='text-base font-light text-[#212121]'>
										Проголосовало человек
									</p>
									<div className='flex items-center gap-2'>
										<p className='text-[32px] font-semibold'>141</p>
										<p className='bg-[#E6FFDD] text-[#135617] rounded-lg p-1'>
											+60%
										</p>
									</div>
									<p className='text-base font-light text-[#ccc]'>
										За последние 24 часа
									</p>
								</div>
								<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px]'></div>
								<BlueButton>
									<p>Завершить регистрацию</p>
								</BlueButton>
								<AltBlueButton>
									<p>Начать голосование</p>
								</AltBlueButton>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[796px] h-[431px]'>
							<p className='font-semibold text-2xl'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the
							</p>
							<p className='font-light text-base text-[#CCCCCC]'>
								Группа пользователей
							</p>
							<div className='bg-[#E6FFDD] text-[#135617] font-medium rounded-lg py-2 px-3 inline-flex items-center justify-center w-fit gap-2'>
								<Flame />
								<p>Голосование активно</p>
							</div>
							<div className='grid grid-cols-2 gap-2'>
								<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
									<p className='text-base font-light text-[#212121]'>
										Проголосовало человек
									</p>
									<div className='flex items-center gap-2'>
										<p className='text-[32px] font-semibold'>48</p>
										<p className='bg-[#E6FFDD] text-[#135617] rounded-lg p-1'>
											+10%
										</p>
									</div>
									<p className='text-base font-light text-[#ccc]'>
										За последние 24 часа
									</p>
								</div>
								<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px]'></div>
								<RedButton title={'Завершить голосование'} />
							</div>
						</div>
						<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[796px] h-[450px]'>
							<p className='font-semibold text-2xl'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the
							</p>
							<p className='font-light text-base text-[#CCCCCC]'>
								Группа пользователей
							</p>
							<div className='bg-[#FFFBD0] text-[#564E13] font-medium rounded-lg py-2 px-3 inline-flex items-center justify-center w-fit gap-2'>
								<ScanFace />
								<p>Голосование на этапе регистрации</p>
							</div>
							<div className='grid grid-cols-2 gap-2'>
								<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
									<p className='text-base font-light text-[#212121]'>
										Проголосовало человек
									</p>
									<div className='flex items-center gap-2'>
										<p className='text-[32px] font-semibold'>99</p>
										<p className='bg-[#E6FFDD] text-[#135617] rounded-lg p-1'>
											+16%
										</p>
									</div>
									<p className='text-base font-light text-[#ccc]'>
										За последние 24 часа
									</p>
								</div>
								<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px]'></div>
								<BlueButton>
									<p>Завершить регистрацию</p>
								</BlueButton>
								<AltBlueButton>
									<p>Начать голосование</p>
								</AltBlueButton>
							</div>
						</div>
					</div>
				</div>
				<p className='mak text-[40px] mb-5 mt-[99px]'>Общая статистика</p>
				<div className='grid grid-cols-3 gap-2'>
					<div className='bg-white rounded-[20px] flex flex-col justify-between h-70 p-5'>
						<p className='font-semibold text-2xl'>Регистрация и голосование</p>
						<p className='font-light text-base text-[#CCCCCC]'>
							Соотношение регистраций и голосов
						</p>
						<div className='grid grid-cols-12 gap-1 h-40 items-end'>
							{heights.map((height, index) => (
								<div
									key={index}
									className='rounded-sm transition-all duration-300'
									style={{
										height: height,
										backgroundColor: colors[index % colors.length], // Циклический выбор цвета
									}}
								/>
							))}
						</div>
						<p className='font-light text-base text-[#CCCCCC]'>
							В период с 10.06.2025 по 10.07.2025
						</p>
					</div>
					<div className='bg-white rounded-[20px] flex flex-col justify-between h-70 p-5'>
						<p className='font-semibold text-2xl'>Количество голосующих</p>
						<p className='font-light text-base text-[#CCCCCC]'>
							Всего проголосовало
						</p>
						<div className='relative w-fit'>
							<p className='text-[96px] font-bold'>1500</p>
							<p className='bg-[#E6FFDD] text-[#135617] absolute top-3 -right-12 rounded-lg p-1'>
								+16%
							</p>
						</div>
						<p className='font-light text-base text-[#CCCCCC]'>
							В период с 10.06.2025 по 10.07.2025
						</p>
					</div>
					<div className='bg-white rounded-[20px] flex flex-col justify-between h-70 p-5'>
						<p className='font-semibold text-2xl'>Регистрация и голосование</p>
						<p className='font-light text-base text-[#CCCCCC]'>
							Соотношение регистраций и голосов
						</p>
						<div className='flex flex-col gap-1 w-full'>
							<div className='bg-[#FFD17D] w-[65%] h-[62.5px] rounded-sm'></div>
							<div className='bg-[#7DD4FF] w-full h-[62.5px] rounded-sm'></div>
						</div>
						<p className='font-light text-base text-[#CCCCCC]'>
							В период с 10.06.2025 по 10.07.2025
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default MainPage
