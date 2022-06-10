import css from "./Nav.module.css";

function Nav() {
    return (
        <div className={css.nav}>
            <p>HOME</p>
            <p>SHOP</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
        </div>
    );
}

export default Nav;
