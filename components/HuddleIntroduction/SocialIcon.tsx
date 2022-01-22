import { ReactElement, SyntheticEvent } from 'react'

type Props = {
	children: any
	onHover: (ev: SyntheticEvent) => void
	onOut: (ev: SyntheticEvent) => void
	iref: any
}

export default function SocialIcon({
	children,
	onHover,
	onOut,
	iref,
}: Props): ReactElement {
	return (
		<div
			className='social_icon_cont'
			onMouseEnter={onHover}
			onMouseOut={onOut}
			ref={iref}
		>
			{children}
			<style jsx>{`
				.social_icon_cont {
					display: flex;
					width: 28px;
					height: 28px;
					border: 1px solid #fff;
					border-radius: 50%;
					position: relative;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
				.social_icon_cont::after {
					content: '';
					display: flex;
					width: 56px;
					height: 56px;
					border-radius: 50%;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
				.social_icon_cont:hover {
					border-color: hsl(300, 69%, 71%);
				}
				@media screen and (min-width: 1300px) {
					.social_icon_cont {
					display: flex;
					width: 40px;
					height: 40px;
					border: 1px solid #fff;
					border-radius: 50%;
					position: relative;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}
				}
			`}</style>
		</div>
	)
}
