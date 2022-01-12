export interface Testimonial {
  image: string
  name: string
  status: string
  opinion: string
  classe: string
}

export const testimonialData: Testimonial[] = [
  {
    image: '/social_proof/image-colton.jpg',
    name: 'Colton Smith',
    status: 'Verified Buyer',
    opinion: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
    classe: 'left_testimonial'
  },
  {
    image: '/social_proof/image-irene.jpg',
    name: 'Irene Roberts',
    status: 'Verified Buyer',
    opinion: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
    classe: 'center_testimonial'
  },
  {
    image: '/social_proof/image-anne.jpg',
    name: 'Anne Wallace',
    status: 'Verified Buyer',
    opinion: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
    classe: 'right_testimonial'
  }
]