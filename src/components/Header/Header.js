import css from "./Header.module.css";
import Nav from "../Nav/Nav.js";

import logo from "../../../src/images/FashionGuruLogo.svg";

function Header() {
    return (
        <div className={css.header}>
            <div class={css.logo}>
                <a
                    href="https://github.com/nicfheorais/10-jun-2022-scott-troy-julija-sinead/commits/main"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={logo}
                        className={css.image}
                        alt="Fashion Guru logo"
                    />
                </a>
            </div>
            <Nav />
        </div>
    );
}

export default Header;
