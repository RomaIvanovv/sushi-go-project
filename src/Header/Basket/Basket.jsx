import React, {useState} from 'react';
import './Basket.css';
import { FaCartArrowDown } from 'react-icons/fa';


const Basket = () => {

    const [zero] = useState(0);

    const others = JSON.parse(localStorage.getItem('others'))

    const totalPriceBasket = others.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

    const basketPrice = zero + totalPriceBasket
    
    return (
        <div className='basket'>
            <i><FaCartArrowDown /></i>
            <div>
                <div>{basketPrice}</div>
                <div>грн</div>
            </div>
        </div>
    )
}


export default Basket;