import React, { ReactElement, SyntheticEvent, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import useWindowDimensions from '@hooks/useWindowDimensions'
import image from '@public/launching_soon/illustration-dashboard.png'
import launching from './launching.module.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

interface LaunchingStates {
	initWidth: number
	error: boolean
	isFocus: boolean
	hoverIcon: {
		facebook: boolean
		twitter: boolean
		instagram: boolean
	}
}

const initialState: LaunchingStates = {
	initWidth: 0,
	error: false,
	isFocus: false,
	hoverIcon: {
		facebook: false,
		twitter: false,
		instagram: false,
	},
}

const EmailRegex: RegExp = /^[\w\._]{5,30}\+?[\w]{0,10}@[\w\.\-]{3,}\.\w{2,5}$/

export default function Launching(): ReactElement {
	const [ state, setState ] = useState(initialState)
	const { width } = useWindowDimensions()

	let inputRef = useRef<HTMLInputElement>(null)
	let launchingRef = useRef<HTMLDivElement>(null)

	let iconRefF = useRef<HTMLDivElement>(null)
	let iconRefT = useRef<HTMLDivElement>(null)
	let iconRefI = useRef<HTMLDivElement>(null)
	let refArray = [ iconRefF, iconRefT, iconRefI ]

	useEffect(() => {
		let initialW = launchingRef.current.clientWidth
		try {
			window.addEventListener('scroll', () => setState({ ...state, initWidth: initialW }))
			return () =>
				window.removeEventListener('scroll', () =>
					setState({ ...state, initWidth: initialW })
				)
		} catch (error) {
			console.log(error)
		}
	}, [])

	const handleSubmit = (ev: SyntheticEvent): void => {
		ev.preventDefault()
		let inputValue = inputRef.current.value === null ? '' : inputRef.current.value
		setState({
			...state,
			error: !EmailRegex.test(inputValue),
		})
	}

	const handleFocus = () => setState({ ...state, isFocus: true })
	const handleBlur = () => setState({ ...state, isFocus: false })

	const handleIconHover = (ev: SyntheticEvent): void => {
		if (ev.target === iconRefF.current) {
			setState({
				...state,
				hoverIcon: {
					facebook: true,
					twitter: false,
					instagram: false,
				},
			})
		}
		if (ev.target === iconRefT.current) {
			setState({
				...state,
				hoverIcon: {
					facebook: false,
					twitter: true,
					instagram: false,
				},
			})
		}
		if (ev.target === iconRefI.current) {
			setState({
				...state,
				hoverIcon: {
					facebook: false,
					twitter: false,
					instagram: true,
				},
			})
		}
	}

	const handleIconOut = (): void => {
		setState({
			...state,
			hoverIcon: {
				facebook: false,
				twitter: false,
				instagram: false,
			},
		})
	}

	return (
		<div className={launching.container} ref={launchingRef}>
			<div className={launching.logo} />
			<div>
				<h1 className={launching.title}>
					We are launching <span className={launching.title_bold}>soon!</span>
				</h1>
				<p className={launching.subtitle}>Subscribe and get notified</p>
			</div>
			<div className={launching.suscribe}>
				<div>
					<div
						className={`${launching.suscribe_input_cont} ${state.error
							? launching.input_border_red
							: state.isFocus ? launching.input_border_black : ''}`}
					>
						<input
							type='email'
							ref={inputRef}
							className={launching.suscribe_input}
							placeholder='Your email address...'
							autoComplete='email'
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</div>
					{state.error ? (
						<p className={launching.error}>
							<i>Please provide a valid email address</i>
						</p>
					) : null}
				</div>
				<button type='button' onClick={handleSubmit} className={launching.suscribe_btn}>
					Notify Me
				</button>
			</div>
			<div className={launching.illustration}>
				<Image src={image} />
			</div>
			<div className={launching.social_cont}>
				{[ 'Facebook', 'Twitter', 'Instagram' ].map((icon, index) => (
					<div
						data-set={index}
						ref={refArray[index]}
						className={launching.icon}
						key={icon}
						onMouseEnter={handleIconHover}
						onMouseOut={handleIconOut}
					>
						{icon === 'Facebook' && (
							<FaFacebookF
								size={
									width === 0 ? state.initWidth >= 1050 ? (
										'15px'
									) : (
										'28px'
									) : width >= 1050 ? (
										'15px'
									) : (
										'28px'
									)
								}
								color={state.hoverIcon.facebook ? '#FFFFFF' : 'hsl(223, 87%, 63%)'}
							/>
						)}
						{icon === 'Twitter' && (
							<FaTwitter
								size={
									width === 0 ? state.initWidth >= 1050 ? (
										'15px'
									) : (
										'28px'
									) : width >= 1050 ? (
										'15px'
									) : (
										'28px'
									)
								}
								color={state.hoverIcon.twitter ? '#FFFFFF' : 'hsl(223, 87%, 63%)'}
							/>
						)}
						{icon === 'Instagram' && (
							<FaInstagram
								size={
									width === 0 ? state.initWidth >= 1050 ? (
										'19px'
									) : (
										'32px'
									) : width >= 1050 ? (
										'19px'
									) : (
										'32px'
									)
								}
								color={state.hoverIcon.instagram ? '#FFFFFF' : 'hsl(223, 87%, 63%)'}
							/>
						)}
					</div>
				))}
			</div>
			<p className={launching.copyright}>© Copyright Ping. All rights reserved.</p>
		</div>
	)
}
