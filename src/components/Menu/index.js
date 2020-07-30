import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../Assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../../components/components/ButtonLink';
function Menu () {
    return (
        <nav  className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt ="DevsFlixLogo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>

        </nav>
    );
}

export default Menu;