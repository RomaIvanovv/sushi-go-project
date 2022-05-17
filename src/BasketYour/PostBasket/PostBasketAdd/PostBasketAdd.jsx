import React, {useContext} from 'react';
import '../PostBasket.css';
import {Context} from '../../../Context/Context'

const PostBasketAdd = ({img, title, count, price, id}) => {

    const {removeTodo} = useContext(Context)
    const cls = ['postBasket'];

    return (
        <div className={cls.join(' ')}>
            <div className='width40'>
                <img src={img} alt=''/>
                <h6>
                    {title}
                </h6>
            </div>
            <div className='width35'>
                <div>
                    <span>-</span>
                    <input type="number" name='inputCount' value={count} />
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
            <button className='remove' onClick={() => removeTodo(id)}>x</button>
        </div>
    )
}

export default PostBasketAdd;