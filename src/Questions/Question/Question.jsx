import React, {useState} from 'react';
import './Question.css'

const Question = (props) => {
    const [show,setShow] = useState(false)

    return (
            <div className='questionsItem'>
                <div className='questionsTitle' onClick={() => setShow(!show)}>
                    <h4>
                      {props.title}
                    </h4>
                    <span>{show ? '-' : '+'}</span>
                </div>
                <div className={show ? 'questionsText show' : 'questionsText'}>
                    {props.text}
                </div>
            </div>
    )
}


export default Question;