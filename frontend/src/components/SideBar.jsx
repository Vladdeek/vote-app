import { NavLink } from 'react-router-dom'

const SideBarBtn = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					'border-1 w-full py-2 px-3 border-white rounded-xl text-lg font-normal flex gap-5 justify-start items-center transition-all',
					isActive
						? 'bg-[#D2F0FF] text-[#437DE9]'
						: 'hover:bg-[#D2F0FF] hover:text-[#437DE9]',
				].join(' ')
			}
		>
			{children}
		</NavLink>
	)
}

const SideBar = ({ children }) => {
	return (
		<div className='bg-white shadow-sm rounded-[20px] p-6 flex flex-col gap-1'>
			{children}
		</div>
	)
}

export { SideBar, SideBarBtn }
