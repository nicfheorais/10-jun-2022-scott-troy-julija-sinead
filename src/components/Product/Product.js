import css from "./Product.module.css";

function Product({ product }) {
    console.log(product);
    let title = product.title;
    let image = product.image;
    let description = product.description;
    let category = product.category;
    let price = product.price;

    return (
        <div className={css.product} testid="product">
            <img src={image} alt="ProductImage" className={css.productImage} />
            <h3 className={css.headline}>{title}</h3>
            <p className={css.productDescription}>{description}</p>
            <div className={css.categoryPrice}>
                <p className={css.category}>{category}</p>
                <p className={css.price}>{price}</p>
            </div>
        </div>
    );
}

export default Product;
