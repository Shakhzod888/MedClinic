import { Box, Flex, Image, Text, Title } from "@mantine/core";
import "../home/home.scss";
import React from "react";
import Header from "./header/header";
import MainPhoto from "../assets/mainPhoto.jpg";

import AdvantagesImg_1 from "../assets/advantages_1.png";
import AdvantagesImg_2 from "../assets/advantages_2.png";
import AdvantagesImg_3 from "../assets/advantages_3.png";
import AdvantagesImg_4 from "../assets/advantages_4.png";

function Home() {
  return (
    <>
      <Box maw="100%" w="100%" h="100vh">
        <Header />
        <Box>
          <Flex gap={160} mt={40} justify="center" align="center">
            <Title w="40%" fz={50} order={1}>
              Make an appointment
              <Text span c="blue" inherit>
                {" "}
                easy
              </Text>{" "}
              and
              <Text span c="blue" inherit>
                {" "}
                fast
              </Text>{" "}
            </Title>
            <Text w="34%" c="#666666" fz={20}>
              Checking your family health by professional team doctors with
              complete and modern facilities services.
            </Text>
          </Flex>
          <Flex mt={20} justify="space-around" align="center" ta="center">
            <Box>
              <Text c="#1580EB" fz={45} fw={600}>
                Our Advantages
              </Text>
              <Flex
                mt={20}
                direction="column"
                justify="center"
                align="center"
                gap={20}
              >
                <Flex
                  fw={600}
                  fz={18}
                  justify="center"
                  gap={10}
                  align="center"
                  ta="center"
                >
                  <img src={AdvantagesImg_2} alt="" />
                  <Text ta="center">Make an appointment</Text>
                </Flex>
                <Flex
                  mr={17}
                  fw={600}
                  fz={18}
                  justify="center"
                  gap={10}
                  align="center"
                  ta="center"
                >
                  <img src={AdvantagesImg_1} alt="" />
                  <Text ta="center">Digital X-ray on site</Text>
                </Flex>
                <Flex
                  mr={17}
                  fw={600}
                  fz={18}
                  justify="center"
                  gap={10}
                  align="center"
                  ta="center"
                >
                  <img src={AdvantagesImg_3} alt="" />
                  <Text ta="center">Emergency services</Text>
                </Flex>
                <Flex
                  fw={600}
                  fz={18}
                  mr={55}
                  justify="center"
                  gap={10}
                  align="center"
                  ta="center"
                >
                  <img src={AdvantagesImg_4} alt="" />
                  <Text ta="center">Immunizations</Text>
                </Flex>
              </Flex>
            </Box>

            <Box>
              <Image
                maw={740}
                mx="auto"
                radius="md"
                src={MainPhoto}
                alt="Random image"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Home;
