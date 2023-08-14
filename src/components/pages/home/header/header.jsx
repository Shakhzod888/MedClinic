import { Box, Button, Flex, Text } from "@mantine/core";
import "../home.scss";
import React from "react";

function Header() {
  return (
    <>
      <Box>
        <Flex pt={10} justify="space-around" align="center" ta="center">
          <Box>
            <Flex align="center" ta="center">
              <Text fz={35} fw={600}>
                Med
              </Text>
              <Text fz={35} fw={600} c="#1580EB">
                Clinic
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex gap={50} align="center" ta="center" pt={5}>
              <Text className="homeLinks activeLinks" fz={20}>
                Home
              </Text>
              <Text className="homeLinks" fz={20}>
                About
              </Text>
              <Text className="homeLinks" fz={20}>
                Services
              </Text>
              <Text className="homeLinks" fz={20}>
                Contact
              </Text>
              <Text className="homeLinks" fz={20}>
                Help
              </Text>
            </Flex>
          </Box>
          <Box>
            <Button w={150} h={40}>
              Registered
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
