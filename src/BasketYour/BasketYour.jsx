import React, {useEffect, useState} from 'react';
import PostBasket from './PostBasket/PostBasket';
import './BasketYour.css';
import PostBasketAddElements from './PostBasket/PostBasketAdd/PostBasketAddElements';
import {Context} from '../Context/Context'


const BasketYour = (props) => {

    let postsBasketElements = props.dada.postBasket.map( p => <PostBasket 
        imgBasket={p.img} 
        titleBasket={p.title} 
    />)

    const [others, setOther] = useState(JSON.parse(localStorage.getItem("others")));

    useEffect(() => {
        localStorage.setItem('others', JSON.stringify(others))
      }, [others])

    const removeTodo = id => {
        setOther(others.filter( postBasket => {
          return postBasket.id !== id
        }))
    }

    const totalPriceBasket = others.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

    return (
        <Context.Provider value={{
            removeTodo
          }}>
        <div className='basketYour'>
            <h2>Ваше замовлення</h2>
            <div className='formDisplay'>
                <form name='form1'>
                    <h5>Спосіб доставки</h5>
                    <form name='rd1'>
                        <input type="radio" name="rd1" id="rd1" checked/>
                        <label htmlFor="rd1">Доставка</label>
                        <input type="radio" name="rd1" id="rd2" />
                        <label htmlFor="rd2">Самовивіз</label>
                        <input type="radio" name="rd1" id="rd3" />
                        <label htmlFor="rd3">Заздалегідь</label>
                    </form>
                    <input type="text" name="name" placeholder='Ваше ім`я*'/>
                    <input type="number" name="phone" placeholder='Телефон*'/>
                    <select name="city" >
                        <option value="lviv">Львів</option>
                        <option value="bruhovichi">Брюховичі</option>
                        <option value="zubra">Зубра</option>
                        <option value="vunuki">Винники</option>
                    </select>
                    <div className='streetHouse'>
                        <input type="text" name="street" placeholder='Вулиця*'/>
                        <input type="number" name="numberHouse" placeholder='№ будинку*'/>
                    </div>
                    <input type="text" name="commentOrder" id='h80' placeholder='Коментар до замовлення'/>
                    <div className='floorFlat'>
                        <input type="number" name="entrance" id='w20' placeholder='Під`їзд'/>
                        <input type="number" name="floor" id='w20' placeholder='Поверх'/>
                        <input type="number" name="flat" id='w20'  placeholder='Кв.\ офіс'/>
                        <input type="number" name="intercom" id='w20' placeholder='Домофон'/>
                    </div>
                    <input type="text" name="commentAddress" id='h80' placeholder='Коментар до адреси'/>
                </form>

                <div className='otherMain'>
                    <div className='otherFlex'>
                        <p>Товар</p>
                        <div>
                            <p>К-ть</p>
                            <p>Ціна</p>
                        </div>
                    </div>

                    <div className='product'>
                        <PostBasketAddElements others={others} />
                        {postsBasketElements}
                    </div>
                    <form name='form2'>
                        <h5>Спосіб оплати</h5>
                        <form name='rd2'>
                            <input type="radio" name="rd1" id="rd1" checked/>
                            <label htmlFor="rd1">Готівка</label>
                            <input type="radio" name="rd1" id="rd2" />
                            <label htmlFor="rd2">Онлайн</label>
                            <input type="radio" name="rd1" id="rd3" />
                            <label htmlFor="rd3">Карткою кур'єру</label>
                        </form>
                        <p>Підготувати решту з</p>
                        <input type="text" name="restMoney" placeholder='xxxx'/>
                        <h5>Додаткова інформація</h5>
                        <input type="checkbox" name="ch1" id="ch1" />
                        <label htmlFor="ch1" className='callMe'>Зателефонуйте мені для уточнення деталей</label>
                        <div className='total'>
                            Разом: {totalPriceBasket} грн
                        </div>
                        <div className='btnOther'>
                            <input type="button" name='button' value="Готово" />
                        </div>
                    </form>

                </div>
            </div>

        </div>
        </Context.Provider>
    )
}


export default BasketYour;