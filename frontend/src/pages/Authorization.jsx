import { useState } from 'react'
import { Button, ToggleLangBtn } from '../components/Buttons'
import { Dropdown, InputDefault } from '../components/Inputs'
import { CheckBox, LinkText } from '../components/Components'

const Authorization = () => {
	const [isRegistration, setIsRegistration] = useState(true)
	const role = ['Секретарь', 'Организатор', 'Пользователь']

	return (
		<>
			<div className='w-screen h-screen flex flex-col justify-center items-center'>
				<p className='mak text-[40px] mb-8'>
					{isRegistration ? 'Регистрация' : 'Авторизация'}
				</p>
				<div
					className={`bg-white h-127 w-204 rounded-[20px] flex overflow-hidden transition-all`}
				>
					<div
						className={`bg-[#212121] w-[285px] h-full rounded-[20px] flex flex-col justify-between p-5 ${
							isRegistration ? 'order-1 items-start ' : 'order-2 items-end '
						} transition-all`}
					>
						<ToggleLangBtn />
						<div className='flex flex-col gap-5'>
							<p className='text-lg/5 font-medium tracking-wide text-white'>
								Панель управления системой электронных голосований
							</p>
							<Button
								title={!isRegistration ? 'Регистрация' : 'Авторизация'}
								onClick={() => setIsRegistration(prev => !prev)}
							/>
						</div>
					</div>
					{!isRegistration ? (
						<>
							<div className='w-[531px] p-5 order-1 flex flex-col justify-center gap-3'>
								<Dropdown
									placeholder='Выберите роль'
									options={role}
									title={'Войти как'}
									required={true}
								/>
								<InputDefault
									type={'email'}
									placeholder={'example@email.ru'}
									title={'Почта'}
									required={true}
									InputStatus={false}
									validate={value => /^.+\@.+\..+$/.test(value)}
								/>
								<InputDefault
									type={'password'}
									placeholder={'Пароль'}
									title={'Пароль'}
									required={true}
									InputStatus={false}
									validate={value => /^(?=.*[A-Z])(?=.*\d).+$/.test(value)}
								/>
								<LinkText title={'Забыли пароль?'} />
								<CheckBox title={'Запомнить меня'} />
								<Button
									title={'Войти'}
									onClick={console.log('кнопка нажата')}
								/>
							</div>
						</>
					) : (
						<>
							<div className='grid grid-cols-3 order-2 gap-3 w-[531px] p-5'>
								<div className='col-span-1'>
									<InputDefault
										type={'text'}
										placeholder={'Фамилия'}
										title={'Фамилия'}
										required={true}
										InputStatus={false}
									/>
								</div>
								<div className='col-span-1'>
									<InputDefault
										type={'text'}
										placeholder={'Имя'}
										title={'Имя'}
										required={true}
										InputStatus={false}
									/>
								</div>
								<div className='col-span-1'>
									<InputDefault
										type={'text'}
										placeholder={'Отчество'}
										title={'Отчество'}
										required={true}
										InputStatus={false}
									/>
								</div>
								<div className='col-span-3'>
									<InputDefault
										type={'email'}
										placeholder={'example@email.ru'}
										title={'Почта'}
										required={true}
										InputStatus={false}
										validate={value => /^.+\@.+\..+$/.test(value)}
									/>
								</div>
								<div className='col-span-3'>
									<InputDefault
										type={'password'}
										placeholder={'Пароль'}
										title={'Придумайте пароль'}
										required={true}
										InputStatus={false}
										validate={value => /^(?=.*[A-Z])(?=.*\d).+$/.test(value)}
									/>
								</div>
								<div className='col-span-3'>
									<InputDefault
										type={'password'}
										placeholder={'Повторите пароль'}
										title={'Повторите пароль'}
										required={true}
										InputStatus={false}
										validate={value => /^(?=.*[A-Z])(?=.*\d).+$/.test(value)}
									/>
								</div>
								<div className='col-span-3'>
									<Button
										title={'Регистрация'}
										onClick={console.log('кнопка нажата')}
									/>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	)
}
export default Authorization
