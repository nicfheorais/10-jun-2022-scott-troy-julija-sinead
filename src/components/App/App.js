import React from "react";
import { useState, useEffect } from "react";

import css from "./App.module.css";
import Header from "../Header/Header.js";
import ProductsGroup from "../ProductsGroup/ProductsGroup.js";
import Footer from "../Footer/Footer.js";

const API_URL = `https://fakestoreapi.com/products`;

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function FetchData() {
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setProducts(data);
        }
        FetchData();
    }, []);

    return (
        <div className={css.app}>
            <Header />
            <ProductsGroup products={products} />
            <Footer />
        </div>
    );
}

export default App;
