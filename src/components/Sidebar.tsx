import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constants";

interface SideBarProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: SideBarProps) => (
  <Stack
    direction="row"
    sx={{
      height: { xs: "auto", lg: "90%" },
      flexDirection: { lg: "column" },
      paddingRight: "12px",
    }}
    className="sidebar"
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background:
            category.name === selectedCategory ? "#FC1503" : "transparent",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
