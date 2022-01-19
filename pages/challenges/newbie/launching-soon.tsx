import Head from 'next/head'
import React, { ReactElement } from 'react'
import Launching from '@components/LaunchingSoon/Launching'

export default function Launching_soon(): ReactElement {
  return (
    <div className='launching_soon'>
      <Head>
        <title>Ping coming soon page</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Launching />
      <style jsx>{`
        .launching_soon {
          display: flex;
          width: 100%;
          min-height: 100vh;
          padding-block-start: 168px;
          padding-block-end: 75px;
          flex-direction: column;
          align-items: center;
        }
        @media screen and (min-width: 1050px) {
          .launching_soon {
            padding-block-start: 85px;
            padding-block-end: 48px;
          }
        }
        @media screen and (max-width: 670px){
          .launching_soon {
            padding-block-start: 85px;
          }
        }
        `}</style>
    </div>
  )
}
