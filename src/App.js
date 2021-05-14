import { useState } from 'react'

import Card from './components/Card'
import Modal from './components/Modal'

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'



function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState([
    {id: "1", title: "Triumph Bonneville", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour", imageUrl: "https://www.soymotero.net/sites/default/files/styles/max_width_1200px/public/2015-11/bo1..jpg?itok=8xoB2Akk" },
    {id: "2", title: "BSA A65 Thunderbolt", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/BSA_A65_650_twin.jpg/1280px-BSA_A65_650_twin.jpg" },
    {id: "3", title: "Norton 16H 500", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour", imageUrl: "https://www.yesterdays.nl/site/wp-content/uploads/2017/04/Norton-1944-16H-1.jpg" },

  ])
  return (
    <Container>

      <HeaderContainer>
            <LogoWrapper>
                <Logotype>Cardeo</Logotype>
                <Logomotto>'A cards app for Tiendeo'</Logomotto>
            </LogoWrapper>
            <Button onClick={() => setOpenModal(true)}>Add Card</Button>
      </HeaderContainer>
    
      <CardContainer>
        <Card cards={cards} />
      </CardContainer>

      <Modal open={openModal} close={() => setOpenModal(false)} />

    </Container>
  );
}

const globalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
`

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
`
const CardContainer = styled.div`
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;

`
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
    cursor: pointer;
`


export default App;
