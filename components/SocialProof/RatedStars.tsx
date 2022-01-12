import React, { ReactElement } from 'react'
import Image from 'next/image'
import star from '@public/social_proof/icon-star.svg'

interface colorsRated {
	txt: string
	bg: string
}

const colors: colorsRated = {
	txt: 'hsl(300, 43%, 22%)',
	bg: 'hsl(300, 24%, 96%)',
}

let styles: string = `
  .rate_stars {
    display: flex;
    width: 328px;
    height: 80px;
    padding-block: 15px;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.bg};
  }
  .rate_stars_icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .rate_stars__text {
    font-family: 'Spartan', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${colors.txt};
  }
  @media screen and (min-width: 1115px) {
    .rate_stars {
      width: 446px;
      height: 56px;
      padding-inline-start: 32px;
      flex-direction: row;
      justify-content: left;
      gap: 32px;
    }
      .top_rated {
      margin-inline-start: 0px;
    }
    .middle_rated {
      margin-inline-start: 50px;
    }
    .bottom_rated {
      margin-inline-start: 100px;
    }
  }
`

type Props = {
	stars: number
	text: string
	classe: string
}

export default function RatedStars({ stars, text, classe }: Props): ReactElement {
	return (
		<div className={`rate_stars ${classe}`}>
			<div className='rate_stars_icons'>
				{[ ...Array(stars) ].map((s, index) => (
					<Image src={star} alt='star icon' key={index} />
				))}
			</div>
			<div>
				<h2 className='rate_stars__text'>{text}</h2>
			</div>
			<style jsx>{styles}</style>
		</div>
	)
}
