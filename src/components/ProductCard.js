import { Component } from "react";

class ProductCard extends Component {
    constructor(){
        super();
    }
    render () {
        return (
            <div className="products">
                <div> <strong> {this.props.product.name}</strong> </div>
                <div>Price: {this.props.product.price} </div>
                <button> Add to Cart </button>
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