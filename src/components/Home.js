import styled from 'styled-components';
import Parternon from './../assets/img/parthenon-svgrepo-com.svg'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container>
            <Header>
                <Logo>
                    <h1>Athens</h1>
                    <img src={Parternon} alt="logo"></img>
                </Logo>
                <Div>
                    <Link to={`/questions`}><p>Perguntas</p></Link>
                    <Link to={`/login`}><p>Faça uma pergunta</p></Link>
                </Div>
            </Header>
            <Background>
                <Div2>
                    <h2>“Defenda seu direito de pensar, porque até pensar errado é melhor do que não pensar.”</h2>
                    <p>Hipátia de Alexandria</p>
                </Div2>
                <img src={Parternon} alt="logo"></img>
            </Background>
            <Footer>
            </Footer>
        </Container>
    )
}

export default Home;

const Header = styled.header`
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

const Logo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 180px;

h1 {
    font-family: 'Righteous', cursive;
    font-size: 30px;
    letter-spacing: 0.2em;
}

img {
    height: 30px;
}
`

const Div = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 400px;
`

const Div2 = styled.div`
h2 {
    font-family: 'Righteous', cursive;
    font-size: 30px;
    letter-spacing: 0.2em;
    width: 600px;
  }

p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weigth: 700;
    letter-spacing: 0.2em;
    margin-top: 15px;
}
`

const Background = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 700px;
marggin-top: 0px;
padding-left: 100px;
padding-right: 100px;

img {
    height: 600px;
}
`

const Footer = styled.footer`
position: absolute;
bottom: 0px;
right: 0px;
left: 0px;
width: 100%;
img {
    width: 100%;
}
`

const Container = styled.div`
position: fixed;
top: 0px;
left: 0px;
right: 0px;
bottom: 0px;
width: 100%;
height: 100%;
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