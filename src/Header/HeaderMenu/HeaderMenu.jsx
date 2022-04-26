import React, { useState } from 'react';
import './HeaderMenu.css';
import { NavLink } from 'react-router-dom';
import Info from '../Info/Info';

const HeaderMenu = () => {
    const [isShown, setIsShown] = useState(false)
    
    return (
        <nav className='HeaderMenu'>
            <div className='item'>
                <NavLink to='/Offer'>Акції</NavLink>
            </div>
            <div className='item'>
                <NavLink to='' className='activeLink'>Роли</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/HotRoles'>Гарячі роли</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/Philadelphia'>Філадельфія</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/Sets'>Сети</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/Drinks'>Напої</NavLink>
            </div>
            <div className='item infoHover' 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
                <a href="">Інформація</a>
                {isShown && (
                    <Info />
                )}
                
            </div>
        </nav>
        
    )
}

export default HeaderMenu;