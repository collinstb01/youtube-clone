import React, { useEffect } from "react";
import styled from "styled-components";
import ChannelSearch from "./ChannelSearch";
import VideoSearch from "./VideoSearch";
import { useSelector, useDispatch } from "react-redux";
import { getVideosBySearch } from "../redux/actions/videos.action";
import { useParams } from "react-router-dom";

const SearchSreen = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchedVideos);
  console.log(videos);

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  return (
    <Main>
      <ChannelSearch />
      {videos.map((video) => (
      <VideoSearch video={video} key={video.snippet.videoId} />        
      ))}
    </Main>
  );
};

export default SearchSreen;

const Main = styled.div`
  background-color: #282828;
  width: 90%;
  min-height: 100vh;
  color: white;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;
