import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import ComputerIcon from "@mui/icons-material/Computer";
//import CodeIcon from "@mui/icons-material/Code";
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

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";

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
