import React, { ReactElement } from 'react'

type Props = {
	color: string
	title: string
	text: string
	icon: string
}

export default function FeatureCard({ color, title, text, icon }: Props): ReactElement {
	return (
		<div className='feature_card'>
			<div className='feature_card__top' />
			<div className='feature_card__texts_cont'>
				<h1 className='feature_card__title'>{title}</h1>
				<p className='feature_card__text'>{text}</p>
			</div>
			<div className='feature_card__icon' />
			<style jsx>{`
				.feature_card {
					width: 312px;
					height: 224px;
					border-radius: 10px;
					position: relative;
					background-color: #ffffff;
					box-shadow: 0px 10px 20px hsl(240, 6%, 90%);
					overflow-x: hidden;
				}
				.feature_card__top {
					width: inherit;
					height: 4px;
					position: absolute;
					top: 0;
					background-color: ${color};
				}
				.feature_card__icon {
					width: 60px;
					height: 60px;
					position: absolute;
					bottom: 28px;
					right: 28px;
					background-image: url(${icon});
					background-position: center;
					background-size: contain;
					background-repeat: no-repeat;
				}
				.feature_card__texts_cont {
					display: flex;
					width: 100%;
					height: 100%;
					padding: 26px 28px 28px 28px;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					gap: 3px;
				}
				.feature_card__title {
					font-family: 'Poppins', sans-serif;
					font-size: 2rem;
					font-weight: 600;
					color: hsl(234, 12%, 34%);
				}
				.feature_card__text {
					font-family: 'Poppins', sans-serif;
					font-size: 1.3rem;
					font-weight: 400;
					line-height: calc(1.4rem * 1.6);
					color: hsl(229, 6%, 66%);
				}
				@media screen and (min-width: 1130px) {
					.feature_card {
						width: 350px;
						height: 250px;
					}
					.feature_card__icon {
						width: 60px;
						height: 60px;
						bottom: 32px;
						right: 32px;
					}
					.feature_card__texts_cont {
						padding: 32px 32px 32px 32px;
						gap: 10px;
					}
				}
			`}</style>
		</div>
	)
}
