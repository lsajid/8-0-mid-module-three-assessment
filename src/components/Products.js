import { Component } from "react";
import ProductCard from "./ProductCard";


class Products extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    
    render () {
        let allProducts = this.props.productData.map((product, index)=> <ProductCard key={product.name+index} product={product} handleAddToCart={()=>this.props.handleAddToCart(product)}/>)
        return (
            <div id="product-container">
                 <h2>My Garage Sale</h2>
               <div className="products">
                   {allProducts}
               </div>
            </div>
        )
    }
}
export default Products;