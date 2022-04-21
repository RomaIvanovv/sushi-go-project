import React from 'react';
import '../Roles/Roles.css'
import Post from '../Post/Post';


const Philadelphia = (props) => {

    let postsElements = props.dada.PhiladelphiaPage.map( p => <Post 
        weight={p.weight} 
        gr={p.gr}
        img={p.img} 
        title={p.title} 
        composition={p.composition} 
        price={p.price}/>)

    return (
        <div className='roles'>
            <h1>Філадельфія</h1>
            <div className='postsFlex'>
                {postsElements}
            </div>
        </div>
    )
}


export default Philadelphia;