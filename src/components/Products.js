import { Component } from "react";
import ProductCard from "./ProductCard";


class Products extends Component {
    constructor(){
        super();
    }
    render () {
        let allProducts = this.props.productData.map((product, index)=> <ProductCard key={product.name+index} product={product}/>)
        return (
            <div> 
               {allProducts}
            </div>
        )
    }
}
export default Products;