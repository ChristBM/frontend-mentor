import { ReactElement } from 'react'
import logo from '@public/huddle_page/logo.svg'

type Props = {}

export default function HuddleLogo({  }: Props): ReactElement {
	return (
		<div className='huddle_logo'>
      <style jsx>{`
        .huddle_logo {
          display: block;
          width: 244px;
          height: 46px;
          background-image: url(${logo});
          background-position: right;
          background-repeat: no-repeat;
          background-size: auto;
        }
        `}</style>
		</div>
	)
}
