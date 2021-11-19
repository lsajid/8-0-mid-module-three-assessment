import { Component } from "react";
import ProductCard from "./ProductCard";


class Products extends Component {
    constructor(){
        super();
    }
    render () {
        let allProducts = this.props.productData.map((product, index)=> <ProductCard key={product.name+index} product={product} handleAddToCart={()=>this.props.handleAddToCart}/>)
        return (
            <div id="product-container">
                 <h2>My Garage Sale</h2>
               <div id="put-grid-here">
                   {allProducts}
               </div>
            </div>
        )
    }
}
export default Products;