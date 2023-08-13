import minusIcon  from '../images/icon-minus.svg'
import plusIcon from '../images/icon-plus.svg'
import cartIcon from '../images/icon-btn-cart.svg'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

export default function ProductItems (props){
    const {id, price, offer, discount} = props.data
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext) 
    const cartItemAmount = cartItems[id]
    return (
        <div>
            <div className="price-container">
                <div className="price flex">
                    <span className="price-tag f16 fw-700">${price}</span>
                    <span className="offer flex space center fw-700">{offer}%</span>
                </div>
                <span className="discount"><s>${discount}</s></span>
            </div>
            <div className="add flex">
                <div className="add-icons flex space center">
                    <img src={minusIcon} onClick={() => removeFromCart(id)} className="add-icon" alt="" />
                    <span className="count fw-700">{cartItemAmount}</span>
                    <img src={plusIcon} onClick={() => addToCart(id)} className="add-icon" alt="" />
                </div>
                <button type="submit" className="btn f16">
                    <img className="btn-cart" src={cartIcon} alt=""></img>Add to cart
                </button>
            </div>
        </div>
    )
}