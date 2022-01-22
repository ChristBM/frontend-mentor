import React, { Fragment, ReactElement } from 'react'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Light_Pink: string = 'hsl(321, 100%, 78%)'

export default function SubscribeBtn({onClick}: Props): ReactElement {
  return (
    <Fragment>
      <button
        className='subscribe_btn'
        onClick={onClick}
      >Subscribe</button>
      <style jsx>{`
        .subscribe_btn {
          width: 160px;
          height: 50px;
          border-style: none;
          border-radius: 5px;
          background-color: ${Light_Pink};
          font-family: 'Open Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #FFF;
          cursor: pointer;
        }
        .subscribe_btn:hover {
          opacity: 0.8;
        }
        `}</style>
    </Fragment>
  )
}
