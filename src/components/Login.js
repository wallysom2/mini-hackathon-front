import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default () => {
    const [user, setUser] = useState(localStorage.getItem("user"))
    const navigate = useNavigate()

    const submitForm = event => {
        localStorage.setItem("user", user)
        navigate('/questions')
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

    div {
        height: 200px;
        width: 300px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px
    }

    input, button {
        height: 40px;
    }
`