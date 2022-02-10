import { ReactElement, SyntheticEvent, useState, useRef } from 'react'

type Props = {
	bg: string
	category: string[]
	last_week: string
	icon: string
	classe: string
}

export default function TrackingCard({
	bg,
	category,
	last_week,
	icon,
	classe,
}: Props): ReactElement {
	const [ state, setState ] = useState({
		bg: false,
		svg: false,
	})
	let iconRef = useRef<HTMLDivElement>(null)

	const handleOver = (ev: SyntheticEvent) => {
		if (ev.target === iconRef.current) {
			setState({
				bg: false,
				svg: true,
			})
		} else {
			setState({
				bg: true,
				svg: false,
			})
		}
	}

	return (
		<div className='tracking_card'>
			<div className={`tracking_icon ${classe}`} />
			<div
				className='tracking_card__info'
				onMouseOver={handleOver}
				onMouseOut={() =>
					setState({
						bg: false,
						svg: false,
					})}
			>
				<div className='tc_info_top'>
					<p className='tc__cat_title'>{category[0]}</p>
					<div className='svg_icon' ref={iconRef}>
						<svg width='21' height='5' xmlns='http://www.w3.org/2000/svg' className='svg'>
							<path
								d='M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z'
								fillRule='evenodd'
							/>
						</svg>
					</div>
				</div>

				<div className='tc_info_bottom'>
					<p className='tc__cat_hours'>{category[1]}</p>
					<p className='tc__cat_lastweek'>Last Week - {last_week}</p>
				</div>
			</div>

			<style jsx>{`
				.tracking_card {
					display: flex;
					width: 328px;
					height: 160px;
					border-radius: 16px;
					position: relative;
					align-items: flex-end;
					background-color: ${bg};
					overflow: hidden;
				}
				.tracking_icon {
					position: absolute;
					z-index: 1;
					background-image: url(${icon});
					background-size: contain;
					background-repeat: no-repeat;
				}
				.fix_work {
					width: 78px;
					height: 78px;
					top: -11px;
					right: 18px;
				}
				.fix_play {
					width: 78px;
					height: 78px;
					top: -5px;
					right: 20px;
				}
				.fix_study {
					width: 78px;
					height: 78px;
					top: -6px;
					right: 18px;
				}
				.fix_exercise {
					width: 80px;
					height: 80px;
					top: -1px;
					right: 18px;
				}
				.fix_social {
					width: 100px;
					height: 100px;
					top: -15px;
					right: -11px;
				}
				.fix_self_care {
					width: 68px;
					height: 68px;
					top: -12px;
					right: 14px;
				}
				.tracking_card__info {
					display: flex;
					width: 100%;
					height: 122px;
					padding: 30px 24px;
					border-radius: 15px;
					z-index: 2;
					flex-direction: column;
					justify-content: space-between;
					gap: 8px;
					background-color: ${state.bg ? 'hsl(235, 45%, 61%)' : 'hsl(235, 46%, 20%)'};
					cursor: ${state.bg ? 'pointer' : 'normal'};
				}

				.tc_info_top {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 8px;
				}
				.svg_icon {
					display: flex;
					width: 30px;
					height: 20px;
					align-items: center;
					justify-content: center;
					position: relative;
					cursor: pointer;
				}
				.svg_icon::after {
					content: '';
					width: 30px;
					height: 20px;
					position: absolute;
					top: 0px;
					left: 0px;
					cursor: pointer;
				}
				.svg {
					fill: ${state.svg ? '#fff' : '#bbc0ff'};
				}

				.tc__cat_title {
					font-family: 'Rubik', sans-serif;
					font-size: 1.8rem;
					font-weight: 500;
					color: #fff;
				}

				.tc_info_bottom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 22px;
				}
				.tc__cat_hours {
					font-family: 'Rubik', sans-serif;
					font-size: 3.2rem;
					font-weight: 300;
					color: #fff;
				}
				.tc__cat_lastweek {
					padding-block-end: 5px;
					font-family: 'Rubik', sans-serif;
					font-size: 1.5rem;
					font-weight: 400;
					color: hsl(236, 100%, 87%);
				}

				@media screen and (min-width: 1120px) {
					.tracking_card {
						width: 256px;
						height: 244px;
					}
					.tracking_card__info {
						width: 100%;
						height: 200px;
						padding: 30px 30px;
						justify-content: center;
						gap: 25px;
					}
					.tc_info_bottom {
						flex-direction: column;
						align-items: flex-start;
						gap: 10px;
					}
					.tc__cat_hours {
						font-family: 'Rubik', sans-serif;
						font-size: 5.6rem;
						font-weight: 300;
						color: #fff;
					}
				}
			`}</style>
		</div>
	)
}
