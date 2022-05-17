import React from 'react'
import styled from 'styled-components'
import img from "../images/1.png"

const ChannelSearch = () => {
  return (
    <Main>
        <div className='=left'>
            <div className='img'>
            < img src={img} />
            </div>
        </div>
        <div className="right">
            <span>Channel Name</span>
            <span>6 years ago</span>
            <span>i hate building this project lol just kidding</span>
        </div>
    </Main>
  )
}

export default ChannelSearch

const Main = styled.div`
display : flex;
width: auto;
height: 5vh;
justify-content: center;
align-items: center;
border-bottom: 1px solid gray;
padding:  70px 50px;
.img {
    width: 100%;
    img {
    width: 124px;
    height: 124px;
    border-radius: 100%;
    margin-right: 50px;
}
}
.right {
    display: flex;
    flex-direction: column;
}
span:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
}
span:nth-child(n+2) {
    font-size: 12px;
}
`