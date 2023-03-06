import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utilities/constants';


const CommentCard = ({ comment: { snippet } }) => (

  <Card sx={{
    width: "100%",
    boxShadow: "none", borderRadius: 0,
  }} >
    {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
      />
    </Link>
*/}
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }} >

      <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
        {snippet.topLevelComment.snippet?.authorDisplayName.slice(0, 25) || demoVideoTitle.slice(0, 25)}
      </Typography>



      <Typography variant="subtitle2" color="gray" py={1} paragraph="true"  >
        {snippet.topLevelComment.snippet?.textOriginal || demoChannelTitle}
      </Typography>


      <Typography variant="subtitle2" color="gray">
        <ThumbUpIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        {snippet.topLevelComment.snippet?.likeCount || '0'} Likes
      </Typography>


    </CardContent>
  </Card>

);

export default CommentCard