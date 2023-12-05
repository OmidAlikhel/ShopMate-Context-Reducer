import "./CartCard.css";
import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { name, price, image } = product;
  return (
    <div className="cartcard">
      <img src={image} alt="headphone" />
      <p className="productname">{name}</p>
      <span className="productprice">${price}</span>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};
