import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, direction }) => {
    console.log(videos);
    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent="flex-start" alignItems="start" sx={{ width: "100%", gap: "20px 10px" }} >
            {videos && videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            )
            )
            }
        </Stack >

    );
};

export default Videos;