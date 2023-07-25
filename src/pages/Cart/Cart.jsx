import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';
import './Cart.css';
import { PRODUCTS } from '../../products';
import CartItem from './CartItem';

import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h3>Your Cart is Empty</h3>
      )}
    </div>
  );
};
export default Cart;
