import css from "./ProductsGroup.module.css";
import Product from "../Product/Product.js";

function ProductsGroup({products}) {
    // TODO: Change the Products to a map through all of the data
    return (
        <div className={css.productsGroup}>
            <div className={css.productsCards}>
                {products.map(product => {
                    return <Product key={product.id} product={product} />
                })}
            </div>
        </div>
    );
}

export default ProductsGroup;
