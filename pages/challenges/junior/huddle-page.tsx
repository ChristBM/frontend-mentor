import { ReactElement } from 'react'
import Head from 'next/head'

export default function Huddle_page(): ReactElement {
  return (
    <div className='huddle_page'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <style jsx>{`
        .huddle_page {
          display: flex;
          width: 100%;
          min-height: 100vh;
          flex-direction: column;
          align-items: center;
        }
        `}</style>
    </div>
  )
}
/* font-family: 'Poppins', sans-serif; */
/* font-family: 'Open Sans', sans-serif; */