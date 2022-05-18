import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillBell } from "react-icons/ai"
import { BsDice6Fill } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { getVideosBySearch } from '../redux/actions/videos.action'
import { useDispatch } from 'react-redux'

const Navbar = ({ toggle, setToggle }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()
    const togglee = () => {
        setToggle((e) => !e)
        console.log("clieked")
    }
     
     const handleClick = () => {
         if (keyword) {
            navigate(`/search/${keyword}`)
         }
    }
    return (
        <Container>
            < Grids >
                <Grid1>
                    <div className="toggle" onClick={togglee}></div>
                    < AiFillYoutube className='icons' />
                   <Link to="/">
                    <span style={{outline: "none", color: "white"}}>YOUTUBE</span>
                   </Link>
                </Grid1>
                <Grid2>
                    < input placeholder='Search Youtube'
                        onChange={(e) => setKeyword(e.target.value)}
                        onClick={handleClick}
                        value={keyword}
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
    transform: scale();
    cursor: pointer;
    margin: 0px 19px;
}
.icons:hover{
    opacity: 0.7;
}
.toggle {
    position: relative;
    background-color: white;
    width: 13%;
    height: 0.5vh;
    cursor: pointer;
    display: none;
    @media (max-width: 1300px) {
        display: block;
    }
}
.toggle::after {
    position: absolute;
    content: " ";
    background-color: white;
    width: 100%;
    height: 0.5vh;
    top: -250%;
    left: 0;

}
.toggle::before {
    position: absolute;
    content: " ";
    background-color: white;
    width: 100%;
    height: 0.5vh;
    top: 250%;
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
      @media (max-width: 700px) {
font-size: 18px    }
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
align-items: center;
input {
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;

    @media (max-width: 700px) {
      flex: 0.8;
    }
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