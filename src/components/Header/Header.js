import css from "./Header.module.css";
import Nav from "../Nav/Nav.js";

function Header() {
    return (
        <div className={css.header}>
            <Nav />
            <p>Add Header here</p>
        </div>
    );
}

export default Header;
