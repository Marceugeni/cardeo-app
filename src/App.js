import { useEffect, useState } from 'react'

import CardList from './components/CardList'
import Modal from './components/Modal'

import styled from 'styled-components'


function App() {

  const [openModal, setOpenModal] = useState(false)
  const [cards, setCards] = useState(null)
  
  
  useEffect(() => {
    fetch('http://localhost:8000/cards')
    .then(res => {
      return res.json()
    })
    .then(data => {
      
      setCards(data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])


/*   const handleDelete = (id) => {
    const currentCards = cards.filter(card => card.id !== id)
    setCards(currentCards)
  }; */
  
  
  return (
    
      <Container>
        <HeaderContainer>
              <LogoWrapper>
                  <Logotype>Moteo</Logotype>
                  <Logomotto>'A cards app for Tiendeo'</Logomotto>
              </LogoWrapper>
              <Button onClick={() => setOpenModal(true)}>Add Card</Button>
        </HeaderContainer>
        
          
            <CardContainer>
              { cards && <CardList  cards={cards} /> } 
            </CardContainer>
          
        
        <Modal openModal={openModal} close={() => setOpenModal(false)} />
      </Container> 
   
  );
}

/* STYLES! */
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
    padding: 5px 20px 5px 20px;
    cursor: pointer;
`
export default App;