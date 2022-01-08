import { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ordersummary from './ordersummary.module.css'
import illustration from '@public/order_summary/illustration-hero.svg'
import icon_music from '@public/order_summary/icon-music.svg'

export default function OrderSummary(): ReactElement {
	return (
		<div className={ordersummary.container}>
			<div className={ordersummary.illustration}>
				<Image
					src={illustration}
					alt='illustration hero'
					className={ordersummary.illustration_img}
				/>
			</div>
      <div className={ordersummary.texts}>
				<h2 className={ordersummary.title}>Order Summary</h2>
				<p className={ordersummary.abstract}>
					You can now listen to millions of songs, audiobooks, and podcasts on any device
					anywhere you like!
				</p>
			</div>
      <div className={ordersummary.plan_cont}>
				<Image src={icon_music} alt='music icon' />
				<div className={ordersummary.plan}>
					<p className={ordersummary.plan_name}>Annual Plan</p>
					<p className={ordersummary.plan_price}>$59.99/year</p>
				</div>
				<Link href='/'>
          <a className={ordersummary.plan_change}>Change</a>
				</Link>
			</div>
      <button className={ordersummary.btn}>Proceed to Payment</button>
			<Link href='/'>
				<a className={ordersummary.cancel}>Cancel Order</a>
			</Link>
		</div>
	)
}
