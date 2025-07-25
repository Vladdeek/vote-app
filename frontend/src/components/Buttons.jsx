import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const ToggleLangBtn = () => {
	const [isRusLang, setIsRusLang] = useState(true)
	return (
		<>
			<div className='inline-flex relative'>
				<div className='inline-flex items-center py-2 px-4 gap-6 text-base font-medium text-white uppercase '>
					<p className='z-10 cursor-pointer' onClick={() => setIsRusLang(true)}>
						ru
					</p>
					<p
						className='z-10 cursor-pointer'
						onClick={() => setIsRusLang(false)}
					>
						eng
					</p>
				</div>

				<div
					className={`bg-[#303030] transition-all absolute rounded-lg w-[52px] h-[39px] ${
						!isRusLang && 'translate-x-[49px]'
					}`}
				></div>
			</div>
		</>
	)
}

const Button = ({ title, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3 bg-[#212121] border-white rounded-xl text-lg font-medium text-white'
		>
			{title}
		</button>
	)
}

const TransButton = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3 px-4 flex gap-3 items-center whitespace-nowrap border-[#212121] rounded-lg text-lg font-normal text-[#212121]'
		>
			{children}
		</button>
	)
}

const WhiteButton = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full flex items-center gap-5 px-5 py-3 whitespace-nowrap border-[#f4f4f4] rounded-lg text-lg font-medium text-[#212121]'
		>
			{children}
		</button>
	)
}

const BlueButton = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3 bg-[#437DE9] border-white rounded-xl text-lg font-normal text-white flex gap-5 justify-center items-center'
		>
			{children}
		</button>
	)
}
const AltBlueButton = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3 border-[#437DE9] rounded-xl text-lg font-normal text-[#437DE9] flex gap-5 justify-center items-center'
		>
			{children}
		</button>
	)
}

const GreenButton = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3 px-5 bg-[#5BC25B] border-white rounded-lg text-lg font-normal text-white flex gap-5 justify-center items-center'
		>
			{children}
		</button>
	)
}

const GrayButton = ({ onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className='w-full py-3 px-5 bg-[#F4F4F4] whitespace-nowrap rounded-lg text-lg font-normal text-[#212121] flex gap-5 justify-center items-center'
		>
			{children}
		</button>
	)
}

const RedButton = ({ title, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='border-1 w-full py-3  text-[#EE5B5B] border-[#EE5B5B] rounded-xl text-lg font-medium'
		>
			{title}
		</button>
	)
}

const PrevNextButton = ({ children, onClick }) => {
	return (
		<div className='inline-flex justify-between items-center border-1 border-[#f4f4f4] rounded-lg py-3 px-3'>
			<p className='text-xl font-normal whitespace-nowrap'>
				<span className='font-semibold'>1-10</span> из 100
			</p>
			<div className='flex'>
				<ChevronLeft
					onClick={console.log('кнопка нажата')}
					className='text-[var(--secondary-text)] bg-[var(--bg-sidebar)] hover:bg-[var(--gray)] rounded-lg transition-all '
					size={22}
				/>
				<ChevronRight
					onClick={console.log('кнопка нажата')}
					className='text-[var(--secondary-text)] bg-[var(--bg-sidebar)] hover:bg-[var(--gray)] rounded-lg transition-all '
					size={22}
				/>
			</div>
		</div>
	)
}

export {
	ToggleLangBtn,
	Button,
	BlueButton,
	RedButton,
	GreenButton,
	GrayButton,
	AltBlueButton,
	TransButton,
	WhiteButton,
	PrevNextButton,
}
