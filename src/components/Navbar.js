import React , {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click , setClick] = useState(false);
    
    const handleClick = () => setClick(true);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className="fa fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? 'fa fa-times': 'fa fa-bars'} />
                    </div>
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/servuces' className='nav-links' onClick={closeMobileMenu} >Servuces</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu} >Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mpbile' onClick={closeMobileMenu} >Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
