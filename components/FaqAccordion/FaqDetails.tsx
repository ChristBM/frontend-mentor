import React, { ReactElement, useRef, useState } from 'react'

type Props = {
	summary: string
	text: string
}

export default function FaqDetails({ summary, text }: Props): ReactElement {
	const [ state, setState ] = useState({
		icon: '',
		summary: '',
	})

	let iconRef = useRef(null)
	let summaryRef = useRef(null)

	const rotateIcon = (): void => {
		let icon: any = iconRef.current
		if (!icon.className.includes('rotate')) {
			setState({
				icon: 'rotate',
				summary: 'summary-open',
			})
		} else {
			setState({
				icon: '',
				summary: '',
			})
		}
	}

	return (
		<details className='details'>
			<summary
				className={`details__summary ${state.summary}`}
				onClick={rotateIcon}
				ref={summaryRef}
			>
				{summary}
				<div className={`details__summary_icon ${state.icon}`} ref={iconRef} />
			</summary>
			<p className='details__text'>{text}</p>
			<style jsx>{`
				.details {
					width: 280px;
					height: auto;
				}
				.details__summary {
					padding-block-end: 15px;
					position: relative;
					list-style: none;
					font-family: 'Kumbh Sans', sans-serif;
					font-size: 14px;
					font-weight: 700;
					color: hsl(240, 6%, 50%);
				}
				.summary-open {
					color: hsl(238, 29%, 16%);
				}
				.details__summary:hover {
					cursor: pointer;
					color: hsl(14, 88%, 65%);
				}
				.details__summary_icon {
					display: inline;
					width: 10px;
					height: 10px;
					position: absolute;
					top: 5px;
					right: 0;
					background-image: url('/faq_accordion/icon-arrow-down.svg');
					background-repeat: no-repeat;
					background-position: center;
					background-size: contain;
					transform: rotate(0deg);
					transition: transform 200ms ease-out;
				}
				.rotate {
					transform: rotate(180deg);
					transition: transform 200ms ease-out;
				}
				.details__text {
					padding-block-end: 15px;
					font-family: 'Kumbh Sans', sans-serif;
					font-size: 12px;
					font-weight: 400;
					color: hsl(240, 6%, 50%);
				}
				@media screen and (min-width: 925px) {
					.details {
						width: 354px;
					}
				}
			`}</style>
		</details>
	)
}
