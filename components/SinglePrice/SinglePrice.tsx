import React, { ReactElement } from 'react'
import singleprice from './singleprice.module.css'

export default function SinglePrice(): ReactElement {
	return (
		<div className={singleprice.container}>
			<div className={singleprice.section_top}>
				<h2 className={singleprice.top_title}>Join our community</h2>
				<h3 className={singleprice.top_subtitle}>
					30-day, hassle-free money back guarantee
				</h3>
				<p className={singleprice.top_text}>
					Gain access to our full library of tutorials along with expert code reviews.
					Perfect for any developers who are serious about honing their skills.
				</p>
			</div>
			<div className={singleprice.section_middle}>
        <h2 className={singleprice.middle_title}>Monthly Subscription</h2>
        <p className={singleprice.middle_price}>$29 <span className={singleprice.middle_price_small}>per month</span></p>
        <p className={singleprice.middle_text}>Full access for less than $1 a day</p>
        <button className={singleprice.middle_btn}>Sign Up</button>
      </div>
			<div className={singleprice.section_bottom}>
				<h2 className={singleprice.bottom_title}>Why Us</h2>
				<p className={singleprice.bottom_text}>
          Tutorials by industry experts <br /> Peer {`&`} expert code review <br /> Coding exercises <br /> Access
          to our GitHub repos <br /> Community forum <br /> Flashcard decks <br /> New videos every week
				</p>
			</div>
		</div>
	)
}
