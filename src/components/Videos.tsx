import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";
import { VideoItem } from "../types";

interface VideosProps {
  videos: VideoItem[];
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
}
const Videos = ({ videos, direction }: VideosProps) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="flex-start"
      gap={2}
      sx={{
        height: { xs: "85vh", md: "auto" },
        overflowY: { sm: "scroll", md: "auto" },
      }}
    >
      {videos &&
        videos.map((item, idx) => (
          <Box
            key={idx}
            sx={{ width: { xs: "100%", sm: "361px", md: "323px" } }}
          >
            {item.id.videoId && (
              <VideoCard videoId={item.id.videoId} snippet={item.snippet} />
            )}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
