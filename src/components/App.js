import logo from "../images/logo.svg";
import "../style/App.css";
import Banner from "./Banner";
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Banner /> 
      {/* <Cart />  */}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
