import React, { ReactElement, useRef, useReducer, useState, useEffect } from 'react'
import Link from 'next/link'
import signupform from './signupform.module.css'
import Input from './Input'
import { inputs } from './inputData'

const initialState: object = {
	firstLoad: true, // only true when btn has not been clicked
	name: {
		empty: true, // true while a input is empty after onClick event
		error: false, // true if input is not empty but info is not valid
	},
	lastname: {
		empty: true,
		error: false,
	},
	email: {
		empty: true,
		error: false,
	},
	password: {
		empty: true,
		error: false,
	},
}

interface ActType {
	submit: string
	name: string
	lastname: string
	email: string
	password: string
}

const actionTypes: ActType = {
	submit: 'BtnClicked',
	name: 'InputNameSates',
	lastname: 'InputLastNameSates',
	email: 'InputEmailSates',
	password: 'InputPasswordNameSates',
}

const reducer = (state: typeof initialState, action: any) => {
	switch (action.type) {
		case actionTypes.submit:
			return {
				...state,
				firstLoad: false,
			}
		case actionTypes.name:
			return {
				...state,
				name: {
					empty: action.payload.empty,
					error: action.payload.error,
				},
			}
		case actionTypes.lastname:
			return {
				...state,
				lastname: {
					empty: action.payload.empty,
					error: action.payload.error,
				},
			}
		case actionTypes.email:
			return {
				...state,
				email: {
					empty: action.payload.empty,
					error: action.payload.error,
				},
			}
		case actionTypes.password:
			return {
				...state,
				password: {
					empty: action.payload.empty,
					error: action.payload.error,
				},
			}
		default:
			return { ...state }
	}
}

export default function SignupForm(): ReactElement {
	const [ user, setUser ] = useState({
		name: '',
		lastname: '',
		email: '',
		pass: '',
	})

	const [ state, dispatch ] = useReducer(reducer, initialState)

	let formRef = useRef<HTMLFormElement>(null)

	let nameRegex = /^[A-ZÁÉÍÓÚÑa-záíéóúñ][a-záíéóúñ]+\s?$/
	let emailRegex = /^[\w\._]{5,30}\+?[\w]{0,10}@[\w\.\-]{3,}\.\w{2,5}$/
	let passRegex = /(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[a-z]+.*)(?=.*[\.\s\-\$\^\*,'_"&%#@!]+.*).{8,16}/

	useEffect(
		() => {
			dispatch({
				type: actionTypes.name,
				payload: {
					empty: user.name === '',
					error: !nameRegex.test(user.name),
				},
			})
			dispatch({
				type: actionTypes.lastname,
				payload: {
					empty: user.lastname === '',
					error: !nameRegex.test(user.lastname),
				},
			})
			dispatch({
				type: actionTypes.email,
				payload: {
					empty: user.email === '',
					error: !emailRegex.test(user.email),
				},
			})
			dispatch({
				type: actionTypes.password,
				payload: {
					empty: user.pass === '',
					error: !passRegex.test(user.pass),
				},
			})
		},
		[ user ]
	)

	let handleSubmit = (ev: React.SyntheticEvent): void => {
		ev.preventDefault()

		dispatch({ type: actionTypes.submit })

		let dataForm = new FormData(formRef.current)
		setUser({
			name: dataForm.get('name') === null ? '' : dataForm.get('name') as string,
			lastname:
				dataForm.get('lastname') === null ? '' : dataForm.get('lastname') as string,
			email: dataForm.get('email') === null ? '' : dataForm.get('email') as string,
			pass: dataForm.get('password') === null ? '' : dataForm.get('password') as string,
		})
	}

	return (
		<div className={signupform.container}>
			<div className={signupform.banner}>
				<h3 className={signupform.title}>
					Try it free 7 days{` `}
					<span className={signupform.title_light}>then $20/mo. thereafter</span>
				</h3>
			</div>
			<form action='/' className={signupform.form} ref={formRef}>
				{inputs.map(inp => (
					<Input
						key={inp.name}
						inputType={inp.type}
						autoC={inp.autocomplete}
						placeholder={inp.placeholder}
						name={inp.name}
						validation={state[inp.name]}
						initial={state.firstLoad}
					/>
				))}
				<button type='button' className={signupform.submit_btn} onClick={handleSubmit}>
					CLAIM YOUR FREE TRIAL
				</button>
				<p className={signupform.form__terms}>
					By clicking the button, you are agreeing to our{' '}
					<Link href={'/'}>
						<a className={signupform.form__terms_red}>Terms and Services</a>
					</Link>
				</p>
			</form>
		</div>
	)
}
