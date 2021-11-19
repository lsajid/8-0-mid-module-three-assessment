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
      selectedInput: "",
      newItem : {
        name:"",
        price:"",
      }, 
      form: {
        firstName:"",
        lastName: "",
        email: "",
        creditCard: "",
        zipCode: "",
      }
    }
  }

  handleAddToCart = (a) => {
    this.setState({
      cart:[...this.state.cart, a]
    })
  }

  handleFormSubmit = (event) => {
    //When I complete the form with valid input and click Buy Now, an alert tells me the purchase was successful.
    //Alert text should include: Purchase complete
    //When I complete the form with valid input and click Buy Now, an alert tells me the total amount I will be charged.
    //When I complete the form but a piece of data is missing, an alert tells me that my input is not valid.
      //Alert text should include: Input is not valid
    //When I complete the form but the zip code is not 5 digits long, an alert tells me 
      //Zip code is not valid
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

  handleFormInput = (event) => {
    this.setState({
      form:{...this.state.form, [event.target.name]: event.target.value,}
    })
  }

 render() {
   console.log(this.state.prod)
  return (
    <div className="wrapper">
      <Products productData={this.state.prod}/>
      <Cart />
      <CheckOutForm handleFormInput={this.handleFormInput} handleFormSubmit={this.handleFormSubmit}/>
    </div>
  )
 }
}

export default App;
