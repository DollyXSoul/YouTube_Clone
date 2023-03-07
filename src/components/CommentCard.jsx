import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utilities/constants';


const CommentCard = ({ comment: { snippet } }) => (



  <Card sx={{
    minWidth: "100%",
    borderRadius: 0
  }}>
    {/* <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
      />
    </Link>
*/}
    <CardContent sx={{ backgroundColor: "#1E1E1E" }} >
      <Link to={snippet.topLevelComment.snippet?.authorChannelId?.value ? `/channel/${snippet.topLevelComment.snippet?.authorChannelId?.value}` : demoChannelUrl}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item >
            <Avatar alt="UserProfile" src={snippet.topLevelComment.snippet?.authorProfileImageUrl || demoThumbnailUrl} />

          </Grid>
          <Grid item mt={1}>
            <Typography variant="subtitle1" fontWeight="bold" color="gray" gutterBottom>
              {snippet.topLevelComment.snippet?.authorDisplayName.slice(0, 25) || demoVideoTitle.slice(0, 25)}
            </Typography>
          </Grid>
        </Grid>
      </Link>

      <Typography variant="subtitle2" color="#FFF" pt={1} paragraph="true"  >
        {snippet.topLevelComment.snippet?.textOriginal || demoChannelTitle}
      </Typography>


      <Typography variant="body1" color="gray" sx={{ height: "22px" }}>
        <ThumbUpIcon sx={{ fontSize: "18px", color: "gray", px: "4px" }} />
        {snippet.topLevelComment.snippet?.likeCount || '0'}
      </Typography>


    </CardContent>
  </Card>

);

export default CommentCard