import css from "./App.module.css";
import Header from "../Header/Header.js";
import ProductsGroup from "../ProductsGroup/ProductsGroup.js";
import Footer from "../Footer/Footer.js";

function App() {
    return (
        <div className={css.app}>
            {/* <Header /> */}
            <ProductsGroup />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
