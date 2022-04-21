import React from 'react';
import './Offer.css'
import offer1 from '../../Images/offer1.png'
import offer2 from '../../Images/offer2.png'
import offer3 from '../../Images/offer3.jpg'
import offer4 from '../../Images/offer4.png'

const Offer = () => {
    return (
        <div className='offer'>
            <h3>Акції</h3>
            <div className='offerCardAll'>
                <div className='offerCard'>
                    <img src={offer1} alt="" />
                    <button>Детальніше</button>
                </div>
                <div className='offerCard'>
                    <img src={offer2} alt="" />
                    <button>Детальніше</button>
                </div>
                <div className='offerCard'>
                    <img src={offer3} alt="" />
                    <button>Детальніше</button>
                </div>
                <div className='offerCard'>
                    <img src={offer4} alt="" />
                    <button>Детальніше</button>
                </div>
            </div>
        </div>
    )
}

export default Offer;