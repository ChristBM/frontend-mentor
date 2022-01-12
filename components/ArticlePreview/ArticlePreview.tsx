import { ReactElement, useState } from 'react'
import articlepreview from './articlepreview.module.css'
import Image from 'next/image'
import avatar from '@public/article_preview/avatar-michelle.jpg'

export default function ArticlePreview(): ReactElement {
	const [ state, setState ] = useState(false)

	const share = (): void => {
		console.log('hi')
		setState(!state)
	}

	return (
		<div className={articlepreview.container}>
			<div className={articlepreview.img_cont} />
			<div className={articlepreview.info_cont}>
				<div className={articlepreview.title_cont}>
					<h3 className={articlepreview.title}>
						Shift the overall look and feel by adding these wonderful touches to furniture
						in your home
					</h3>
				</div>
				<div className={articlepreview.text_cont}>
					<p className={articlepreview.text}>
						Ever been in a room and felt like something was missing? Perhaps it felt
						slightly bare and uninviting. I’ve got some simple tips to help you make any
						room feel complete.
					</p>
				</div>
				<div className={articlepreview.author_cont}>
					<Image
						src={avatar}
						alt='article image'
						width={40}
						height={40}
						className={articlepreview.avatar}
					/>
					<div className={articlepreview.avatar_info}>
						<p className={articlepreview.avatar_name}>Michelle Appleton</p>
						<p className={articlepreview.avatar_date}>28 Jun 2020</p>
					</div>
				</div>
			</div>
			<div
				className={`${articlepreview.share_social} ${state ? articlepreview.show : ''}`}
			>
				<div>
					<p className={articlepreview.text_share}>SHARE</p>
				</div>
				<div className={`${articlepreview.icon_facebook} ${articlepreview.icon_style}`} />
				<div className={`${articlepreview.icon_twitter} ${articlepreview.icon_style}`} />
				<div className={`${articlepreview.icon_pinteres} ${articlepreview.icon_style}`} />
			</div>
			<div
				className={`${articlepreview.share_icon} ${state
					? articlepreview.share_icon_bg2
					: ''}`}
				onClick={share}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='15' height='13'>
					<path
						fill={state ? '#FFFFFF' : '#6E8098'}
						d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
					/>
				</svg>
			</div>
		</div>
	)
}
