import styled from 'styled-components'
import ReactDom from 'react-dom'

const Modal = ({ open, close }) => {
    if (!open) return null;

    return ReactDom.createPortal( 
        <>
            <Override />
            <ModalPosition>
                <ModalContainer>
                    <Title>New Card</Title>
                    <FrormWrapper>
                        <Form action="">
                            <Input type="text" id="title" name="title" placeholder="Title" />
                            <Input type="text" id="description" name="description" placeholder="Description" />
                            <Input type="text" id="image" name="image" placeholder="Image (Url)" />
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
    zIndex: 1000;
`
    
const ModalPosition = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    padding: 20px 30px 10px 30px;
    font-family: 'Montserrat', sans-serif;
    zIndex: 1000;

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