import Link from "next/link";

export default function Home() {
	return (
		<div>Esta es la home page de los retos de Frontmentor
			<Link href='/challenges/newbie/nft-card'><a>NFT CARD</a></Link>
			<Link href='/challenges/newbie/order-summary'><a>Order Summary</a></Link>
		</div>
	)
}
