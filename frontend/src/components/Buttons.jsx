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

export { ToggleLangBtn, Button, BlueButton, RedButton, AltBlueButton }
