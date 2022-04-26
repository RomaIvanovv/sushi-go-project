import React from 'react';
import '../PostBasket.css';

const PostBasketAdd = (props) => {

    // const img = JSON.parse(localStorage.getItem('img'))
    // const titles = JSON.parse(localStorage.getItem('title'))
    // const total = JSON.parse(localStorage.getItem('total'))
    // const price = JSON.parse(localStorage.getItem('price'))

    // console.log(titles)
    

    return (
        <div>
            <div >
                {/* <img src={img}/> */}
                <h6>
                    {/* {props.titles} */}
                </h6>
            </div>
            <div>
                <div>
                    <span>-</span>
                    {/* <input type="text" name='inputCount' value={total} /> */}
                    <span>+</span>
                </div>
                <div>
                    <p >
                        {props.totalPrice}
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