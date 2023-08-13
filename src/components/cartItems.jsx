import deleteIcon from '../images/icon-delete.svg'
import '../css/cart.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'



export default function CartItems(props){
    const {id, price, thumbnail} = props.data
    const {removeFromCart} = useContext(ShopContext)

  return(
        <div className="items-container flex">
            <div className="inner-container flex center space">
                <img src={thumbnail[0]} className="cart-img" alt="" />
                <div className="total-price">
                    <h4>Fall Limited Edition Sneakers</h4>
                    <div className="price">
                        <p>{price} x 3 <span className="price-span">${price * 3}</span></p>
                    </div>
                </div>
                <img src={deleteIcon} onClick={() => removeFromCart(id)} className="delete-icon" alt="" />
            </div>
            <button className="btn">Checkout</button>
        </div>
    )
}