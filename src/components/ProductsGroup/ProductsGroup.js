import css from "./ProductsGroup.module.css";
import Product from "../Product/Product.js";

function ProductsGroup() {
    // TODO: Change the Products to a map through all of the data
    return (
        <div className={css.productsGroup}>
            <p>Add ProductsGroup here</p>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default ProductsGroup;
