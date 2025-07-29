const ProgressCircle = ({ progress }) => {
	// Нормализуем прогресс (0-100)
	const normalizedProgress = Math.min(100, Math.max(0, progress))
	// Рассчитываем параметры для SVG circle
	const radius = 45
	const circumference = 2 * Math.PI * radius
	const strokeDashoffset = circumference * (1 - normalizedProgress / 100)

	return (
		<div className='w-full h-full flex justify-center items-center'>
			<div className='w-100 h-100 auto border-dashed border-40 rounded-full border-[#f4f4f4] relative flex justify-center items-center'>
				<svg
					className='w-100 h-100 absolute drop-shadow-xl drop-shadow-[#EE5B5B50]'
					viewBox='0 0 100 100'
				>
					<circle
						cx='50'
						cy='50'
						r={radius}
						fill='none'
						stroke='#EE5B5B'
						strokeWidth='10'
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						transform='rotate(-90 50 50)'
					/>
				</svg>

				<div className='flex flex-col items-center absolute'>
					<p className='font-black text-[48px]'>
						{Math.round(normalizedProgress)}%
					</p>
					<p className='font-normal text-lg text-[#ccc]'>Времени прошло</p>
				</div>
			</div>
		</div>
	)
}

export default ProgressCircle
