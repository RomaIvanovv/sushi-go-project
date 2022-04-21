import React, {useState} from 'react';
import './Basket.css';
import { FaCartArrowDown } from 'react-icons/fa';


const Basket = (props) => {

    const [zero] = useState(0);

    const basketPrice = zero + JSON.parse(localStorage.getItem('price'))

    console.log(JSON.parse(localStorage.getItem('price')));

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