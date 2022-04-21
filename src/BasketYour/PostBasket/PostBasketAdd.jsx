import React, {useState} from 'react';
import './PostBasket.css';

const PostBasketAdd = (props) => {

    const [count] = useState(1)
    const [zero] = useState(0)

    const img = JSON.parse(localStorage.getItem('img'))
    const title = JSON.parse(localStorage.getItem('title'))
    const total = JSON.parse(localStorage.getItem('total'))
    const price = JSON.parse(localStorage.getItem('price'))
    

    return (
        <div>
            <div className='width40'>
                <img src={img}/>
                <h6>
                    {title}
                </h6>
            </div>
            <div className='width30'>
                <div>
                    <span>-</span>
                    <input type="text" name='inputCount' value={total} />
                    <span>+</span>
                </div>
                <div>
                    <p className='red'>
                        {price}
                    </p>
                    <p>
                        грн
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostBasketAdd;