import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../images/1.png";
import request from "../api";
import { useParams } from "react-router-dom";
import moment from 'moment'
import numeral from 'numeral'
const VideoSearch = ({ video }) => {
  const { query } = useParams()
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channel", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    get_channel_icon();
  }, [query, channelId]);
  return (
    <Main>
      <div className="left">
        <div className="img">
          <img src={medium.url} />
        </div>
      </div>
      <div className="right">
        <span>{channelTitle}</span>
        <span>
        {numeral(views).format('0.a')} Views •
                  {moment(publishedAt).fromNow()}
        </span>
        <div className="img">
          <img src={channelIcon} />
        </div>
        <p>{description}</p>
      </div>
    </Main>
  );
};

export default VideoSearch;

const Main = styled.div`
  width: auto;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
    text-align: center;
  }
  .left {
    width: 50%;

    @media (max-width: 800px) {
      width: 100%;
      display: contents;
    }
    .img {
      width: 360px;
      height: 360px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-left: 30px;
      @media (max-width: 800px) {
          width: 80%;
          height: auto;
          padding-left: 0px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    width: 50%;
    @media (max-width: 800px) {
      width: 100%;
    }
    .img {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    span {
      margin-bottom: 5px;
    }
    span:nth-child(1) {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      width: 80%;
    }
  }
`;
