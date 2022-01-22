import { ReactElement } from 'react'
import Image from 'next/image'
import qr from '@public/qr_code/image-qr-code.png'
import qrcode from './qrcode.module.css'

export default function QrCode():ReactElement {
	return (
  <div className={qrcode.card}>
    <div className={qrcode.img_cont}>
        <Image src={qr} placeholder="blur" className={qrcode.img} objectFit='contain' />
    </div>
    <div className={qrcode.text_cont}>
        <h2 className={qrcode.title}>Improve your front-end skills by building projects</h2>
        <p className={qrcode.text}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  </div>)
}
