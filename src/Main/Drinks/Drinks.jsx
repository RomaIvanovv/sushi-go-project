import React from 'react';
import '../Roles/Roles.css'
import Post from '../Post/Post';


const Drinks = (props) => {

    let postsElements = props.dada.drinksPage.map( p => <Post 
        weight={p.weight} 
        l={p.l} 
        img={p.img} 
        title={p.title} 
        composition={p.composition} 
        price={p.price}/>)

    return (
        <div className='roles'>
            <h1>Напої</h1>
            <div className='postsFlex'>
                {postsElements}
            </div>
        </div>
    )
}


export default Drinks;