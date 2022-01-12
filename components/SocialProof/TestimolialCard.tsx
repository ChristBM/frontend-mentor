import { ReactElement } from 'react'

interface colorsTestimonial {
	bg: string
	status: string
	white: string
}

const colors: colorsTestimonial = {
	bg: 'hsl(300, 43%, 22%)',
	status: 'hsl(333, 80%, 67%)',
	white: 'hsl(0, 0%, 100%)',
}

type Props = {
	image: string
	name: string
	status: string
	opinion: string
	classe: string
}

export default function TestimolialCard({
	image,
	name,
	status,
	opinion,
	classe
}: Props): ReactElement {
	return (
		<div className={`testimonial ${classe}`}>
			<div className='testimonial__info'>
				<div className='testimonial__img_cont' />
				<div>
					<p className='testimonial__name'>{name}</p>
					<p className='testimonial__status'>{status}</p>
				</div>
			</div>
			<div>
				<p className='testimonial__opinion'>{opinion}</p>
			</div>
			<style jsx>{`
				.testimonial {
					display: flex;
					width: 328px;
					height: 250px;
					padding-inline: 30px;
					padding-block-start: 40px;
					border-radius: 10px;
					background-color: ${colors.bg};
					flex-direction: column;
					align-items: center;
					gap: 30px;
				}
				.testimonial__img_cont {
					width: 42px;
					height: 42px;
					border-radius: 50%;
					background-image: url(${image});
					background-position: center;
					background-repeat: no-repeat;
					background-size: contain;
				}
				.testimonial__info {
					display: flex;
					width: 100%;
					justify-content: left;
					align-items: center;
					gap: 20px;
				}
				.testimonial__name {
					font-family: 'Spartan', sans-serif;
					font-size: 1.4rem;
					font-weight: 500;
					color: ${colors.white};
				}
				.testimonial__status {
					padding-block-start: 5px;
					font-family: 'Spartan', sans-serif;
					font-size: 1.4rem;
					font-weight: 400;
					color: ${colors.status};
				}
				.testimonial__opinion {
					font-family: 'Spartan', sans-serif;
					font-size: 1.3rem;
					font-weight: 400;
					line-height: calc(1.3rem * 1.6);
					color: ${colors.white};
				}
				@media screen and (min-width: 1115px) {
					.testimonial {
						width: 350px;
						height: 235px;
					}
					.testimonial__opinion {
						line-height: calc(1.4rem * 1.6);
					}
					.left_testimonial {
						margin-block-start: 0px;
					}
					.center_testimonial {
						margin-block-start: 20px;
					}
					.right_testimonial {
						margin-block-start: 40px;
					}
				}
			`}</style>
		</div>
	)
}
