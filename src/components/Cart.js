import { Component } from "react";
import CartUL from "./CartUL";

class Cart extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div>
                <h2>Cart</h2>
                    <CartUL/>
                    <p>Subtotal: $</p>
                    <p>Tax: $ </p>
                    <p>Total: $ </p>
            </div>
        )
    }
}
export default Cart;