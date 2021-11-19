import { Component } from "react";

class ProductCard extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div className="productCard">
                <div> Name: {this.props.product.name} </div>
                <div>Price: {this.props.product.price} </div>
                <button> Add to Cart </button>
                <img src={this.props.product.img}/>
                <div>Description: {this.props.product.description} </div>
                <br/> <br/>
            </div>
        )
    }
}
export default ProductCard;