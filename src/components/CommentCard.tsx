import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utilities/constants";
import { CommentSnippet } from "../types";

interface CommentCardProps {
  snippet: CommentSnippet;
}

const CommentCard = ({ snippet }: CommentCardProps) => (
  <Card
    sx={{
      minWidth: "100%",
      borderRadius: 0,
    }}
  >
    <CardContent sx={{ backgroundColor: "#000", pt: 0, pb: 0.5 }}>
      <Link
        to={
          snippet.topLevelComment.snippet?.authorChannelId?.value
            ? `/channel/${snippet.topLevelComment.snippet?.authorChannelId?.value}`
            : demoChannelUrl
        }
      >
        <Stack direction="row" justifyContent={"flex-start"} spacing={1.5}>
          <Box sx={{ paddingTop: "3px", paddingLeft: "2px" }}>
            <Avatar
              sx={{ border: "solid 2px white" }}
              alt="UserProfile"
              src={
                snippet.topLevelComment.snippet?.authorProfileImageUrl ||
                demoThumbnailUrl
              }
            />
          </Box>

          <Stack>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" color="#e4e4e4">
                {snippet.topLevelComment.snippet?.authorDisplayName.slice(
                  0,
                  25
                ) || demoVideoTitle.slice(0, 25)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="#FFF">
                {snippet.topLevelComment.snippet?.textOriginal ||
                  demoChannelTitle}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                color="gray"
                sx={{ height: "22px" }}
              >
                <ThumbUpIcon
                  sx={{ fontSize: "18px", color: "gray", px: "4px", mt: "6px" }}
                />
                {snippet.topLevelComment.snippet?.likeCount || "0"}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Link>
    </CardContent>
  </Card>
);

export default CommentCard;
