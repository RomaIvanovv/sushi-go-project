import React, {useState, useEffect} from 'react';
import './Post.css'


const Post = (props) => {
    const [count, setCount] = useState(1);
    // const [prices, setPrice] = useState([]);

    useEffect(() => {
    }, [count])

    const totalPrice = count * props.price;

    const plus = () => {
        setCount(() => count + 1);
    }

    const minus = () => {
        if (count > 1) {
        setCount(() => count - 1);
        }
    }

    const addPrice = () => {
        let price = totalPrice;
        localStorage.setItem('price', [price])

        // let img = props.img;
        // localStorage.setItem('img', [img])

        // let titles = props.title;
        // localStorage.setItem('title', [titles])

        // localStorage.setItem('total', [count])
        // let addsPrice = [...prices];
        // addsPrice.push(price, title, img, count)
        // setPrice(addsPrice)
    }
    // console.log(JSON.parse(localStorage.getItem('title')));

    

    return (
              <div className='post'>
                <div>
                    <p>{props.weight} {props.gr}{props.l}</p>
                    {/* <ol>{prices.map((item, i) => <li key={item + i}>{item}</li>)}</ol> */}
                    <img src={props.img}/>
                </div>
                    <h2>
                        {props.title}
                    </h2>
                <div>
                    <span>
                        {props.composition}
                    </span>
                </div>
                <br />
                <hr />
                <br />
                <form>
                    <div className='price'>{totalPrice} грн</div>
                        <div className='countLessMore'>
                            <span className='less' onClick={minus}>-</span>
                            <input type="number" value={count}/>
                            <span className='more' onClick={plus}>+</span>
                        </div>
                    <button onClick={addPrice}>Замовити</button>
                </form>
            </div>
    )
}


export default Post;