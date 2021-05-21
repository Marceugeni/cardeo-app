import ReactDom from 'react-dom'
import { useState } from 'react';

import styled from 'styled-components'


const EditCardModal = ({ card, openModal }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

    

    const handleClose = () => {
        window.location.reload()
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const modifiedCard = { title, description }
         fetch('https://tiendeo-frontend-cards-api.herokuapp.com/cards/' + card.id, {
            method: "PUT",
            headers: { "accept": "application/json",
                        "Authorization": "Bearer b53f3e02-0dba-40c3-82c4-97e0c049f80a",
                        "Content-Type": "application/json" },
            body: JSON.stringify(modifiedCard) 
        }).then(() => {
            console.log(modifiedCard.title)
            console.log('samodificao Ya')
            window.location.reload()  
        }).catch(err => {
            console.log(err.message)
        })
    }

    if (!openModal) return null;

    return ReactDom.createPortal( 
        <>
            <Override />
            <ModalPosition>
                <ModalContainer>
                    <CloseButtonWrapper>
                        <CloseButton onClick={handleClose}>X</CloseButton>
                    </CloseButtonWrapper>
                    <Title>Modify Card</Title>
                    <FrormWrapper>
                        <Form onSubmit={handleSubmit}>
                            <Input type="text"
                                   placeholder="Title" 
                                   required 
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)} 
                            />
                            <Input type="text"
                                   placeholder="Description"
                                   required
                                   value={description}
                                   onChange={(e) => setDescription(e.target.value)} 
                            />
                            <Button type="submit" value="Add">Add</Button>    
                        </Form>  
                    </FrormWrapper>
                </ModalContainer>
            </ModalPosition> 
        </>,
        document.getElementById('portal')
    )
}

const Override = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    z-index: 1000;
`
    
const ModalPosition = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    padding: 20px 30px 10px 30px;
    font-family: 'Montserrat', sans-serif;
    z-index: 1000;

`

const ModalContainer = styled.div`
    background-color: "#fff";
    border-radius: 20px 20px 20px 20px;
    padding-bottom: 15px;
    
`
const CloseButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CloseButton = styled.button`
    
    border: none;
    background-color: transparent;
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    cursor: pointer;
`

const Button = styled.button`
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    cursor: pointer;
`
const Title = styled.h1`
    text-align: center;
`
const FrormWrapper = styled.div`
    /* display: flex;
    flex-direction: column; */
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    width: 200px;
    padding-bottom: 5px;
    margin-bottom: 30px;
    border-bottom-color: lightgray;
    border-top: none;
    border-left: none;
    border-right: none;
    :focus {
        outline: none;
    }
`
 
export default EditCardModal;