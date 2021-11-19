import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component {
    render () {
        console.log(this.props.cart);
        console.log(this.props.price);
        
        return (
            <div>
                <h2>Cart</h2>
                <div>
                 <li> item Name:</li>
                </div>
                <h3>Subtotal: {formatPrice(this.props.price)}</h3>
                <h3>Tax: {formatPrice(this.props.price*0.05)} </h3>
                <h3>Total: {formatPrice(this.props.price +this.props.price*0.05)} </h3>
            </div>
        )
    }
}
export default Cart;
