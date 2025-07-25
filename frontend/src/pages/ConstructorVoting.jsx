import { Layers, SquarePlus } from 'lucide-react'
import { useState } from 'react'
import { SideBar, SideBarBtn } from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const ConstrucorVoting = () => {
	const [isActive, setIsActive] = useState(0)
	return (
		<div className='mx-60 my-[99px] text-[#212121] tracking-wide'>
			<p className='mak text-[40px] mb-5 '>Конструктор голосований</p>
			<div className='grid grid-cols-4 gap-2'>
				<div className='col-span-1'>
					<SideBar>
						<SideBarBtn to={'voting'}>
							<SquarePlus />
							<p>Добавить голосование</p>
						</SideBarBtn>
						<SideBarBtn to={'templates'}>
							<Layers />
							<p>Шаблоны голосований</p>
						</SideBarBtn>
					</SideBar>
				</div>
				<div className='col-span-3'>
					<div className='bg-white shadow-sm rounded-[20px] p-6'></div>
				</div>
			</div>
		</div>
	)
}
export default ConstrucorVoting
