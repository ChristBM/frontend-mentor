import { ReactElement } from 'react'
import FeatureCard from './FeatureCard'
import { featureData } from './featureData'
import featuresection from './featuresection.module.css'

export default function FeatureSection(): ReactElement {
	return (
		<div className={featuresection.container}>
			<div className={featuresection.texts}>
				<h1 className={featuresection.title}>
					Reliable, efficient delivery<br />
					<span className={featuresection.title_bold}>Powered by Technology</span>
				</h1>
				<p className={featuresection.abstract}>
					Our Artificial Intelligence powered tools use millions of project data points to
					ensure that your project is successful
				</p>
			</div>
			<div className={featuresection.card_cont}>
				{featureData.map(d => (
					<div className={d.classe} key={d.title}>
						<FeatureCard
							color={d.color}
							title={d.title}
							text={d.text}
							icon={d.icon}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
