import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className="header">
            <a href="#" className="header__brand">Galleria</a>
            <nav className="header__navbar">
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#">Fotos</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <nav className="header__social-media">
                <ul>
                    <li>
                        <a href="#">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;