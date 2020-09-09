import React from "react";
import "./styles/style.css";
import {Link} from "react-router-dom";  

function Footer() {
    return(
        <footer>
            <Link to="/kontakt"><span className="contact">Kontakt</span></Link>
            <p>Vytvořil: Petr Kudrnovský</p>
        </footer>
    )
};

export default Footer;