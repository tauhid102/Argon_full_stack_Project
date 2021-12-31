import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Categories from "./Categories";
import Slider from "./Slider";
const Home = () => {
  return (
    <Box>
      <Header />
      <Slider />
      <Categories/>
    </Box>
  );
};

export default Home;
