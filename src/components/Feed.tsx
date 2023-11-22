import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./";
import { fetchfromAPI } from "../utilities/fetchfromAPI";
import { VideoItem } from "../types";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    setVideos([]);
    fetchfromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=50`
    ).then((data) => setVideos(data));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", lg: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", lg: "86vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2023 DC&Company
        </Typography>
      </Box>

      <Box p={4} mb={1} sx={{ overflowY: "scroll", height: "80vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
