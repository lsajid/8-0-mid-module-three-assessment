import { Component } from "react";

class ProductCard extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return (
            <div className="products">

                
                    <div> <strong> {this.props.product.name}</strong> </div>
                    <div>Price: {this.props.product.price} </div>
                    <button onClick={()=>this.props.handleAddToCart(this.props.product)}> Add to Cart </button>

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