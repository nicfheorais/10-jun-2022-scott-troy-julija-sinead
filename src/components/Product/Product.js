import css from "./Product.module.css";

function Product() {
    return (
        <div className={css.product}>
            <img
                src="http://via.placeholder.com/640x360"
                alt="ProductImage"
                className={css.productImage}
            />
            <h3 className={css.headline}>HEADLINE</h3>
            <p className={css.productDescription}>PRODUCT DESCRIPTION</p>
            <div className={css.categoryPrice}>
                <p className={css.category}>CATEGORY</p>
                <p className={css.price}>PRICE</p>
            </div>
        </div>
    );
}

export default Product;
