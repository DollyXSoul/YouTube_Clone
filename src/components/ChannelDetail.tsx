import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchfromAPI } from "../utilities/fetchfromAPI";
import { VideoItem, channelDetail } from "../types";
import { demoChanneldetail } from "../utilities/constants";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] =
    useState<channelDetail>(demoChanneldetail);
  const [videos, setVideos] = useState<VideoItem[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const items = await fetchfromAPI(
        `channels?part=snippet%2Cstatistics&id=${id}`
      );

      setChannelDetail(items[0]);

      const videoList = await fetchfromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
      );

      setVideos(videoList);
    };

    fetchResults();
  }, [id]);

  return (
    <Box maxHeight="90vh" sx={{ overflowY: "scroll" }}>
      <Box>
        <div
          style={{
            height: "280px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />

        <ChannelCard
          channelDetail={channelDetail as VideoItem}
          marginTop="-93px"
        />
      </Box>
      <Box p={2} display="flex" mb={6}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} direction="row" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
