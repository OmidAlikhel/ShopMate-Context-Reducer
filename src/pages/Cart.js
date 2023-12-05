import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useCart } from "../context/CartContext";

import "../App.css";

export const Cart = () => {
  const { total, cartList } = useCart();
  useTitle("cart");

  return (
    <main>
      <section className="Cart">
        <h2 className="title-cartCard">
          Cart Items:{cartList.length} ${total}
        </h2>
        {cartList.map((product) => (
          <CartCard product={product} key={product.key} />
        ))}
      </section>
    </main>
  );
};
