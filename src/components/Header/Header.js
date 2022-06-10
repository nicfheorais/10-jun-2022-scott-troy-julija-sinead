import css from "./Header.module.css";
import Nav from "../Nav/Nav.js";

function Header() {
    return (
        <div className={css.header}>
            <h1>Fashion Guru</h1>
            <Nav />
        </div>
    );
}

export default Header;
