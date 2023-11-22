import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Typography, Box, Stack, Button } from "@mui/material";
import { Videos, Loader, Comments } from "./";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchfromAPI } from "../utilities/fetchfromAPI";
import { VideoDetailType, VideoItem } from "../types";

const VideoDetail: React.FC = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetailType>();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const { id } = useParams() as { id: string };
  const [disabled, setdisabled] = useState(false);

  useEffect(() => {
    fetchfromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((items) => setVideoDetail(items[0]));

    fetchfromAPI(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((items) => setVideos(items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh" maxWidth="100vw">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1} px={1} pt={1}>
          <Box sx={{ width: { xs: "100%" } }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              color="#fff"
              variant="h6"
              fontWeight="bold"
              p={2}
              pb={1}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
            <Box sx={{ maxWidth: { xs: "100vw", md: "75vw" } }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#37474f" }}
                fullWidth={"true"}
                onClick={() => setdisabled((prev) => !prev)}
              >
                {disabled ? "Hide Comments" : "Show Comments"}
              </Button>
              {disabled && <Comments videoId={id} />}
            </Box>
          </Box>
        </Box>
        <Box py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction={{ xs: "row", md: "column" }} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
