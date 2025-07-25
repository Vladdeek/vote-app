import { CloudDownload } from 'lucide-react'
import { BlueButton } from '../components/Buttons'
import {
	Dropdown,
	InputDefault,
	InputFixValue,
	InputPassword,
} from '../components/Inputs'
import Calendar from '../components/Calendar'

const Profile = () => {
	const timeZones = [
		'(UTC-12) Международная линия перемены дат',
		'(UTC-11) Самоа, Мидуэй',
		'(UTC-10) Гавайи',
		'(UTC-9) Аляска',
		'(UTC-8) США - Лос-Анджелес (PST)',
		'(UTC-7) США - Денвер (MST)',
		'(UTC-6) США - Чикаго (CST), Мексика',
		'(UTC-5) США - Нью-Йорк (EST), Богота',
		'(UTC-4) Канада - Галифакс, Каракас',
		'(UTC-3) Аргентина - Буэнос-Айрес, Бразилия - Бразилиа',
		'(UTC-2) Бразилия - Рио-де-Жанейро (летнее время)',
		'(UTC-1) Азорские острова, Кабо-Верде',
		'(UTC±0) Великобритания - Лондон (GMT), Исландия',
		'(UTC+1) Германия - Берлин (CET), Франция - Париж',
		'(UTC+2) Греция - Афины, Украина - Киев (EET)',
		'(UTC+3) Россия - Москва (MSK), Турция - Стамбул',
		'(UTC+4) Россия - Самара, ОАЭ - Дубай',
		'(UTC+5) Россия - Екатеринбург, Пакистан - Исламабад',
		'(UTC+6) Россия - Омск, Бангладеш - Дакка',
		'(UTC+7) Россия - Красноярск, Таиланд - Бангкок',
		'(UTC+8) Китай - Пекин, Россия - Иркутск',
		'(UTC+9) Япония - Токио, Россия - Якутск',
		'(UTC+10) Россия - Владивосток, Австралия - Сидней (AEST)',
		'(UTC+11) Россия - Магадан, Соломоновы острова',
		'(UTC+12) Россия - Камчатка, Новая Зеландия - Веллингтон',
		'(UTC+13) Самоа (летнее время), Тонга',
		'(UTC+14) Острова Лайн (Кирибати)',
	]
	return (
		<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
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
