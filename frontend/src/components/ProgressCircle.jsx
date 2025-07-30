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
				<div
					className={`w-100 h-100 absolute drop-shadow-xl ${
						progress <= 25
							? ' drop-shadow-[#EE5B5B50] stroke-[#EE5B5B]'
							: progress <= 50
							? 'drop-shadow-[#FFa05a50] stroke-[#FFa05a]'
							: progress <= 75
							? 'drop-shadow-[#FFD17D50] stroke-[#FFD17D]'
							: 'drop-shadow-[#5BC25B50] stroke-[#5BC25B]'
					} transition-all duration-500`}
				>
					<svg className='' viewBox='0 0 100 100' transform='scale(-1, 1)'>
						<circle
							cx='50'
							cy='50'
							r={radius}
							fill='none'
							strokeWidth='10'
							strokeDasharray={circumference}
							strokeDashoffset={strokeDashoffset}
							transform='rotate(-90 50 50)'
						/>
					</svg>
				</div>

				<div className='flex flex-col items-center absolute'>
					<p className='font-black text-[48px]'>
						{Math.round(normalizedProgress)}%
					</p>
					<p className='font-regular text-lg text-[#ccc]'>Времени осталось</p>
				</div>
			</div>
		</div>
	)
}

export default ProgressCircle
