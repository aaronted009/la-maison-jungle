import "../style/Cart.css";

function Cart() {
  const Monstera = { name: "Monstera", price: 8 };
  const Lierre = { name: "Lierre", price: 10 };
  const Bouquet = { name: "Bouquet", price: 15 };
  return (
    <div className="lmj-cart">
      <ul>
        <li>
          {Monstera.name} : {Monstera.price}€
        </li>
        <li>
          {Lierre.name} : {Lierre.price}€
        </li>
        <li>
          {Bouquet.name} : {Bouquet.price}€
        </li>
      </ul>
      <div>Total : {Monstera.price + Lierre.price + Bouquet.price}€ </div>
    </div>
  );
}

export default Cart;