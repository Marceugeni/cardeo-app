import Header from './components/Header'
import Card from './components/Card'
import Modal from './components/Modal'

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


function App() {


  return (
    <Container>
      <Header />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
      
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



export default App;
