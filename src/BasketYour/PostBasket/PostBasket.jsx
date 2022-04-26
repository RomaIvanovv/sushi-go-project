import React, {useState} from 'react';
import './PostBasket.css';

const PostBasket = (props) => {

    const [count, setCount] = useState(1)
    const [zero, setZero] = useState(0)

    const plus = () => {
        setCount(() => count + 1);
        if (count > 1) {
            setZero(() => zero + 10);
        }
    }

    const minus = () => {
        if (count > 1) {
        setCount(() => count - 1);
        }
    }


    return (
        <div className='postBasket'>
            <div className='width40'>
                <img src={props.imgBasket}/>
                <h6>
                    {props.titleBasket}
                </h6>
            </div>
            <div className='width30'>
                <div>
                    <span onClick={minus}>-</span>
                    <input type="number" name='inputCount' value={count} />
                    <span onClick={plus}>+</span>
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