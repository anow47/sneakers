import image1 from './images/image-product-1.jpg'
import image2 from './images/image-product-2.jpg'
import image3 from './images/image-product-3.jpg'
import image4 from './images/image-product-4.jpg'
import thumb1 from './images/image-product-1-thumbnail.jpg'
import thumb2 from './images/image-product-2-thumbnail.jpg'
import thumb3 from './images/image-product-3-thumbnail.jpg'
import thumb4 from './images/image-product-4-thumbnail.jpg'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        id: 1,
        image: [image1, image2, image3, image4],
        thumbnail: [thumb1, thumb2, thumb3, thumb4],
        price: 125.00,
        discount: 250.00,
        offer: 50,
        quantity: 0
    }
]