import { ReactElement } from 'react'
import Image from 'next/image'
import singlecard from './singlecard.module.css'
import sedans from '@public/three_columns/icon-sedans.svg'
import suvs from '@public/three_columns/icon-suvs.svg'
import luxury from '@public/three_columns/icon-luxury.svg'

interface DataCard {
	icon: any
	title: string
	text: string
	color: string
}

const data: DataCard[] = [
	{
		icon: sedans,
		title: 'SEDANS',
		text:
			'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		color: '#e38826',
	},
	{
		icon: suvs,
		title: 'SUVS',
		text:
			'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		color: '#006970',
	},
	{
		icon: luxury,
		title: 'LUXURY',
		text:
			'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		color: '#004241',
	},
]

export default function ThreeColumns(): ReactElement {
	return (
		<div className='container'>
			{data.map(d => (
				<SingleCard icon={d.icon} title={d.title} text={d.text} color={d.color} key={d.title} />
			))}
			<style jsx>{`
				.container {
					display: flex;
					width: 330px;
					height: auto;
					position: relative;
					border-radius: 10px;
					flex-direction: column;
					align-items: center;
					border-radius: 10px;
					outline: solid 10px hsl(0, 0%, 95%);
				}

				@media screen and (min-width: 930px) {
					.container {
						width: 930px;
						flex-direction: row;
					}
				}
			`}</style>
		</div>
	)
}

type Props = {
	icon: any
	title: string
	text: string
	color: string
}

function SingleCard({ icon, title, text, color }: Props): ReactElement {
	return (
		<div className='single_card'>
			<div>
				<Image src={icon} alt={`${title} icon`}/>
			</div>
			<div>
				<h1 className={singlecard.title}>{title}</h1>
			</div>
			<div>
				<p className={singlecard.text}>{text}</p>
			</div>
			<div>
				<button className={`${singlecard.btn} txt_color_btn`}>Learn More</button>
			</div>
			<style jsx>{`
				.single_card {
					display: flex;
					width: 330px;
					height: 445px;
					padding: 50px;
					flex-direction: column;
					justify-content: space-between;
					background-color: ${color};
				}

				.txt_color_btn {
					color: ${color};
				}

				.txt_color_btn:hover {
					border: solid 2px hsl(0, 0%, 95%);
					color: hsl(0, 0%, 95%);
					background-color: transparent;
				}

				@media screen and (min-width: 930px) {
					.single_card {
						width: 310px;
						height: 500px;
					}
				}
			`}</style>
		</div>
	)
}
