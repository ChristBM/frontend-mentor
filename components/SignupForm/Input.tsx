import React, { ReactElement, SyntheticEvent, useState } from 'react'

type Props = {
	inputType: string
	autoC: string
	placeholder: string
	name: string
	validation: any
	initial: boolean
}

const Red: string = 'hsl(0, 100%, 74%)'
const GrayishBlue: string = 'hsl(246, 25%, 77%)'
const DarkBlue: string = 'hsl(249, 10%, 26%)'

export default function Input({
	inputType,
	autoC,
	placeholder,
	name,
	validation,
	initial,
}: Props): ReactElement {
	const [state, setState] = useState(false)

	let { empty, error } = validation

	const handleInputFocus = () => {
		setState(true)
	}

	const handleInputBlur = () => {
		setState(false)
	}

	return (
		<div>
			<div className={`input_cont ${state ? 'input__border-focus' : ''}`}>
				<input
					type={inputType}
					autoComplete={autoC}
					placeholder={placeholder}
					name={name}
					className='input'
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>
				<div className='input_cont__icon_cont'>
					{(empty || error) && !initial ? (
						<div className='input_cont__icon-error' />
					) : null}
				</div>
			</div>

			{empty && !initial ? (
				<p className='info_text'>{placeholder} cannot be empty</p>
			) : error && !initial ? (
				<p className='info_text'>
					Looks like this is not {placeholder === 'Email Address' ? 'an' : 'a'}{' '}
					{placeholder === 'Email Address' ? (
						placeholder.substring(0, 6).toLowerCase()
					) : (
						placeholder.toLowerCase()
					)}
				</p>
			) : null}

			<style jsx>{`
				.input_cont {
					display: flex;
					width: 280px;
					height: 56px;
					padding-inline: 18px;
					border: 1px solid ${(empty || error) && !initial ? Red : GrayishBlue};
					border-radius: 5px;
					align-items: center;
				}
				.input__border-focus {
					border-width: 2px;
					border-color: ${DarkBlue};
				}
				.input {
					width: 100%;
					height: 25px;
					border-style: none;
					outline: none;
					font-family: 'Poppins', sans-serif;
					font-size: 1.4rem;
					font-weight: 600;
					color: ${(empty || error) && !initial ? Red : DarkBlue};
				}
				.input::placeholder {
					font-weight: 700;
					color: hsl(249, 10%, 60%);
				}
				.input_cont__icon_cont {
					display: flex;
					width: 25px;
					height: 100%;
					justify-content: center;
					align-items: center;
				}
				.input_cont__icon-error {
					width: 20px;
					height: 20px;
					background-image: url('/signup_form/icon-error.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
				}
				.info_text {
					padding-block-start: 5px;
					text-align: right;
					font-family: 'Poppins', sans-serif;
					font-size: 1rem;
					font-weight: 400;
					color: ${Red};
				}
				@media screen and (min-width: 1110px) {
					.input_cont {
						width: 460px;
						height: 56px;
						padding-inline: 0px;
						padding-inline-start: 32px;
						padding-inline-end: 25px;
					}
				}
			`}</style>
		</div>
	)
}
