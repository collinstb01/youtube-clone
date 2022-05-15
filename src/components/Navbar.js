import React from 'react'
import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillBell } from "react-icons/ai"
import { BsDice6Fill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Navbar = ({ term, setTerm }) => {
    return (
        <Container>
            < Grids >
                <Grid1>
                    < AiFillYoutube className='icons' />
                   <Link to="/">
                    <span style={{outline: "none", color: "white"}}>YOUTUBE</span>
                   </Link>
                </Grid1>
                <Grid2>
                    < input placeholder='Search Youtube'
                        onChange={(e) => setTerm(e.target.value)}
                        value={term}
                    />
                </Grid2>
                <Grid3>
                    < AiFillBell className='icons' />
                    < BsDice6Fill className='icons' />
                    <Avatar>H</Avatar>
                </Grid3>
            </Grids>
        </Container>
    )
}

export default Navbar
const Container = styled.div`
width: 100%;
height: 10vh;
border-bottom: 1px solid gray;
position: sticky;
top: 0;
.icons {
    padding: 20px;
    transform: scale(1.4);
    cursor: pointer;
}
.icons:hover{
    opacity: 0.7;
}
`
const Grids = styled.div`
width: 100%;
height: 10vh;
background-color: #282828;
color: white;
display: flex;
justify-content: center;
align-items: center;
span {
    font-weight: 500;
    font-size: 21px;
}
`
const Grid1 = styled.div`
width: 33.3%;
display: flex;
justify-content: center;
align-items: center;
.icons {
    color: red;
    transform: scale(3)
}
`
const Grid2 = styled.div`
width: 33.3%;
display: flex;

input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
}
`
const Grid3 = styled.div`
width: 33.3%;
display: flex;
justify-content: center;
align-items: center;
`
const Avatar = styled.div`
width: 40px;
height: 35px;
background-color: whitesmoke;
color: black;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
cursor: pointer;
`