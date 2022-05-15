import { useNavigate, useParams ,Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import img from "../images/1.png";

const DetailFeedScreenRelatedVideo = ({ video }) => {
  const navigate = useNavigate();

  const {
    id : {
      videoId
    }
  } = video

  const handlee = () => {
    navigate(`/`);
    console.log("clciked")
  };
  return (
  <>
    <Main onClick={handlee}>
      <div className="Img">
        < Link to={`/details/${videoId}`}>
        <img src={video?.snippet?.thumbnails?.high?.url} />
        </Link>
      </div>
      <span className="time-stamp">5:00</span>
      <div className="left">
        <p className="text1">{video?.snippet?.title}</p>
        <p>13m views . 2 days ago</p>
        <div className="subcribe">
          <Img2>
            <img src={img} />
          </Img2>
          <div>
            <span>Cricket Tv AC</span>
          </div>
        </div>
      </div>
    </Main>
  </>
  );
};

export default DetailFeedScreenRelatedVideo;

const Main = styled.div`
  height: 13vh;
  width: 100%;
  margin-bottom: 20px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  .Img {
    width: 50%;
    height: 15vh;
    display: grid;
    place-items: center;
    margin-left: 5px;
    img {
      width: 100%;
    }
  }
  .subcribe {
    display: flex;
    align-items: center;
  }
  .text1 {
    font-size: 9px;
  }
  .left {
    width: 50%;
    padding-left: 2px;
  }
  .time-stamp {
    position: absolute;
    background-color: black;
    padding: 2px 8px;
    color: white;
    bottom: 3%;
    right: 51%;
  }
`;

const Img = styled.div`
  width: 100%;
  overflow: hidden;
  height: 60vh;
  display: grid;
  place-items: center;
  position: relative;
  img {
    width: 100%;
    cursor: pointer;
  }
`;
const Img2 = styled.div`
  width: auto;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
