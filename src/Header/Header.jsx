import React from 'react';
import './Header.css'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import Basket from './Basket/Basket'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import delivery from '../Images/delivery.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='sushi_go'>
                <div>
                    <img src={delivery}/>
                </div>
                SUSHI-GO
            </div>
            <HeaderMenu />
            <NavLink to='/Basket'><Basket /></NavLink>
            <div className='ShopSingin'>
                <div><FaMapMarkerAlt /> Львів</div>
                <div>Увійти</div>
                <div>Мова</div>
            </div>
        </div>
    )
}

export default Header;