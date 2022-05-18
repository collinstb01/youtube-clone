import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getRelatedVideos, getVideoById } from "../redux/actions/videos.action";
import DetailsFeedScreen from "./DetailsFeedScreen";
import DetailsFeedScreenRelated from "./DetailsFeedScreenRelated";
import Sidebar from "./Sidebar";

const DetailsFeed = ({toggle, setToggle}) => {
  const { id } = useParams()
  const {video, loading} = useSelector((state) => state.selectedVideo)
  const {videos} = useSelector((state) => state.relatedVideos)
const dispatch = useDispatch()

console.log(videos)
  useEffect(() => {
    dispatch(getRelatedVideos(id))
    dispatch(getVideoById(id))
  }, [id])
  
  return (
    <Container>
      <Sidebar toggle={toggle} setToggle={setToggle}  />
      <DetailsFeedScreen video={video} id={id} />
      <DetailsFeedScreenRelated videos={videos} id={id} />
    </Container>
  );
};

export default DetailsFeed;

const Container = styled.div`
  min-height: fit-content;
  width: 100%;
  display: flex;
`;
