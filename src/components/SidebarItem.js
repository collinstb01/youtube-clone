import React from 'react'
import styled from 'styled-components'

const SidebarItem = ({ Icon, text }) => {
    return (
        <Container>
            < Icon className="icon" />
            <span>{text}</span>
        </Container>
    )
}

export default SidebarItem

const Container = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: flex-start;
align-items: center;
color: white;
margin-left: 20px;
.icon {
    margin: 10px;
    transform: scale(1.6);
}

span {
    margin: 10px;
    font-size: 15px;
}
`