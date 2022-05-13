import react from 'react'
import styled from "styled-components"

const Selection = ({ selects }) => {

    return (
        <Container>
            <h1>{selects.title}</h1>
        </Container>
    )
}

export default Selection;

const Container = styled.div`
padding: 2px 15px;
border-radius: 25%;
border: 1px solid gray;
background-color: #282828;
color: white;
width: fit-content;
font-size: 5px;
height: 5vh;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 14px;
cursor: pointer;
`