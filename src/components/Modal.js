import ReactDom from 'react-dom'
import { useState } from 'react';


import styled from 'styled-components'


const Modal = ({ openModal }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    

  
     const handleSubmit = (e) => {
        e.preventDefault()
        const newCard = { title, description, imageUrl }

         fetch("http://localhost:8000/cards", {
            method: 'POST',
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(newCard)
        }).then(() => {
            console.log('SANVIAO JA')
            console.log(newCard)
        })

    }


    if (!openModal) return null;

    return ReactDom.createPortal( 
        <>
            <Override />
            <ModalPosition>
                <ModalContainer>
                    <Title>New Card</Title>
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
                            <Input type="text"
                                   placeholder="Image (Url)"
                                   value={imageUrl}
                                   onChange={(e) => setImageUrl(e.target.value)} 
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
 
export default Modal;