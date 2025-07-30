import { CloudDownload } from 'lucide-react'
import { BlueButton } from '../components/Buttons'
import {
	Dropdown,
	InputDefault,
	InputFixValue,
	InputPassword,
} from '../components/Inputs'
import Calendar from '../components/Calendar'
import { timeZones } from '../data/TimeZone'

const Profile = () => {
	return (
		<div className='mx-60 my-[99px] text-[#212121] '>
			<div className='grid grid-cols-3 gap-2 w-full'>
				<div className='col-span-1 flex flex-col gap-2'>
					<div className='bg-white rounded-[20px] flex flex-col gap-4 w-full p-5 shadow-sm'>
						<p className='font-semibold text-xl'>Персональные данные</p>
						<InputFixValue
							title={'Фамилия'}
							placeholder={'Фамилия'}
							inputValue={'Иванов'}
						/>
						<InputFixValue
							title={'Имя'}
							placeholder={'Имя'}
							inputValue={'Иван'}
						/>
						<InputFixValue
							title={'Отчество'}
							placeholder={'Отчество'}
							inputValue={'Иванович'}
						/>
						<InputFixValue
							title={'Электронная почта'}
							placeholder={'example@email.ru'}
							inputValue={'example@email.ru'}
						/>
						<div className='mt-3'>
							<BlueButton>
								<CloudDownload />
								<p>Сохранить изменения</p>
							</BlueButton>
						</div>
					</div>
					<div className='bg-white rounded-[20px] flex flex-col gap-4 w-full p-5 shadow-sm'>
						<p className='font-semibold text-xl'>Пароль</p>
						<InputPassword
							title={'Пароль'}
							placeholder={'Пароль'}
							inputValue={'Пароль228'}
						/>
						<InputPassword
							title={'Новый пароль'}
							placeholder={'Новый пароль'}
							inputValue={'Пароль1337'}
						/>
						<InputPassword
							title={'Подтвердите новый пароль'}
							placeholder={'Подтвердите новый пароль'}
							inputValue={'Пароль1337'}
						/>

						<div className='mt-3'>
							<BlueButton>
								<CloudDownload />
								<p>Сохранить изменения</p>
							</BlueButton>
						</div>
					</div>
				</div>
				<div className='col-span-2 flex flex-col gap-2'>
					<div className='bg-white rounded-[20px] flex flex-col gap-3 w-full p-5 shadow-sm'>
						<p className='font-semibold text-xl'>Настройки времени</p>
						<div className='flex flex-col'>
							<p className='text-[18px] text-[#ccc] mb-2'>Часовой пояс</p>
							<Dropdown
								placeholder='Выберите часовой пояс'
								options={timeZones}
							/>
						</div>

						<div className='mt-3'>
							<BlueButton>
								<CloudDownload />
								<p>Сохранить изменения</p>
							</BlueButton>
						</div>
					</div>
					<div className='bg-white rounded-[20px] flex flex-col w-full p-5 shadow-sm'>
						<p className='font-semibold text-xl'>Календарь голосований</p>
						<Calendar />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Profile
