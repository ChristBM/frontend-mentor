import { ReactElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ProfileCard from '@components/ProfileCard/ProfileCard'
import bg_top from '@public/profile_card/bg-pattern-top.svg'
import bg_bottom from '@public/profile_card/bg-pattern-bottom.svg'

export default function Profile_card(): ReactElement {
	return (
		<div className='profile_card'>
			<Head>
				<title>Profile Card Component</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className='profile_card__bg-top'>
				<Image src={bg_top} alt='background top' className='img_bg' />
			</div>
			<div className='profile_card__cont'>
				<ProfileCard />
			</div>
			<div className='profile_card__bg-bottom'>
				<Image src={bg_bottom} alt='background bottom' className='img_bg' />
			</div>
			<style jsx>{`
				.profile_card {
					width: 100%;
					min-height: 100vh;
					position: relative;
					background-color: hsl(185, 75%, 39%);
					overflow: hidden;
				}
				.profile_card__bg-top {
					position: absolute;
					top: -700px;
					left: -700px;
					overflow: hidden;
				}
				.profile_card__bg-bottom {
					position: absolute;
					bottom: -700px;
					right: -700px;
					overflow: hidden;
				}
				.profile_card__cont {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 5;
				}
				@media screen and (min-width: 1000px) {
					.profile_card__bg-top {
						top: -600px;
						left: -600px;
						transform: translate(300px, 10px);
					}
					.profile_card__bg-bottom {
						bottom: -600px;
						right: -600px;
						transform: translate(-300px, -10px);
					}
				}
			`}</style>
		</div>
	)
}
