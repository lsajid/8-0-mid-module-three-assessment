import "./App.css";
import { Component } from "react";
import CheckOutForm from "./components/CheckOutForm";
import Products from "./components/Products";
import Cart from "./components/Cart";
import productData from "./data/productData";

class App extends Component {
  constructor(){
    super();
    this.state = {
      prod: productData
    }
  }


 render() {
   console.log(this.state.prod)
  return (
    <div className="wrapper">
      <Products/>
      <Cart/>
      <CheckOutForm/>
    </div>
  )
 }
}

export default App;
