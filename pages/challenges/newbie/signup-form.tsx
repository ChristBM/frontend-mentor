import Head from 'next/head'
import React, { ReactElement } from 'react'
import FormContainer from '@components/SignupForm/FormContainer'

export default function Signup_form(): ReactElement {
	return (
		<div className='signup_form'>
			<Head>
				<title>Intro component with sign up form</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
      <FormContainer />
      <style jsx>{`
        .signup_form {
					display: flex;
					width: 100%;
					min-height: 100vh;
					padding-block-end: 68px;
					justify-content: center;
					background-image: url('/signup_form/bg-intro-mobile.png');
					background-color: hsl(0, 100%, 74%);
					background-repeat: no-repeat;
          background-size: cover;
				}
        @media screen and (min-width: 375px) {
          .signup_form {
            background-image: url('/signup_form/bg-intro-desktop.png');
          }
        }
				@media screen and (min-width: 1110px) {
					.signup_form {
						padding-block-end: 0px;
					}
				}
        `}</style>
		</div>
	)
}
