import React from 'react'
import logo from '../../assets/logos/logo.svg'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo-container'>
                <img src={logo} alt="logo"/>
            </div>    
            <div className='navigation-container'>
                <ul className='navigation-list'>
                    <li>Accueil</li>
                    <li>Mon parcours</li>
                    <li>Mon engagement</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='bottom-container'>
                <ul className='navigation-bottom-list'>
                    <li>mentions légales</li>
                    <li>|</li>
                    <li>A propos</li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar