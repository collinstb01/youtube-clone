import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../images/1.png";
import { FaShare } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import { checkSubscriptionStatus, getChannelDetails } from "../redux/actions/channel.action";

const DetailsFeedScreen = ({ video , id }) => {
  const [comment, setComment] = useState("");
  const [sub, setSub] = useState(false);
  const _channelId = video?.channelId
  const dispatch = useDispatch();
  const [channelIcon, setChannelIcon] = useState(null)

  useEffect(() => {
    const get_channel_icon = async () => {
       const {
          data: { items },
       } = await request('/channels', {
          params: {
             part: 'snippet',
             id: _channelId,
          },
       })
       setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
 }, [_channelId, id])

  const {channel}  =
    useSelector((state) => state.channelDetails);


  useEffect(() => {
    dispatch(getChannelDetails(_channelId));
    dispatch(checkSubscriptionStatus(_channelId));
  }, [dispatch, _channelId]);


  const handlesub = () => {
    setSub((e) => !e)
    console.log('s')
  };
  return (
    <Main>
      <Img>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          title={video?.snippet?.title}
          allowFullScreen
          width="100%"
          height="100%"
        ></iframe>
      </Img>
      <div className="content">
        <h2>{video?.snippet?.title}</h2>
        <div className="cview">
          <span>
            {" "}
            {numeral(video?.statistics?.viewCount).format("0.a")} Views •{" "}
            {moment(video?.statistics?.publishedAt).fromNow()}
          </span>
          <div className="cview2">
            <div>
              <AiFillLike />
              <span>{numeral(video?.statistics?.likeCount).format("0.a")}</span>
            </div>
            <div>
              <AiFillDislike />
              <span> {numeral(video?.statistics?.dislikeCount).format("0.a")}</span>
            </div>
          </div>
        </div>

        <div className="subcribe">
          <Img2>
            <img src={channelIcon} />
          </Img2>
          <div>
            <button onClick={handlesub}>{!sub ? "SUBCRIBE" : "unSubcribed"}</button>
            <span>3m Subcribers</span>
          </div>
        </div>
        <div className="comment">
          <input placeholder="Enter a comment" type="text" />
          <button >POST</button>
        </div>
      </div>
    </Main>
  );
};

export default DetailsFeedScreen;

const Main = styled.div`
  width: 67%;
  background-color: #282828;
  min-height: 100vh;
  z-index: -1;

  button {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: 70%;
  }
  @media (max-width: 730px) {
    width: 1000%;
  }
  .top {
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 10%;
    left: 17%;
    .icon {
      color: black;
      position: relative;
      top: 0%;
      right: -70%;
      transform: scale(1.8);
    }
  }
  .imgtext {
    color: white;
    font-size: 25px;
    text-shadow: 2px 2px 2px black;
    display: flex;

    span {
      margin-left: 10px;
    }
  }
  .content {
    padding: 0px 30px;
    color: white;
    h2 {
      text-transform: capitalize;
      font-size: 18px;
    }
    .cview {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid gray;
      .cview2 {
        display: flex;

        div {
          padding: 0px 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          span {
            margin-left: 5px;
          }
        }
      }
    }
  }

  .comment {
    display: flex;
    input {
      padding: 20px;
      background-color: transparent;
      border-bottom: 2px solid black;
      display: flex;
      flex: 1;
      color: white;
    }
    button {
      border: none;
      outline: none;
    }
  }
  .subcribe {
    margin: 24px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    div {
      display: flex;
      flex-direction: column;
      button {
        border: none;
        background-color: red;
        padding: 10px 20px;
        color: white;
        transform: scale(1);
        cursor: pointer;
      }
      button:hover {
        transform: scale(1.1);
        opacity: 0.9;
      }
    }
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
  }
`;
const Img2 = styled.div`
  width: fit-content;
  height: 10vh;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
