import React from 'react';
import '../Roles/Roles.css'
import Post from '../Post/Post';

const Sets = (props) => {

    let postsElements = props.dada.SetsPage.map( p => <Post 
        weight={p.weight} 
        gr={p.gr}
        img={p.img} 
        title={p.title} 
        composition={p.composition} 
        price={p.price}/>)

    return (
        <div className='roles'>
            <h1>Сети</h1>
            <div className='postsFlex'>
                {postsElements}
            </div>
        </div>
    )
}


export default Sets;