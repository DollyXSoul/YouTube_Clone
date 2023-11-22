import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import { channelDetail } from "../types";
export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const categories = [
  { name: "New", icon: <HomeIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Education", icon: <SchoolIcon /> },
  { name: "Podcast", icon: <GraphicEqIcon /> },
  { name: "Movie", icon: <OndemandVideoIcon /> },
  { name: "Gaming", icon: <SportsEsportsIcon /> },
  { name: "Live", icon: <LiveTvIcon /> },
  { name: "Sport", icon: <FitnessCenterIcon /> },
  { name: "Fashion", icon: <CheckroomIcon /> },
  { name: "Beauty", icon: <FaceRetouchingNaturalIcon /> },
  { name: "Technology", icon: <ComputerIcon /> },
  { name: "Comedy", icon: <TheaterComedyIcon /> },
  { name: "Gym", icon: <FitnessCenterIcon /> },
  { name: "Crypto", icon: <DeveloperModeIcon /> },
];

export const demoThumbnailUrl: string = "https://imgbox.com/BVA5NhJE";
export const demoChannelUrl = "/channel/UCBR8-60-B28hp2BmDPdntcQ";
export const demoVideoUrl = "/video/Y7dpJ0oseIA";
export const demoChannelTitle = "YouTube";
export const demoVideoTitle = "YouTube";
export const demoProfilePicture = "https://imgbox.com/1BFLv4TI";

export const demoChanneldetail: channelDetail = {
  kind: "#channel",
  id: "demoid",
  snippet: {
    publishedAt: "2023-09-10T05:00:17Z",
    channelId: "demoid",
    title: "demoTitle",
    description: "demo description",
    thumbnails: {
      default: {
        url: "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s88-c-k-c0x00ffffff-no-nd-rj",
      },
      medium: {
        url: "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s88-c-k-c0x00ffffff-no-nd-rj",
      },
      high: {
        url: "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s88-c-k-c0x00ffffff-no-nd-rj",
      },
    },
    channelTitle: "Demo channel",
  },
};
