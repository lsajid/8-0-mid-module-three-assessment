import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class ProductCard extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <div className=".products">
                    <div> <strong> {this.props.product.name}</strong> </div>
                    <div>Price: {formatPrice(this.props.product.price)} </div>
                    
                    <button type="submit" onClick={()=>this.props.handleAddToCart(this.props.product)}>Add To Cart</button>

                    <div>
                      <img src={this.props.product.img}/>
                    </div>

                    <br/>
                    
                    <div>Description: {this.props.product.description} </div>
                    <br/> <br/>
     
            </div>
        )
    }
}
export default ProductCard;