import React, {useState} from 'react';
import './PostBasket.css';
import PostBasketAdd from './PostBasketAdd';

const PostBasket = (props) => {

    const [count] = useState(1)
    const [zero] = useState(0)


    return (
        <div className='postBasket'>
            {/* <PostBasketAdd /> */}
            {/* {props.prices} */}
            <div className='width40'>
                <img src={props.imgBasket}/>
                <h6>
                    {props.titleBasket}
                </h6>
            </div>
            <div className='width30'>
                <div>
                    <span>-</span>
                    <input type="text" name='inputCount' value={count} />
                    <span>+</span>
                </div>
                <div>
                    <p className='red'>
                        {zero}
                    </p>
                    <p>
                        грн
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostBasket;