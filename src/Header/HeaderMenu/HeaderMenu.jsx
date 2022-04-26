import React from 'react';
import './HeaderMenu.css';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <nav className='HeaderMenu'>
            <div className='item'>
                <NavLink to='/Offer'>Акції</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/sushi-go-project' className='activeLink'>Роли</NavLink>
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
            <div className='item'>
                <a href="">Інформація</a>
            </div>
        </nav>
        
    )
}

export default HeaderMenu;