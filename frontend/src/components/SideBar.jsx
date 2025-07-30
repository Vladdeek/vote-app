import { NavLink } from 'react-router-dom'

const SideBarBtn = ({ index, activeIndex, setActiveIndex, children }) => {
	const isActive = activeIndex === index

	return (
		<div
			onClick={() => setActiveIndex(index)}
			className={[
				'border-1 w-full py-2 px-3 border-white rounded-xl text-base font-medium flex gap-5 justify-start items-center transition-all cursor-pointer whitespace-nowrap',
				isActive
					? 'bg-[#D2F0FF] text-[#437DE9]'
					: 'hover:bg-[#D2F0FF] hover:text-[#437DE9]',
			].join(' ')}
		>
			{children}
		</div>
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
