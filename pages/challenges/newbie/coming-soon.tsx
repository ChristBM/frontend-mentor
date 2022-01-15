import React, { ReactElement } from 'react'
import Head from 'next/head'
import ComingSoon from '@components/ComingSoon/ComingSoon'

export default function Coming_soon(): ReactElement {
  return (
    <div className='coming_soon'>
      <Head>
        <title>Base Apparel coming soon page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet"/>
      </Head>
      <ComingSoon />
      <style jsx>{`
        .coming_soon {
          width: 100%;
          min-height: 100vh;
          background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
        }
        `}</style>
    </div>
  )
}
