import React, { useState, useEffect } from "react";
import { Stack, Box, Typography, Divider } from "@mui/material";
import { CommentCard, Loader } from "./";
import { fetchfromAPI } from "../utilities/fetchfromAPI";
import { VideoComment } from "../types";

interface CommentsProps {
  videoId: string;
}

const Comments = ({ videoId }: CommentsProps) => {
  const [comments, setComments] = useState<VideoComment[]>([]);

  useEffect(() => {
    setComments([]);
    fetchfromAPI(
      `commentThreads?part=snippet&videoId=${videoId}&maxResults=50`
    ).then((data) => setComments(data));
  }, [videoId]);

  if (!comments?.length) return <Loader />;

  return (
    <Box width="100%">
      <Typography variant="h5" color="#fff" mb={0.5} mt={1.5}>
        Comments
      </Typography>
      <Divider color="gray" />
      <Stack flexWrap="wrap" justifyContent="start" alignItems="start" pt={1.5}>
        {comments &&
          comments.map((item, idx) => (
            <Box key={idx} width="100%">
              <CommentCard snippet={item.snippet} />
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default Comments;
