import React from 'react'
import MainFeed from './MainFeed'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Feeds = ({ term, setTerm }) => {
    return (
        <Container>
            <Sidebar />
            < MainFeed term={term} setTerm={setTerm} />
        </Container>
    )
}

export default Feeds

const Container = styled.div`
min-height: fit-content;
width: 100%;
display: flex;
`