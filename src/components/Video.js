import react from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../images/1.png";

const Video = ({ video }) => {
  const navigate = useNavigate()
  const {
    id,
    snippet: {
       channelId,
       channelTitle,
       title,
       publishedAt,
       thumbnails: { medium },
    },
    contentDetails,
 } = video

 const handle = () => {
   navigate(`/details/${id}`)
 }
  return (
    <OneVideo>
      <div className="img">
          <img src={medium.url} onClick={handle} />
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
      <span className="description">
        trying to build the yputbe clone hopefully it works out
      </span>
      <div className="channel">
        <div className="channelimg">
          <img src={img} />
        </div>
        <span>{channelTitle}</span>
      </div>
    </OneVideo>
  );
};

export default Video;

const OneVideo = styled.div`
  width: 100%;
  height: 45vh;
  margin: 10px 10px;
  color: white;
  font-family: Arial;
  .img {
    width: 100%;
    height: 20vh;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .title {
    font-size: 13px;
    font-weight: 900;
    margin-left: 10px;
  }
  .description {
    margin-left: 10px;
    margin-bottom: 10px;
    font-size: 11px;
  }
  .channel {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .channelimg {
      width: 15%;
      height: 4vh;
      overflow: hidden;
      border-radius: 50%;
      margin: 0px 10px;
      img {
        width: 100%;
      }
    }
    span {
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`;
