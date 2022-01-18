import React, { ReactElement } from 'react'
import SignupForm from './SignupForm'
import formcontainer from './formcontainer.module.css'

export default function FormContainer(): ReactElement {
  return (
    <div className={formcontainer.container}>
      <div className={formcontainer.texts_con}>
        <h1 className={formcontainer.title}>Learn to code by watching others</h1>
        <p className={formcontainer.text}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className={formcontainer.form_con}>
        <SignupForm />
      </div>
    </div>
  )
}
