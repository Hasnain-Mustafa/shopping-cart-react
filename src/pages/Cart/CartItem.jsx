import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContextProvider';

const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } =
    useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
