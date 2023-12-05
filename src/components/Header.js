import { Link, NavLink } from "react-router-dom";
import Logo from "../asset/logo.png";
import "./Header.css";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo"></img>
        <span> Shoping Cart-CR</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
