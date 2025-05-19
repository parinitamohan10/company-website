import React, {useState,useEffect} from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    //Mobile Menu State
    const[sidenav, setSidenav] = useState(false);

    //Desktop Fixed Menu
    const[sticky, setSticky] = useState(false);

    //Menu Icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />

    //SideNavbar
    const sideNavShow = () => {
        setSidenav(!sidenav);
    }
    //Scroll Fixed Navbar
    useEffect(() => {
        const handleScroll = () =>{
            setSticky(window.scrollY > 20); //page scrolled down more than 20px, setSticky(true)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

  return (
    <>
    <header id ="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className='container'>
            <nav className="navbar" id ="Navbar">
                <div className="navbar_brand">
                    <a href='/'>
                        <img src ={Logo} alt ="logo"/>
                    </a>
                </div>
                <div className='navbar-toggle' onClick={sideNavShow}>
                    {menuIcon}
                </div>
                <div className={`menu-items ${sidenav == true ? 'active' : ''}`}>
                    <ul>
                        <li>
                        <Link activeClass ="active" to="home" spy ={true} smooth={true}>
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to="about" spy ={true} smooth={true}>
                            About Us
                        </Link>
                        </li>
                        <li>
                        <Link to="services" spy ={true} smooth={true}>
                            Services
                        </Link>
                        </li>
                        <li>
                        <Link to="blog" spy ={true} smooth={true}>
                            Blog
                        </Link>
                        </li>
                        <li>
                        <Link to="contact" spy ={true} smooth={true}>
                            ContactUs
                        </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}
export default Navbar;