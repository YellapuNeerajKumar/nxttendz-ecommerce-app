import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, clearCart} = value
      const showEmptyView = cartList.length === 0
      const totalPrice = cartList.reduce((a, c) => a + c.price * c.quantity, 0)

      const emptyCart = () => {
        clearCart()
      }

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button type="button" onClick={emptyCart}>
                  Remove All
                </button>
                <CartListView />
              </div>
              <div className="cart-summary-container">
                <h1>{`Order Total : Rs ${totalPrice} /-`}</h1>
                <p>{`${cartList.length} items in cart`}</p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
