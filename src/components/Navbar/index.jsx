import styles from "./NavBar.module.scss"
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineCloseSquare} from "react-icons/ai";

import { Link } from 'react-router-dom';

import {useState} from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) =>!p);
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__content}>

                <div>
                    <Link to = "/" className={styles.link}>
                        <span className={styles.logo}>Price Probe</span>
                    </Link>

                </div>

                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {} }`}>

                        <a className={styles.nav__item} href = {"/about"}>
                            Store
                        </a>

                        <a className={styles.nav__item} href = {"/about"}>
                            About
                        </a>
                        <a className={styles.nav__item} href = {"/donate"}>
                            Support
                        </a>
                    </nav>
                </div>

                <div>
                    <button className={styles.navbar__toggler} onClick={menuToggler}>

                        {!menuOpen ? <BiMenuAltRight/> : <AiOutlineCloseSquare/>}

                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;