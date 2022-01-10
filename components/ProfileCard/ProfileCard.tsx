import { ReactElement } from 'react'
import Image from 'next/image'
import profilecard from './profilecard.module.css'
import bg_card from '@public/profile_card/bg-pattern-card.svg'
import profile_img from '@public/profile_card/image-victor.jpg'

interface StatsProfile {
	stat: string
	statName: string
}

const data: StatsProfile[] = [
	{
		stat: '80K',
		statName: 'Followers',
	},
	{
		stat: '803K',
		statName: 'Likes',
	},
	{
		stat: '1.4K',
		statName: 'Photos',
	},
]

export default function ProfileCard(): ReactElement {
	return (
		<div className={profilecard.container}>
			<div className={profilecard.bg_card}>
				<Image src={bg_card} alt='background top card' className={profilecard.bg_img} />
			</div>
			<div className={profilecard.pic}>
				<Image src={profile_img} alt='profile picture' className={profilecard.pic_img} />
			</div>
			<div className={profilecard.texts_cont}>
				<div className={profilecard.person}>
					<h2 className={profilecard.person_name}>Victor Crest</h2>
					<p className={profilecard.person_age}>26</p>
				</div>
				<p className={profilecard.person_city}>London</p>
			</div>
			<div className={profilecard.stats}>
				{data.map(d => (
					<StatsPerson key={d.statName} stat={d.stat} statName={d.statName} />
				))}
			</div>
		</div>
	)
}

type Props = {
	stat: string
	statName: string
}

function StatsPerson({ stat, statName }: Props): ReactElement {
	return (
		<div className='stat_cont'>
			<h3 className='stat__title'>{stat}</h3>
			<p className='stat__name'>{statName}</p>
			<style jsx>{`
				.stat_cont {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 5px;
				}
				.stat__title {
					font-family: 'Kumbh Sans', sans-serif;
					font-size: 1.8rem;
					font-weight: 700;
					color: hsl(229, 23%, 23%);
				}
				.stat__name {
					font-family: 'Kumbh Sans', sans-serif;
					font-size: 1.2rem;
					font-weight: 400;
					color: hsl(227, 10%, 46%);
				}
			`}</style>
		</div>
	)
}
