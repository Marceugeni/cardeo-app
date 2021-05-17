import { useEffect, useState } from 'react'

import axios from 'axios'

import Cards from './components/Cards'
import Modal from './components/Modal'

import styled from 'styled-components'



function App() {

  const [openModal, setOpenModal] = useState(false)
  const [cards, setCards] = useState([])
  
  
  
  useEffect(() => {
    const fetchCards = async () => {
      const result = await axios.get('https://tiendeo-frontend-cards-api.herokuapp.com/cards', {
        headers: {
          "accept": "application/json",
          "Authorization": "Bearer b53f3e02-0dba-40c3-82c4-97e0c049f80a"
        }
      })
      /* console.log(result.data) */
      setCards(result.data)
      
    }
    fetchCards()
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
              <Cards  cards={cards} 
                      />
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