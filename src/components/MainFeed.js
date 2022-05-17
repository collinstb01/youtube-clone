import React from 'react'
import styled from "styled-components"
import Selection from './Selection'
import Videos from './Videos'

const MainFeed = ({ term, setTerm }) => {
    const select = [
        { title: 'RectJs' }, { title: 'AngularJs' }, { title: 'Ionic' }, { title: 'NodeJs' }, { title: "Redux Query" }
    ]

    return (
        <Main>
            <Container>
                {
                    select.map((selects, i) => (
                        < Selection selects={selects} key={i} />
                    ))
                }
            </Container>
            <FeedVideos>
                <Videos term={term} setTerm={setTerm} />
            </FeedVideos>
        </Main>
    )
}

export default MainFeed
const Main = styled.div`
width: 87%;
background-color: #282828;
min-height: 100vh;

@media (max-width: 1300px) {
    width: 100%;
}
`

const Container = styled.div`
height: 10vh;
display: flex;
width: 100%;
align-items: center;
border-bottom: 1px solid gray;

`
const FeedVideos = styled.div`
min-height: 100vh;
width: 100%;

`
