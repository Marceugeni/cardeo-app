import logo from '../assets/cardeo-logo.png';

import styled from 'styled-components'


function Header() {
   
    
    return(
        <HeaderContainer>
            <LogoWrapper>
                <Logotype>Cardeo</Logotype>
                <Logomotto>'A cards app for Tiendeo'</Logomotto>
            </LogoWrapper>
            <Button>Add Card</Button>
            
        </HeaderContainer>
    );
 
}

const HeaderContainer = styled.div`
    margin-top: 50px;
    padding: 1em;
    display: flex;
    justify-content: space-evenly;
`
const LogoWrapper = styled.div` 

`

const Logotype = styled.h1`
    margin-top: 0;
    margin-bottom: 0;
`
const Logomotto = styled.h5`
    margin-top: 0;
    margin-bottom: 0;
`

const Button = styled.button`
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 4px;
    padding: 10px;
`

export default Header;