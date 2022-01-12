import { ReactElement } from 'react'
import RatedStars from './RatedStars'
import TestimolialCard from './TestimolialCard'
import socialproof from './socialproof.module.css'
import { testimonialData } from './testimonialData'
import { ratedData } from './ratedData'

export default function SocialProof(): ReactElement {
	return (
		<div className={socialproof.container}>
      <div className={socialproof.header}>
				<h1 className={socialproof.title}>10,000+ of our users love our products.</h1>
				<p className={socialproof.text}>
					We only provide great products combined with excellent customer service. See
					what our satisfied customers are saying about our services.
				</p>
			</div>
			<div className={socialproof.ratedstars_cont}>
				{ratedData.map(d => <RatedStars key={d.text} stars={d.stars} text={d.text} classe={d.classe}/>)}
			</div>
      <div className={socialproof.testimonial_cont}>
				{testimonialData.map(d => (
					<TestimolialCard
						key={d.name}
						image={d.image}
						name={d.name}
						status={d.status}
						opinion={d.opinion}
            classe={d.classe}
					/>
				))}
			</div>
			<div />
		</div>
	)
}
