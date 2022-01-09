import { ReactElement } from 'react'
import statspreview from './statspreview.module.css'

export default function StatsPreview(): ReactElement {
	return (
		<div className={statspreview.container}>
			<div className={statspreview.img_container}>
				<div className={statspreview.img} />
			</div>
			<div className={statspreview.texts_cont}>
				<div>
					<h2 className={statspreview.title}>
						Get <span className={statspreview.title_insights}>insights</span> that help
						your business grow.
					</h2>
				</div>
				<div>
					<p className={statspreview.abstract}>
						Discover the benefits of data analytics and make better decisions regarding
						revenue, customer experience, and overall efficiency.
					</p>
				</div>
				<div className={statspreview.stats_cont}>
					<TheStats stats='10k+' subt='COMPANIES' />
					<TheStats stats='314' subt='TEMPLATES' />
					<TheStats stats='12M+' subt='QUERIES' />
				</div>
			</div>
		</div>
	)
}

type Props = {
	stats: string
	subt: string
}

function TheStats({ stats, subt }: Props): ReactElement {
	return (
		<div className='thestats'>
			<h2 className='thestats__stats'>{stats}</h2>
			<p className='thestats__subt'>{subt}</p>
			<style jsx>{`
				.thestats__stats {
					text-align: center;
					font-family: 'Inter', Helvetica;
					font-size: 2.4rem;
					font-weight: 700;
					color: hsl(0, 0%, 100%);
				}
				.thestats__subt {
					padding-block-start: 5px;
					text-align: center;
					font-family: 'Lexend Deca', Helvetica;
					font-size: 1.4rem;
					font-weight: 400;
					color: hsla(0, 0%, 100%, 0.6);
				}

				@media screen and (min-width: 1114px) {
					.thestats__stats {
						text-align: left;
					}
					.thestats__subt {
						padding-block-start: 6px;
						font-size: 1.2rem;
						text-align: left;
						letter-spacing: 1px;
					}
				}
			`}</style>
		</div>
	)
}
