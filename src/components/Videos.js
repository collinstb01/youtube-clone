import react, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Video from "./Video"

import {
    getPopularVideos,
} from '../redux/actions/videos.action'

const Videos = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, activeCategory, loading } = useSelector(
        state => state.homeVideos
    )
    console.log(videos)


    return (
        <>
            <Main>
                {!loading
                    ? videos.map(video => (

                        <div className="videos">
                            <Video video={video} key={video.id} />
                        </div>

                    ))
                    : [...Array(20)].map(() => (
                        <div lg={3} md={4}>
                            <h1>hello world</h1>
                        </div>
                    ))}
            </Main>
        </>
    )
}

export default Videos

const Main = styled.div`
    display: flex;
    width: 100%;
    align-content: space-between;
    flex-wrap: wrap;
.videos {
    width: 25%;
    display: flex;
    align-content: center;
    height: 45vh;
    flex-direction: row;
}
`