import React from 'react';
import Logo from '../../Assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../../components/components/ButtonLink';
function Menu () {
    return (
        <nav  className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt ="DevsFlixLogo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Props children
            </Button>

        </nav>
    );
}

export default Menu;