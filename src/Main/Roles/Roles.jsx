import React from 'react';
import Post from '../Post/Post';
import './Roles.css'

const Roles = (props) => {

    let postsElements = props.dada.rolesPage.map( p => <Post 
        weight={p.weight} 
        gr={p.gr}
        img={p.img} 
        title={p.title} 
        composition={p.composition} 
        price={p.price}/>)

    return (
        <div className='roles'>
            <h1>Роли</h1>
            <div className='postsFlex'>
                {postsElements}
            </div>
        </div>
    )
}


export default Roles;