import { ReactElement } from 'react'
import faqaccordion from './faqaccordion.module.css'
import FaqDetails from './FaqDetails'
import { data } from './FAQ_data'

export default function FaqAccordion(): ReactElement {
	return (
		<div className={faqaccordion.container}>
			<div className={faqaccordion.illustration} />
			<div className={faqaccordion.illustration_box} />
			<div className={faqaccordion.illus_desk}>
				<div className={faqaccordion.illustration_desktop} />
			</div>
			<div className={faqaccordion.info}>
				<h1 className={faqaccordion.title}>FAQ</h1>
				<ul className={faqaccordion.list}>
					{data.map(d => (
						<li
							className={faqaccordion.list__li}
							key={(d.summary as string).substr(0, 10)}
						>
							<FaqDetails summary={d.summary} text={d.text} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
