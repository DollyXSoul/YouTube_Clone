import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import { CommentCard } from './';
import { fetchfromAPI } from '../utilities/fetchfromAPI';

const Comments = ({ videoId }) => {

  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments(null);
    fetchfromAPI(`commentThreads?part=snippet&videoId=${videoId}&maxResults=50`)
      .then((data) => setComments(data.items))

  }, [videoId])

  return (
    <Box width="100%">
      <Typography variant="h5" color="#fff">
        Comments
      </Typography>
      <Stack flexWrap="wrap" justifyContent="start" alignItems="start"  >
        {comments && comments.map((item, idx) => (
          <Box key={idx}>
            <CommentCard comment={item} />
          </Box>
        ))
        }
      </Stack >

    </Box>
  )
}

export default Comments