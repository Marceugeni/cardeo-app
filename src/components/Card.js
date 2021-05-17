import styled from 'styled-components'

const Card = ({ card }) => {
    
    /* console.log(card.id) */

        return(
        <>   
            <Wrapper>
                <CardContainer> 
                   { (card.imageUrl === "") ? <Img src={require("../assets/noImage.jpg").default}/> : <Img src={card.imageUrl}/> }  
                    <Title>{card.title}</Title>
                    <Description>{card.description}</Description>
                    <ButtonWrapper>
                        <Button /* onClick={handleDelete} */>Delete</Button>
                        <Button>Edit</Button>
                    </ButtonWrapper>
                </CardContainer>
            </Wrapper>
            
        </>
        
    );
}

const Wrapper = styled.div`
    padding: 1em;
`
const CardContainer = styled.div`
    background-color: transparent;
    max-width: 350px;
    border-radius: 20px 20px 20px 20px;
    padding-bottom: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Img = styled.img`
    height: 320px;
    width: 350px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`
const Title = styled.h1`
    font-size: 1.5em;
    padding-left: 20px;  
`
const Description = styled.p`
    text-align: justify;
    padding: 20px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Button = styled.button`
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 4px;
    padding: 10px;
    cursor: pointer;
`
    
export default Card;