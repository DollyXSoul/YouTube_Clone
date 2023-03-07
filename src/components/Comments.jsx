import React, { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material';
import { CommentCard, Loader } from './';
import { fetchfromAPI } from '../utilities/fetchfromAPI';

const Comments = ({ videoId }) => {

  const [comments, setComments] = useState(null);

  useEffect(() => {
    setComments(null);
    fetchfromAPI(`commentThreads?part=snippet&videoId=${videoId}&maxResults=50`)
      .then((data) => setComments(data.items))

  }, [videoId])


  if (!comments?.length) return <Loader />


  return (
    <Box width="100%">
      <Typography variant="h5" color="#fff" pb={1}>
        Comments
      </Typography>
      <Stack flexWrap="wrap" justifyContent="start" alignItems="start" gap={1} >
        {comments && comments.map((item, idx) => (
          <Box key={idx} width="100%" >
            <CommentCard comment={item} />
          </Box>
        ))
        }
      </Stack >

    </Box>
  )
}

export default Comments