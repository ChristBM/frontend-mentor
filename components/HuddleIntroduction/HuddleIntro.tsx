import { ReactElement, SyntheticEvent, useState, useRef } from 'react'
import Image from 'next/image'
import huddleintro from './huddleintro.module.css'
import illustration from '@public/huddle_introduction/illustration-mockups.svg'
import SocialIcon from '@components/HuddleIntroduction/SocialIcon'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const SoftMagenta: string = 'hsl(300, 69%, 71%)'

export default function HuddleIntro(): ReactElement {
	const [ state, setState ] = useState({
		hover: {
			facebook: false,
			twitter: false,
			instagram: false,
		},
	})

	let refF = useRef<HTMLDivElement>(null)
	let refT = useRef<HTMLDivElement>(null)
	let refI = useRef<HTMLDivElement>(null)

	const handdleHover = (ev: SyntheticEvent): void => {
    if( ev.target === refF.current) {
      setState({
        hover: {
          facebook: true,
          twitter: false,
          instagram: false,
        },
      })
    }
    if( ev.target === refT.current) {
      setState({
        hover: {
          facebook: false,
          twitter: true,
          instagram: false,
        },
      })
    }
    if( ev.target === refI.current) {
      setState({
        hover: {
          facebook: false,
          twitter: false,
          instagram: true,
        },
      })
    }
	}
  const handdleOut = (): void => {
		setState({
			hover: {
				facebook: false,
				twitter: false,
				instagram: false,
			},
		})
	}

	return (
		<div className={huddleintro.container}>
			<div className={huddleintro.logo} />
			<div className={huddleintro.illust}>
				<Image src={illustration} />
			</div>
			<div className={huddleintro.texts}>
				<h1 className={huddleintro.title}>
					Build The Community <br /> Your Fans Will Love
				</h1>
				<p className={huddleintro.subtitle}>
					Huddle re-imagines the way we build communities. You have a voice, but so does
					your audience. Create connections with your users as you engage in genuine
					discussion.
				</p>
        <button className={huddleintro.btn}>Register</button>
			</div>
				<div className={huddleintro.social}>
					<SocialIcon onHover={handdleHover} onOut={handdleOut} iref={refF}>
						<FaFacebookF
							size='15px'
							color={state.hover.facebook ? SoftMagenta : '#fff'}
						/>
					</SocialIcon>
					<SocialIcon onHover={handdleHover} onOut={handdleOut} iref={refT}>
						<FaTwitter size='15px' color={state.hover.twitter ? SoftMagenta : '#fff'} />
					</SocialIcon>
					<SocialIcon onHover={handdleHover} onOut={handdleOut} iref={refI}>
						<FaInstagram
							size='15px'
							color={state.hover.instagram ? SoftMagenta : '#fff'}
						/>
					</SocialIcon>
				</div>
		</div>
	)
}
