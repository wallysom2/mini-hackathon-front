import styled from 'styled-components';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function AddQuestion() {
    let i;

    const [user, setUser] = useState({
        name: '',
        question: '',
        subject: '',
        date: ''
    });

    const navigate = useNavigate();

    function AdicionaSelect(){ 
        i = document.form.select.selectedIndex;
    }

    function Cadastrar() {
        setUser({...user, name: JSON.parse(localStorage.getItem("user")), subject: i, date: dayjs().format('DD/MM/YYYY')})
        const promisse = axios.post("https://mini-hackathon-back.herokuapp.com/question", user);
        promisse.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/questions");
        });
        promisse.catch(warning);
    }

    function warning() {
        alert('Não foi possível executar a ação');
    }
    
    return (
        <Container>
            <Form onSubmit={Cadastrar}>
                <input type="text" placeholder='Escreva sua pergunta aqui. (Tente ser o mais descritível possível)' onChange={e => setUser({ ...user, question: e.target.value })}></input>
                <select name="select" onChange={AdicionaSelect}>
                    {['Português', 'Matemática', 'História', 'Geografia', 'Ciências da natureza', 'Ciências sociais'].map(
                        e => <option value={e}>{e}</option>
                    )}
                </select>
                <button type='submit'>Faça sua pergunta</button>
            </Form>

        </Container>
    )
}

export default AddQuestion;

const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
font-size: 25px;
background: linear-gradient(45deg, #92B4EC, #FFFFFF, #FFE69A, #FFD24C);
background-size: 300% 300%;
animation: colors 15s ease infinite;

@keyframes colors {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 50% 100%;
    }

    100% {
        background-position: 0% 50%;
    }
}
`

const Form = styled.form`
width: 700px;


input {
    width: 680px;
    height: 400px;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 20px;
    margin-top: 6px;
    padding-left: 11px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weigth: 700;
    letter-spacing: 0.2em;
    color: #000000;
    display: flex;
    justify-content: start;
}
input::placeholder {
    color: #000000;
}

button {
    width: 300px;
    height: 45px;
    margin-top: 15px;
    margin-left: 15px;
    color: #FFFFFF;
    background: #92B4EC;
    border-radius: 20px;
    border: 1px solid #92B4EC;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
}

select {
    width: 300px;
    height: 45px;
    margin-top: 15px;
    margin-left: 30px;
    color: #FFFFFF;
    background: #92B4EC;
    border-radius: 20px;
    border: 1px solid #92B4EC;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
}
`