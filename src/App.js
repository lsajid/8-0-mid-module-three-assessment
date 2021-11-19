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
      prod: productData,
      cart: [],
      form: {
        firstName:"",
        lastName: "",
        email: "",
        creditCard: "",
        zipCode: "",
      },
      name: "",
      price: 0,
      uniqueID: 0,
    }
  }

  handleAddToCart = (a) => {
    //update lists array in state
 
    // this.setState({
    //   cart: [...this.state.cart, {name: this.state.name, price: this.state.price, id: this.state.uniqueID, display: true }],
    //   uniqueID: this.state.uniqueID + 1,
    //   price: this.state.price + price,
    // })
    this.setState({
      price: this.state.price + a.price,
      cart : [...this.state.cart, a]
    })

  }

  handleFormInput = (event) => {
    this.setState({
      form:{...this.state.form, [event.target.name]: event.target.value,}
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    if(this.state.form.firstName === "" || this.state.form.lastName === "" || this.state.form.email === "" || this.state.form.creditCard === "" || this.state.form.zipCode === ""){
      alert(`Input is not valid`)
    }
    else if (this.state.form.creditCard.length !== 16) {
      alert(`Credit card number is not valid`)
    } 
    else if(this.state.form.zipCode.length !== 5) {
      alert(`Zip Code is not valid`)
    } else {
      alert(`Purchase complete will be $total `)
    }
  }



 render() {
  return (
    <div className="wrapper">
      <Products productData={this.state.prod} handleInput={this.handleInput} handleAddToCart={this.handleAddToCart}/>
      <Cart handleAddToCart={this.handleAddToCart} cart={this.state.cart} />
      <CheckOutForm handleFormInput={this.handleFormInput} handleFormSubmit={this.handleFormSubmit}/>
    </div>
  )
 }
}

export default App;
