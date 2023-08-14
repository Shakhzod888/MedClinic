import React from "react";
import Home from "./home/home";
import { Box } from "@mantine/core";
import Services from "./services/services";
import Appointments from "./appointments/appointments";
import DoctorsTeam from "./doctorsTeam/doctorsTeam";
import Thoughts from "./thoughts/thoughts";

function Pages() {
  return (
    <Box>
      <Home />
      <Services />
      <Appointments />
      <DoctorsTeam />
      <Thoughts />
    </Box>
  );
}

export default Pages;
