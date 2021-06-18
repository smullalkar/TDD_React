import React from 'react'
import './styles.scss'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <header>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt='shabaz'></img>
                </div>
            </div>
        </header>
    )
}
