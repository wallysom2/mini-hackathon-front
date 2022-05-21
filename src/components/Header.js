import styled from 'styled-components';

function Header() {
    return (
        <Div>
            <img src="https://w7.pngwing.com/pngs/612/406/png-transparent-kathmandu-athens-nepali-language-greece-miscellaneous-logo-structure.png" alt="paternon"></img>
            <P>Faça uma pergunta</P>
        </Div>
    )
}

export default Header;

const Div = styled.header`
display: flex;
`

const P = styled.p`

`