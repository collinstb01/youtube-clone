import React from 'react'
import styled from 'styled-components'
import DetailFeedScreenRelatedVideo from './DetailFeedScreenRelatedVideo'

const DetailsFeedScreenRelated = ({videos, id}) => {
  return (
    <Main>
      <h3>Up Next</h3>
      {
        videos.map((video) => (
          <DetailFeedScreenRelatedVideo key={video.id.videoId} id={id} video={video}/>
        ))
      }
    </Main>
  )
}

export default DetailsFeedScreenRelated

const Main = styled.div`
width: 20%;
min-height: 100vh;
background-color: #282828;
color: white;
padding-top: 10px;
z-index: -1;

@media (max-width: 1300px) {
  width: 30%
}
@media (max-width: 730px) {
  display: none;
}
`