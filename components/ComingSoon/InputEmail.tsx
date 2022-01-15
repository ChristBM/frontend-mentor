import React, { ReactElement, useState, useRef } from 'react'

export default function InputEmail(): ReactElement {
	const [ error, setError ] = useState(false)
	let inputRef = useRef()

	const suscribeEmail = () => {
		let myinput: any = inputRef.current
		let regex = /^[\w\._]{5,20}\+?[\w]{0,10}@[\w\.\-]{3,}\.\w{2,5}$/
		regex.test(myinput.value) ? setError(false) : setError(true)
	}

	return (
		<div className='input_email'>
			<input
				type='text'
				ref={inputRef}
				placeholder='Email Address'
				className='input_email__input'
			/>
			{error ? <div className='input_email__icon-error' /> : null}
			<button type='button' onClick={suscribeEmail} className='input_email__btn'>
				<span className='input_email__btn_icon' />
			</button>
			{error ? (
				<p className='input_email__text-error'>Please provide a valid email</p>
			) : null}
			<style jsx>{`
				.input_email {
					display: flex;
					width: 310px;
					height: 48px;
					padding-inline-start: 24px;
					border: 1px solid hsl(0, 36%, 70%);
					border-radius: 30px;
					align-items: center;
					position: relative;
				}
				.input_email__input {
					width: 180px;
					border-style: none;
					outline: none;
					background: transparent;
					font-family: 'Josefin Sans', sans-serif;
					font-size: 1.4rem;
					font-weight: 400;
					color: hsl(0, 6%, 24%);
				}
				.input_email__input::placeholder {
					text-align: left;
					font-family: 'Josefin Sans', sans-serif;
					font-size: 1.4rem;
					font-weight: 400;
					line-height: calc(1.4rem * 1.6);
					color: hsl(0, 36%, 85%);
				}
				.input_email__btn {
					display: flex;
					width: 64px;
					height: 48px;
					border-style: none;
					border-radius: 30px;
					position: absolute;
					right: -1px;
					justify-content: center;
					align-items: center;
					background-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
					box-shadow: 0px 10px 20px hsl(0, 80%, 86%);
					cursor: pointer;
					transform: translateX(0px);
					transition: transform 400ms ease-out;
				}
				.input_email__btn:hover {
					transform: translateX(10px);
					transition: transform 400ms ease-out;
					background-image: linear-gradient(135deg, hsl(0, 80%, 90%), hsl(0, 74%, 80%));
				}
				.input_email__btn_icon {
					display: block;
					width: 20px;
					height: 20px;
					background-image: url('/coming-soon/icon-arrow.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
				}
				.input_email__icon-error {
					display: block;
					width: 20px;
					height: 20px;
					position: absolute;
					right: 75px;
					background-image: url('/coming-soon/icon-error.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
				}
				.input_email__text-error {
					display: block;
					position: absolute;
					bottom: -22px;
					left: 24px;
					font-family: 'Josefin Sans', sans-serif;
					font-size: 1.4rem;
					font-weight: 400;
					color: hsl(0, 93%, 68%);
				}
				@media screen and (min-width: 1300px) {
					.input_email {
						width: 445px;
						height: 55px;
						padding-inline-start: 30px;
					}
					.input_email__btn {
						width: 100px;
						height: 55px;
					}
					.input_email__icon-error {
						right: 110px;
					}
					.input_email__input {
						width: 220px;
						height: 18px;
						font-size: 1.6rem;
						font-weight: 400;
						color: hsl(0, 6%, 24%);
					}
					.input_email__input::placeholder {
						font-size: 1.6rem;
						line-height: calc(1.6rem * 1.6);
					}
				}
			`}</style>
		</div>
	)
}
