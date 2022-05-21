import axios from 'axios';
import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Questions() {
    const [Questions, setQuestions] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mini-hackathon-back.herokuapp.com/questions");
        promise.then((answer) => {
         setQuestions(answer.data)
        })
        promise.catch()
    }, []);

    return (
        <div>
            <h1>Questions</h1>
            <div>
                {Questions.map((question) => {
                    return (
                        <div>
                            <Link to={`/questions/${question.id}`}>{question.question}</Link>
                        </div>
                    )
                } 
                )}

            </div>
        </div>
        
    )
}


const Conteiner = styled.div`

`

const Pergunta = styled.div`

}
`