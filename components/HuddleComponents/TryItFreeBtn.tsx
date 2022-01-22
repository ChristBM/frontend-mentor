import { Fragment, ReactElement } from 'react'

const pink: string = 'hsl(322, 100%, 66%)'

export default function TryItFreeBtn(): ReactElement {
  return (
    <Fragment>
      <button className='try_btn'>Try It Free</button>
      <style jsx>{`
        .try_btn {
          width: 136px;
          height: 40px;
          border-style: none;
          border: 1px solid ${pink};
          border-radius: 20px;
          background-color: #fff;
          font-family: 'Open Sans', sans-serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: ${pink};
          cursor: pointer;
        }
        `}</style>
    </Fragment>
  )
}
