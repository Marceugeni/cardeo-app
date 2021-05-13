import image from '../assets/portadatriumph.jpg'
import styled from 'styled-components'

function Card() {

    return(
        <Wrapper>
            <CardContainer>
                <Img src={image}></Img>
                <Title>Triumph Bonneville T100</Title>
                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Neque molestias necessitatibus, quae perspiciatis incidunt, 
                    voluptate amet aliquid temporibus voluptatum doloribus laudantium 
                    provident iusto dignissimos recusandae a reiciendis ex consequatur dolorem.
                </Description>
                <ButtonWrapper>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </ButtonWrapper>
            </CardContainer>
        </Wrapper>
        
    );
    
}

const Wrapper = styled.div`
    padding: 1em;
    

`

const CardContainer = styled.div`
    border: 1px solid lightgray;
    max-width: 350px;
    border-radius: 20px 20px 20px 20px;
    padding-bottom: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const Img = styled.img`
    width: 350px;
    object-fit: contain;
    border-radius: 20px 20px 0px 0px;
`

const Title = styled.h1`
    font-size: 1.5em;
    /* color: lightgray; */
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
`



export default Card;