import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react'
import Chart from 'react-apexcharts'

export const Chart1 = ({ series, colors }) => {
	const chartConfig = {
		type: 'line',
		height: 550,
		series: series,
		options: {
			chart: {
				toolbar: {
					show: false,
				},
			},
			title: {
				show: '',
			},
			dataLabels: {
				enabled: false,
			},
			colors: colors,
			stroke: {
				lineCap: 'butt',
				curve: 'straight',
				width: 2,
			},
			markers: {
				size: 6,
			},
			xaxis: {
				axisTicks: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				labels: {
					style: {
						colors: '#000',
						fontSize: '16px',
						fontFamily: 'inherit',
						fontWeight: 400,
					},
				},
				categories: [
					'8:00',
					'9:00',
					'10:00',
					'11:00',
					'12:00',
					'13:00',
					'14:00',
					'15:00',
					'16:00',
					'17:00',
					'18:00',
				],
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 10,
				labels: {
					style: {
						colors: '#000',
						fontSize: '16px',
						fontFamily: 'inherit',
						fontWeight: 400,
					},
					formatter: function (val) {
						return val.toFixed(0)
					},
				},
			},
			grid: {
				show: true,
				borderColor: '#EEEEEE',
				strokeDashArray: 0,
				xaxis: {
					lines: {
						show: true,
					},
				},
				padding: {
					top: 0,
					right: 20,
				},
			},
			fill: {
				opacity: 0.8,
			},

			legend: {
				position: 'top',
				horizontalAlign: 'left',
				markers: {
					radius: 10,
					width: 30,
					height: 6,
				},
				itemMargin: {
					horizontal: 10,
				},
				fontSize: '16px',
				fontFamily: 'inherit',
				fontWeight: 400,
			},
		},
	}
	return (
		<Card>
			<CardHeader
				floated={false}
				shadow={false}
				color='transparent'
				className='flex flex-col gap-4 rounded-none md:flex-row md:items-center'
			></CardHeader>
			<CardBody className='px-2 pb-0'>
				<Chart {...chartConfig} />
			</CardBody>
		</Card>
	)
}

export const Chart2 = ({ chartData, title, deadlines }) => {
	const chartConfig = {
		type: 'line',
		height: 100,
		series: [
			{
				name: 'Series',
				data: chartData,
			},
		],
		options: {
			chart: {
				toolbar: {
					show: false,
				},
			},
			tooltip: {
				enabled: false,
			},
			title: {
				show: '',
			},
			dataLabels: {
				enabled: false,
			},
			colors: ['#000'],
			stroke: {
				lineCap: 'butt',
				curve: 'straight',
				width: 1,
			},
			markers: {
				size: 3,
			},
			xaxis: {
				axisTicks: {
					show: false,
				},
				axisBorder: {
					show: true,
				},
				labels: {
					show: false,
				},
				categories: chartData.map((_, index) => index + 1),
			},
			yaxis: {
				show: false,
				min: 0,
				max: 10,
			},
			grid: {
				show: false,
			},
			fill: {
				opacity: 0.8,
			},
			legend: {
				show: false,
			},
		},
	}

	return (
		<Card className='h-full flex flex-col justify-between p-3 bg-transparent'>
			<p className='text-base font-normal text-[#212121]'>{title}</p>
			<CardBody className='p-0'>
				<Chart className='-my-5' {...chartConfig} />
			</CardBody>
			<p className='text-base font-normal text-[#ccc]'>{deadlines}</p>
		</Card>
	)
}
