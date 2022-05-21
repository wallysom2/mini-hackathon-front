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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    h1 { 
        font-family: 'Righteous', cursive;
        font-size: 30px;
        letter-spacing: 0.2em;
        margin-bottom: 20px;
    }

    p {
        margin: 25px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weigth: 700;
        letter-spacing: 0.2em;
        text-decoration: none;
    }
    
`;
