import ProductItems  from './ProductItems' 
import '../css/products.css'
import MiniImages from './MiniImages'
import data from '../data'

export default function Products(){
    const sneakers = data.map(sneaker => (
                // spread the products elements
                <MiniImages key={sneaker.id} {...sneaker} />
            )
        )
    return(
        <div className="container flex">
            <div className="product flex">
                <img src={data[0].image[0]} alt=""></img>
                <div className="mini-products flex space center">
                    {sneakers}
                </div>
            </div>
            <div className="details">
                <h3 className="title fw-700">SNEAKER COMPANY</h3>
                <h2 className="title2 fw-700">Fall Limited Edition<br/>Sneakers</h2>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                {data.map(product => (
                    <ProductItems data={product}/>
                ))}
            </div>
        </div>
    )
}