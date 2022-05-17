import React from 'react'
import MainFeed from './MainFeed'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Feeds = ({ toggle, setToggle }) => {
    return (
        <Container>
            <Sidebar  toggle={toggle} setToggle={setToggle} />
            < MainFeed />
        </Container>
    )
}

export default Feeds

const Container = styled.div`
min-height: fit-content;
width: 100%;
display: flex;
`
