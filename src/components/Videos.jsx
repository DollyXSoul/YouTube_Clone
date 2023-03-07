import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard, Loader } from './';

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return <Loader />

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2} >
            {videos && videos.map((item, idx) => (
                <Box key={idx} sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))
            }
        </Stack >

    );
};

export default Videos;
