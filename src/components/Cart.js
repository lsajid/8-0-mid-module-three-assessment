import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component {
    render () {
        console.log(this.props.cart);
        console.log(this.props.price);
        let allUnorderedLists = this.props.cart.map((item, index)=> {
            return (
                <ul>
                    <li> {item.name}: {formatPrice(item.price)}</li>
                </ul>
            )
        })
        return (
            <div>
                <h2>Cart</h2>
                <div>
                 {allUnorderedLists}
                </div>
                <h3>Subtotal: {formatPrice(this.props.price)}</h3>
                <h3>Tax: {formatPrice(this.props.price*0.05)} </h3>
                <h3>Total: {formatPrice(this.props.price +this.props.price*0.05)} </h3>
            </div>
        )
    }
}
export default Cart;
