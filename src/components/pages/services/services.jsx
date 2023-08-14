import React from "react";

import "../services/services.scss";
import { Box, Button, Flex, Paper, Text, Title } from "@mantine/core";

function Services() {
  return (
    <>
      <Box maw="100%" w="100%" h="240vh" bg="#1580EB17">
        <Flex justify="center" direction="column" align="center" pt={30}>
          <Title fz={45} fw={600} ta="center" w={500}>
            The <span className="servicesText">Best Quality</span> Service For
            Your Family
          </Title>
          <Text ta="center" pt={15} c="#A4A4A4" w={450}>
            Our best team doctor with complete and modern facilities will keep
            you healthy or return you to health from sick.
          </Text>
        </Flex>
        <Flex mt={50} justify="space-around">
          <Paper radius=" 20px 20px 0px 20px" w={600} h={300} bg="#1580eb">
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#ffffff" fw={600}>
                  Primary Care
                </Text>
                <Text mt={10} fz={27} c="#ffffff" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Button mt={15} w="180px" fz={20} h={50} bg="#036">
                    {`Read More ->`}
                  </Button>
                  <Box
                    className="number"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      01
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
          <Paper
            mt={150}
            radius=" 20px 20px 0px 20px"
            w={600}
            h={300}
            bg="#ffffff"
          >
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#1580eb" fw={600}>
                  Heart care
                </Text>
                <Text mt={10} fz={27} c="#A4A4A4" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Text
                    className="cursoreP"
                    mt={20}
                    w="180px"
                    c="#333333"
                    fz={25}
                    h={50}
                    bg="#ffffff"
                  >
                    {`Read More ->`}
                  </Text>
                  <Box
                    className="number2"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      02
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
        </Flex>
        <Flex mt={50} justify="space-around">
          <Paper radius=" 20px 20px 0px 20px" w={600} h={300} bg="#ffffff">
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#1580eb" fw={600}>
                  Dermatology
                </Text>
                <Text mt={10} fz={27} c="#A4A4A4" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Text
                    className="cursoreP"
                    mt={20}
                    w="180px"
                    c="#333333"
                    fz={25}
                    h={50}
                    bg="#ffffff"
                  >
                    {`Read More ->`}
                  </Text>
                  <Box
                    className="number2"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      03
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
          <Paper
            mt={150}
            radius=" 20px 20px 0px 20px"
            w={600}
            h={300}
            bg="#ffffff"
          >
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#1580eb" fw={600}>
                  Urology
                </Text>
                <Text mt={10} fz={27} c="#A4A4A4" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Text
                    className="cursoreP"
                    mt={20}
                    w="180px"
                    c="#333333"
                    fz={25}
                    h={50}
                    bg="#ffffff"
                  >
                    {`Read More ->`}
                  </Text>
                  <Box
                    className="number2"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      04
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
        </Flex>
        <Flex mt={50} justify="space-around">
          <Paper radius=" 20px 20px 0px 20px" w={600} h={300} bg="#ffffff">
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#1580eb" fw={600}>
                  Orthopaedics
                </Text>
                <Text mt={10} fz={27} c="#A4A4A4" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Text
                    className="cursoreP"
                    mt={20}
                    w="180px"
                    c="#333333"
                    fz={25}
                    h={50}
                    bg="#ffffff"
                  >
                    {`Read More ->`}
                  </Text>
                  <Box
                    className="number2"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      05
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
          <Paper
            mt={150}
            radius=" 20px 20px 0px 20px"
            w={600}
            h={300}
            bg="#ffffff"
          >
            <Flex direction="column" justify="center" align="center">
              <Box mt={20}>
                <Text fz={37} c="#1580eb" fw={600}>
                  Sugery
                </Text>
                <Text mt={10} fz={27} c="#A4A4A4" w={400}>
                  Our certified doctors provide best medical care to keep you
                  healthy
                </Text>
                <Flex>
                  <Text
                    className="cursoreP"
                    mt={20}
                    w="180px"
                    c="#333333"
                    fz={25}
                    h={50}
                    bg="#ffffff"
                  >
                    {`Read More ->`}
                  </Text>
                  <Box
                    className="number2"
                    pos="relative"
                    left={240}
                    bg="red"
                    w={40}
                    h={40}
                  >
                    <Text
                      ta="center"
                      fz={40}
                      fw={600}
                      pt={25}
                      pl={20}
                      c="#ffffff"
                    >
                      06
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Paper>
        </Flex>
      </Box>
    </>
  );
}

export default Services;
