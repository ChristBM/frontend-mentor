import React from 'react'
import Image from 'next/image'
import nftcard from './nftcard.module.css'
import image_equilibrium from '../../public/nft_card_img/image-equilibrium.jpg'
import icon_ethereum from '../../public/nft_card_img/icon-ethereum.svg'
import icon_clock from '../../public/nft_card_img/icon-clock.svg'
import icon_view from '../../public/nft_card_img/icon-view.svg'
import image_avatar from '../../public/nft_card_img/image-avatar.png'

export default function NftCard() {
	return (
		<div className={nftcard.container}>
			<div className={nftcard.img_container}>
				<Image
					src={image_equilibrium}
					width={604}
					height={604}
					className={nftcard.img}
					alt='nft image'
				/>
			</div>
			<div className={nftcard.texts_container}>
				<h1 className={nftcard.title}>Equilibrium #3429</h1>
				<p className={nftcard.text}>
					Our Equilibrium collection promotes balance and calm.
				</p>
				<div className={nftcard.value_container}>
					<div className={nftcard.text_icon_cont}>
						<i className={nftcard.icons}>
							<Image src={icon_ethereum} alt='ethereum icon' />
						</i>
						<p className={nftcard.text_price}>0.041 ETH</p>
					</div>
					<div className={nftcard.text_icon_cont}>
						<i className={nftcard.icons}>
							<Image src={icon_clock} alt='clock icon' />
						</i>
						<p className={nftcard.text_upd}>3 days left</p>
					</div>
				</div>
				<div className={nftcard.author}>
					<div className={nftcard.avatar_cont}>
						<Image
							src={image_avatar}
							className={nftcard.avatar_img}
							width={34}
							height={34}
							alt='author avatar image'
						/>
					</div>
					<p className={nftcard.author_text}>
						Creation of <span className={nftcard.author_name}>Jules Wyvern</span>
					</p>
				</div>
			</div>
		</div>
	)
}
