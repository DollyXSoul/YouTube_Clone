import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => (

  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoFeed />} />
        <Route path="/channel/:id" element={<ChannelFeed />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>

    </Box>
  </BrowserRouter>
);



export default App;
