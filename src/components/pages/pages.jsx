import React from "react";
import Home from "./home/home";
import { Box } from "@mantine/core";
import Services from "./services/services";

function Pages() {
  return (
    <Box>
      <Home />
      <Services />
    </Box>
  );
}

export default Pages;
