import React, {useState} from 'react';
import Question from './Question/Question';
import './Questions.css'

const Questions = (props) => {

    let questions = props.questions.map((p) => <Question 
    title={p.title}
    text={p.text} />)

    return (
        <div className='questions'>
            <h1>Найпоширеніші запитання</h1>
            {questions}
        </div>
    )
}


export default Questions;