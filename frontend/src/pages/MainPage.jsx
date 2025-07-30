import { Flame, Rocket, ScanFace } from 'lucide-react'
import { AltBlueButton, BlueButton, RedButton } from '../components/Buttons'
import { GreenTag, YellowTag } from '../components/Tags'
import { useState } from 'react'
import Calendar from '../components/Calendar'
import { ActualVoteCard, MinInfoVoteCard } from '../components/VoteCard'
import { LinkText } from '../components/Components'

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
	const [role, setRole] = useState('голосующий')
	return (
		<>
			<button
				className='hover:bg-[#505050] text-white bg-[#212121] transition-all rounded-xl px-5 py-3 cursor-pointer absolute z-1000'
				onClick={() => {
					role === 'голосующий' ? setRole('админ') : setRole('голосующий')
				}}
			>
				сменить роль
			</button>
			{role !== 'админ' && (
				<>
					<div className='relative px-40  -z-1'>
						<p className='mak text-[40px] mb-5 text-white absolute mt-16 ml-20'>
							Главная
						</p>
						<img
							className='rounded-[20px] object-cover'
							src='assets\img\bfbfe1dc293cbe00c215ff63f52772875e1e8d9c.png'
							alt=''
						/>
						<p className='text-[48px] text-white absolute bottom-[40px] ml-20 uppercase font-bold w-1/3 '>
							криптоголосвание на блокчейне
						</p>
					</div>
				</>
			)}

			<div
				className={`mx-60 ${
					role === 'админ' ? 'my-[99px]' : 'mb-[99px] mt-3'
				}  text-[#212121] `}
			>
				{role === 'админ' && <p className='mak text-[40px] mb-5 '>Главная</p>}

				<div className='grid grid-cols-6 gap-2 '>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5'>
						<p className='text-[38px] font-bold'>3.000</p>
						<p className='text-base font-light'>Голосований</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-bold'>4.000.000</p>
							<p className='text-base font-base'>Транзакций</p>
							<img
								className='h-full absolute right-0'
								src='assets/img/img1.svg'
								alt=''
							/>
						</div>
					</div>
					<div className='bg-white col-span-1 h-50 rounded-[20px] flex flex-col justify-center p-5'>
						<p className='text-[38px] font-bold'>150</p>
						<p className='text-[18px] font-base'>Администраторов</p>
					</div>
					<div className='bg-white col-span-2 h-50 rounded-[20px] p-5 relative overflow-hidden'>
						<div className='flex flex-col justify-center h-full'>
							<p className='text-[38px] font-bold'>1.500</p>
							<p className='text-base font-base'>Уникальных пользователей</p>
							<img
								className='h-full absolute right-0'
								src='assets/img/img2.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
				{role === 'админ' && (
					<>
						<p className='mak text-[40px] mb-5 mt-[99px]'>
							Управление голосованием
						</p>
						<div className='flex gap-2'>
							<div className='flex flex-col gap-2'>
								<div className='bg-white rounded-[20px] px-6 py-8 w-[634px] h-[400px] grid grid-cols-5 gap-2'>
									<div className='col-span-3 flex flex-col justify-between'>
										<p className='font-bold text-xl  leading-5'>
											Ваш голос — неприкосновенен.
										</p>
										<p className='text-base font-base  leading-5'>
											Участвуйте в голосованиях с криптографической защитой, где
											каждый выбор остаётся в вечном блокчейне. Влияйте на
											решения по-настоящему — без посредников, без
											фальсификаций. Присоединяйтесь к революции прозрачных
											решений!
										</p>
										<BlueButton>
											<Rocket />
											<p className='font-medium text-base'>
												Создать голосование
											</p>
										</BlueButton>
									</div>
									<img
										className='col-span-2 h-full rounded-[12px]'
										src='assets/img/ca5f98a87def00ad482c1f2027c8e36dd917f611.png'
										s
										alt=''
									/>
								</div>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[634px] h-[481px]'>
									<p className='font-bold text-xl'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-base text-base text-[#CCCCCC]'>
										Группа пользователей
									</p>
									<YellowTag wfull={false}>
										<ScanFace />
										<p className='font-medium text-base'>
											Голосование на этапе регистрации
										</p>
									</YellowTag>
									<div className='grid grid-cols-2 gap-2'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
											<p className='text-base font-regular text-[#212121]'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold'>141</p>
												<p className='bg-[#E6FFDD] text-[#135617] text-base font-medium rounded-lg p-1'>
													+60%
												</p>
											</div>
											<p className='text-base font-regular text-[#ccc]'>
												За последние 24 часа
											</p>
										</div>
										<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px]'></div>
										<BlueButton>
											<p className='text-base font-semibold'>
												Завершить регистрацию
											</p>
										</BlueButton>
										<AltBlueButton>
											<p className='text-base font-semibold'>
												Начать голосование
											</p>
										</AltBlueButton>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-2'>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[796px] h-[431px]'>
									<p className='font-bold text-xl'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-light text-base text-[#CCCCCC]'>
										Группа пользователей
									</p>
									<GreenTag>
										<Flame />
										<p>Голосование активно</p>
									</GreenTag>
									<div className='grid grid-cols-2 gap-2'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
											<p className='text-base font-regular text-[#212121]'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold'>48</p>
												<p className='bg-[#E6FFDD] text-[#135617] font-medium rounded-lg p-1'>
													+10%
												</p>
											</div>
											<p className='text-base font-regular text-[#ccc]'>
												За последние 24 часа
											</p>
										</div>
										<div className='col-span-1 rounded-2xl border-1 border-[#ccc] h-[150px]'></div>
										<RedButton title={'Завершить голосование'} />
									</div>
								</div>
								<div className='bg-white rounded-[20px] inline-flex flex-col justify-between p-5 w-[796px] h-[450px]'>
									<p className='font-bold text-xl'>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the
									</p>
									<p className='font-regular text-base text-[#CCCCCC]'>
										Группа пользователей
									</p>
									<YellowTag wfull={false}>
										<ScanFace />
										<p>Голосование на этапе регистрации</p>
									</YellowTag>
									<div className='grid grid-cols-2 gap-2'>
										<div className='col-span-1 rounded-2xl flex flex-col justify-between border-1 border-[#ccc] h-[150px] p-4'>
											<p className='text-base font-regular text-[#212121]'>
												Проголосовало человек
											</p>
											<div className='flex items-center gap-2'>
												<p className='text-[32px] font-bold'>99</p>
												<p className='bg-[#E6FFDD] text-[#135617] font-medium rounded-lg p-1'>
													+16%
												</p>
											</div>
											<p className='text-base font-regular text-[#ccc]'>
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
					</>
				)}
				{role === 'админ' && (
					<p className='mak text-[40px] mb-5 mt-[99px]'>Общая статистика</p>
				)}
				{role !== 'админ' && (
					<div className='grid grid-cols-9 gap-2 mt-2 '>
						<div className='bg-white rounded-[20px] col-span-5 h-[782px] flex flex-col justify-between p-6'>
							<p className='font-semibold text-2xl'>Мои голосования</p>
							<div className='flex flex-col gap-4'>
								<MinInfoVoteCard
									title={'выфв ыфвыф выфв ыф вфывфыв фыавы пвы'}
									description={'dsadsad dsa dsa dsd'}
									timezone={'(UTC+3) Россия - Москва (MSK)'}
									date={'06.07.2025'}
									time={'10:00'}
								/>
								<MinInfoVoteCard
									title={'выфв ыфвыф выфв ыф вфывфыв фыавы пвы'}
									description={'dsadsad dsa dsa dsd'}
									timezone={'(UTC+3) Россия - Москва (MSK)'}
									date={'06.07.2025'}
									time={'10:00'}
								/>
							</div>
							<LinkText
								title={'Показать больше'}
								size={'text-xl'}
								width={'font-semibold'}
							/>
						</div>
						<div className='bg-white rounded-[20px] col-span-4 h-[782px] p-6'>
							<p className='font-bold text-xl'>Актуальные</p>
							<ActualVoteCard
								title={'Очень длинное название актуального голосования'}
								startdate={'06.07.2025'}
								starttime={'10:00'}
								enddate={'06.07.2025'}
								endtime={'10:00'}
								progress={65}
							/>
						</div>
					</div>
				)}

				<div
					className={`grid ${
						role === 'админ' ? 'grid-cols-3' : 'grid-cols-6 grid-rows-2 mt-2'
					}  gap-2`}
				>
					<div
						className={`bg-white rounded-[20px] flex flex-col ${
							role !== 'админ' && 'col-span-2 row-span-1'
						} justify-between h-70 p-5`}
					>
						<p className='font-bold text-xl'>Регистрация и голосование</p>
						<p className='font-regular text-base text-[#CCCCCC]'>
							Соотношение регистраций и голосов
						</p>
						<div className='grid grid-cols-12 gap-1 h-40 items-end'>
							{heights.map((height, index) => (
								<div
									key={index}
									className='rounded-sm transition-all duration-300'
									style={{
										height: height,
										backgroundColor: colors[index % colors.length],
									}}
								/>
							))}
						</div>
						<div className='flex justify-between'>
							<p className='font-regular text-base text-[#CCCCCC]'>01.04</p>
							<p className='font-regular text-base text-[#CCCCCC]'>01.05</p>
							<p className='font-regular text-base text-[#CCCCCC]'>01.06</p>
							<p className='font-regular text-base text-[#CCCCCC]'>01.07</p>
						</div>
					</div>
					{role !== 'админ' && (
						<div className='bg-white rounded-[20px] col-span-4 row-span-2 p-5'>
							<p className='font-bold text-xl'>Календарь голосований</p>
							<Calendar />
						</div>
					)}
					<div
						className={`bg-white rounded-[20px] flex flex-col ${
							role !== 'админ' && 'col-span-2 row-span-1'
						} justify-between h-70 p-5`}
					>
						<p className='font-bold text-xl'>Количество голосующих</p>
						<p className='font-regular text-base text-[#CCCCCC]'>
							Всего проголосовало
						</p>
						<div className='relative w-fit'>
							<p className='text-[96px] font-bold'>1500</p>
							<p className='bg-[#E6FFDD] text-[#135617] absolute top-3 -right-20 rounded-lg p-1'>
								+16%
							</p>
						</div>
						<p className='font-regular text-base text-[#CCCCCC]'>
							В период с 10.06.2025 по 10.07.2025
						</p>
					</div>

					{role === 'админ' && (
						<div className='bg-white rounded-[20px] flex flex-col justify-between h-70 p-5'>
							<p className='font-bold text-xl'>Регистрация и голосование</p>
							<p className='font-regular text-base text-[#CCCCCC]'>
								Соотношение регистраций и голосов
							</p>
							<div className='flex flex-col gap-1 w-full'>
								<div className='bg-[#FFD17D] w-[65%] h-[62.5px] rounded-sm'></div>
								<div className='bg-[#7DD4FF] w-full h-[62.5px] rounded-sm'></div>
							</div>
							<p className='font-regular text-base text-[#CCCCCC]'>
								В период с 10.06.2025 по 10.07.2025
							</p>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
export default MainPage
