import React, {useState, useEffect} from 'react';
import './Post.css'


const Post = (props) => {
    const [count, setCount] = useState(1);
    const [others, setOther] = useState(JSON.parse(localStorage.getItem("others")));

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

    useEffect(() => {
        let otherItems = localStorage.getItem('others');
        setOther( JSON.parse(otherItems) || [] )
    }, [])

    useEffect(() => {
        localStorage.setItem('others', JSON.stringify(others))
    }, [others])  

    const addOther = () => {
        let price = totalPrice;
        let img = props.img;
        let title = props.title;

        setOther([
            ...others,
            {
              id: Date.now(),
              title: title,
              img: img,
              price: price,
              count: count,
              completed: false
            }
          ])
    }

    return (
              <div className='post'>
                <div>
                    <p>{props.weight} {props.gr}{props.l}</p>
                    <img src={props.img} alt=''/>
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
                    <button onClick={addOther} others={others}>Замовити</button>
                </form>
            </div>
    )
}


export default Post;