import { ReactElement, useState } from 'react'
import Image from 'next/image'
import TrackingCard from './TrackingCard'
import img_jeremy from '@public/time_tracking/image-jeremy.png'

interface DataCardInterface {
	bg: string
	category: string[]
	last_week: string
	icon: string
	classe: string
}

const dataCard: DataCardInterface[] = [
	{
		bg: 'hsl(15, 100%, 70%)',
		category: [ 'Work', '32hrs' ],
		last_week: '36hrs',
		icon: '/time_tracking/icon-work.svg',
		classe: 'fix_work',
	},
	{
		bg: 'hsl(195, 74%, 62%)',
		category: [ 'Play', '10hrs' ],
		last_week: '8hrs',
		icon: '/time_tracking/icon-play.svg',
		classe: 'fix_play',
	},
	{
		bg: 'hsl(348, 100%, 68%)',
		category: [ 'Study', '4hrs' ],
		last_week: '7hrs',
		icon: '/time_tracking/icon-study.svg',
		classe: 'fix_study',
	},
	{
		bg: 'hsl(145, 58%, 55%)',
		category: [ 'Exercise', '4hrs' ],
		last_week: '5hrs',
		icon: '/time_tracking/icon-exercise.svg',
		classe: 'fix_exercise',
	},
	{
		bg: 'hsl(264, 64%, 52%)',
		category: [ 'Social', '5hrs' ],
		last_week: '10hrs',
		icon: '/time_tracking/icon-social.svg',
		classe: 'fix_social',
	},
	{
		bg: 'hsl(43, 84%, 65%)',
		category: [ 'Self Care', '2hrs' ],
		last_week: '2hrs',
		icon: '/time_tracking/icon-self-care.svg',
		classe: 'fix_self_care',
	},
]

export default function TimeTracking(): ReactElement {
	const [ state, setState ] = useState({
		daily: false,
		weekly: true,
		monthly: false,
	})
	const handleClick = (p: string): void => {
		switch (p) {
			case 'daily':
				setState({
					daily: true,
					weekly: false,
					monthly: false,
				})
				break
			case 'monthly':
				setState({
					daily: false,
					weekly: false,
					monthly: true,
				})
				break
			default:
				setState({
					daily: false,
					weekly: true,
					monthly: false,
				})
				break
		}
	}

	return (
		<div className='time_tracking'>
			<div className='tt_user_card'>
				<div className='tt_user_info'>
					<div className='tt_user_img'>
						<Image src={img_jeremy} placeholder='blur' loading='lazy' alt='user image' />
					</div>

					<div className='tt_user_intro'>
						<p className='tt_user_intro_title'>Report for</p>
						<p className='tt_user_intro_name'>Jeremy Robson</p>
					</div>
				</div>

				<div className='tt_user_date'>
					<p
						className={state.daily ? 'p_white' : 'p_blue'}
						onClick={() => handleClick('daily')}
					>
						Daily
					</p>
					<p
						className={`user_weekly ${state.weekly ? 'p_white' : 'p_blue'}`}
						onClick={() => handleClick('weekly')}
					>
						Weekly
					</p>
					<p
						className={state.monthly ? 'p_white' : 'p_blue'}
						onClick={() => handleClick('monthly')}
					>
						Monthly
					</p>
				</div>
			</div>

			<div className='time_tracking__cards'>
				{dataCard.map(track => (
					<TrackingCard
						key={track.category[0]}
						bg={track.bg}
						category={track.category}
						last_week={track.last_week}
						icon={track.icon}
						classe={track.classe}
					/>
				))}
			</div>

			<style jsx>{`
				.time_tracking {
					display: grid;
					gap: 24px;
					user-select: none;
				}
				.tt_user_card {
					display: flex;
					width: 328px;
					height: 204px;
					border-radius: 15px;
					flex-direction: column;
					align-items: center;
					gap: 25px;
					background-color: hsl(235, 46%, 20%);
				}
				.tt_user_info {
					display: flex;
					width: 100%;
					height: 134px;
					padding: 0 40px 0 30px;
					border-radius: 15px;
					justify-content: space-between;
					align-items: center;
					background-color: hsl(246, 80%, 60%);
				}
				.tt_user_img {
					width: 70px;
					height: 70px;
					border: 3px solid #fff;
					border-radius: 50%;
				}
				.tt_user_intro {
					display: flex;
					flex-direction: column;
					gap: 5px;
				}
				.tt_user_intro_title {
					font-family: 'Rubik', sans-serif;
					font-size: 1.5rem;
					font-weight: 400;
					color: hsl(236, 100%, 87%);
				}
				.tt_user_intro_name {
					font-family: 'Rubik', sans-serif;
					font-size: 2.4rem;
					font-weight: 300;
					color: #fff;
				}
				.tt_user_date {
					display: flex;
					width: 100%;
					padding-inline-start: 35px;
					padding-inline-end: 20px;
					padding-block-end: 25px;
					align-items: center;
					font-family: 'Rubik', sans-serif;
					font-size: 1.8rem;
					font-weight: 400;
					color: hsl(235, 45%, 61%);
				}
				.user_weekly {
					padding: 0 45px 0 60px;
				}
				.tt_user_date p:hover {
					cursor: pointer;
					color: #fff;
				}
				.p_white {
					color: #fff;
				}
				.p_blue {
					color: hsl(235, 45%, 61%);
				}
				.time_tracking__cards {
					display: flex;
					width: 100%;
					flex-direction: column;
					gap: 24px;
				}

				@media screen and (min-width: 1120px) {
					.time_tracking {
						gap: 30px;
						grid-template-columns: auto 1fr;
					}
					.tt_user_card {
						width: 256px;
						height: 520px;
						flex-direction: column;
						align-items: center;
						gap: 6px;
					}

					.tt_user_info {
						height: 354px;
						padding: 34px 40px 0 30px;
						border-radius: 15px;
						flex-direction: column;
						justify-content: flex-start;
						align-items: flex-start;
						gap: 40px;
					}

					.tt_user_img {
						width: 84px;
						height: 84px;
						border: 3px solid #fff;
						border-radius: 50%;
					}
					.tt_user_intro_name {
						font-size: 4rem;
					}

					.tt_user_date {
						height: 160px;
						padding-inline-start: 35px;
						padding-inline-end: 0;
						padding-block: 0;
						flex-direction: column;
						justify-content: space-evenly;
						align-items: flex-start;
					}
					.user_weekly {
						padding: 0;
					}

					.time_tracking__cards {
						display: grid;
						width: 100%;
						grid-template-columns: repeat(3, 1fr);
						grid-template-rows: repeat(2, 1fr);
						gap: 30px;
					}
				}
			`}</style>
		</div>
	)
}
