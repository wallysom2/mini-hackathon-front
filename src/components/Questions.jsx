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
        <Conteiner>
            <h1>Questions</h1>
            <div>
                {Questions.map((question) => {
                    return (
                        <p>
                            <Link to={`/questions/${question.id}`}>{question.question}</Link>
                        </p>
                    )
                } 
                )}

            </div>
        </Conteiner>
        
    )
}


const Conteiner = styled.div`
height: 60px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 30px;
padding-right: 30px;

p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weigth: 700;
    letter-spacing: 0.2em;
}

`

const Pergunta = styled.div`

}
`