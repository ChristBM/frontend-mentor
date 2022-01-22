import React, { Fragment, ReactElement } from 'react'

const pink: string = 'hsl(322, 100%, 66%)'

export default function GetStartedBtn(): ReactElement {
  return (
    <Fragment>
      <button className='started_btn'>Get Started For Free</button>
      <style jsx>{`
        .started_btn {
          width: 400px;
          height: 80px;
          border-style: none;
          border-radius: 40px;
          background-color: ${pink};
          box-shadow: 0px 5px 20px #ae00a070;
          font-family: 'Open Sans', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #FFF;
          cursor: pointer;
        }
        .started_btn:hover {
          opacity: 0.8;
        }
        `}</style>
    </Fragment>
  )
}
