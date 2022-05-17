import React from 'react'
import PostBasketAdd from './PostBasketAdd'

const PostBasketAddElements = ({others}) => {
    console.log(others)
    return (
        <div>
            {others.map( item => <PostBasketAdd key={item.id} {...item}/>)}
        </div>
    )
}

export default PostBasketAddElements