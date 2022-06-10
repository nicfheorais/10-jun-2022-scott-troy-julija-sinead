import css from "./Product.module.css";

function Product({product}) {
    return (
        <div className={css.product}>
            <img
                src={product.image}
                alt="ProductImage"
                className={css.productImage}
            />
            <h3 className={css.headline}>{product.title}</h3>
            <p className={css.productDescription}>{product.description}</p>
            <div className={css.categoryPrice}>
                <p className={css.category}>{product.category}</p>
                <p className={css.price}>{product.price}</p>

            </div>
        </div>
    );
}

export default Product;
