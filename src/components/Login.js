import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default () => {
    const [user, setUser] = useState(localStorage.getItem("user"))
    const navigate = useNavigate()

    const submitForm = event => {
        localStorage.setItem("user", user)
        navigate('/add-question')
        event.preventDefault()
    }

    return <Container>
        <div>
            <h1>Por favor, insira seu nome para ser identificado nas perguntas</h1>
            <form onSubmit={submitForm}>
                <input type="text" onChange={(event) => {
                    setUser(event.target.value)
                }}/>
                <button type="submit" disabled={!user || user.length === 0}>
                    Começar!
                </button>
            </form>
        </div>
    </Container>
}

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

    div {
        height: 220px;
        width: 300px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    h1 {
        font-family: 'Righteous', cursive;
        font-size: 25px;
        letter-spacing: 0.2em;
        width: 300px;
      }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px
    }

    input, button {
        height: 40px;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weigth: 400;
        letter-spacing: 0.2em;
    }

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