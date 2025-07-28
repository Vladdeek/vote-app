import { Layers, SquarePlus } from 'lucide-react'
import { useState } from 'react'
import { SideBar, SideBarBtn } from '../components/SideBar'
import { InputDefault } from '../components/Inputs'

const VotingConstructor = () => {
	return (
		<>
			<div className='flex gap-3 items-center mb-3'>
				<p className='font-semibold text-2xl bg-[#f4f4f4] rounded-lg p-2'>
					ШАГ 1
				</p>
				<p className='font-semibold text-2xl'>Настройки</p>
			</div>
			<div className='grid grid-cols-3 gap-3'>
				<div className='col-span-2'>
					<InputDefault
						title={'Название голосования'}
						required={true}
						placeholder={'Введите название'}
					/>
				</div>
			</div>
		</>
	)
}

const VotingTemplates = () => {
	return (
		<>
			<p className='font-semibold text-2xl mb-3'>Список шаблонов</p>
			<div className='flex flex-col gap-3'>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
				<div className='bg-[#ccc] rounded-[20px] w-full h-[150px]'></div>
			</div>
		</>
	)
}

const Constructor = () => {
	const [isActive, setIsActive] = useState(0)
	return (
		<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
			<p className='mak text-[40px] mb-5 '>Конструктор голосований</p>
			<div className='grid grid-cols-4 gap-2'>
				<div className='col-span-1'>
					<SideBar>
						<SideBarBtn
							index={0}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<SquarePlus />
							<p>Добавить голосование</p>
						</SideBarBtn>
						<SideBarBtn
							index={1}
							activeIndex={isActive}
							setActiveIndex={setIsActive}
						>
							<Layers />
							<p>Шаблоны голосований</p>
						</SideBarBtn>
					</SideBar>
				</div>
				<div className='col-span-3'>
					<div className='bg-white shadow-sm rounded-[20px] p-6'>
						{isActive === 0 ? (
							<>
								<VotingConstructor />
							</>
						) : (
							<>
								<VotingTemplates />
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Constructor
