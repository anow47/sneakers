import avatar from '../images/image-avatar.png'
import cart from '../images/icon-cart.svg'
import '../css/cart.css'
import { useState, useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import CartItems from './cartItems'
import data from '../data'

export default function Cart(){
  const {cartItems} = useContext(ShopContext)

  const [showCart, setShowCart] = useState (false)
  const toggleCart = () => {
    setShowCart(!showCart)
  }

    // Calculate the total number of items in the cart
    const totalItemsInCart = Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  
  return(
      <div className="cart">
          <div className="icon-avatar flex center space">
              <div className="total">
                  <p className="total-items">{totalItemsInCart}</p>
                  <img src={cart} className="cart-icon" onClick={toggleCart} alt="cart" />
              </div>
              <img src={avatar} className="avatar" alt="avatar" />
          </div>
          {showCart && (
              <div className="cart-items">
                  <h5>Cart</h5>
                  <hr></hr>
                  {data.map(product => (
                    cartItems[product.id] === 0 ? <p className="empty f16 fw-700">Your cart is empty.</p> :
                    <CartItems data={product} />
                  )
                  )}
              </div>
          )}
      </div>
  )
}
