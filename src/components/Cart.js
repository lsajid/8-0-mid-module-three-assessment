import { Component } from "react";

class Cart extends Component {
    constructor(){
        super();
    }
    render () {

        return (
            <div>
                <h2>Cart</h2>
                <div>
                 <li> item Name: $Price</li>
                </div>
                <h3>Subtotal: $</h3>
                <h3>Tax: $ </h3>
                <h3>Total: $ </h3>
            </div>
        )
    }
}
export default Cart;
