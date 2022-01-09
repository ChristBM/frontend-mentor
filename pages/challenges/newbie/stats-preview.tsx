import Head from 'next/head'
import { ReactElement } from 'react'
import StatsPreview from '@components/StatsPreview/StatsPreview'

export default function Stats_preview(): ReactElement {
  return (
    <div className='stats_preview'>
      <Head>
        <title>Stats Preview Card Component</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap'
          rel='stylesheet'
        />
      </Head>
      <StatsPreview />
      <style jsx>{`
        .stats_preview {
          display: flex;
          width: 100%;
          height: 900px;
          justify-content: center;
          align-items: center;
          background-color: hsl(233, 47%, 7%);
        }
        `}</style>
    </div>
  )
}
