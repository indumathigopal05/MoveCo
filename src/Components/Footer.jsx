import React from "react";
import { Flex, Heading, Image, Box, Text } from "@chakra-ui/react";
import FooterLogo from "../assets/Footerlogo.png";
import bbb from "../assets/bbb.jpg";
import amsalogo from "../assets/amsalogo.png";
import smalogo from "../assets/smalogo.png";

const Footer = () => {
  return (
    <Flex
      
      bg="darkgreen"
      justify="center"
      display="block"
      p={5}
      gap={3}
    >
      <Box align="Center" justifyContent="Center" color="gray" gap={6}>
        <Image align="Center" src={FooterLogo} />

        <Heading color="white" size="md" p={2}>
          MoveCo.net
        </Heading>
        <Text p={1}>1439 Crescent Ave Lewisville TX 75057</Text>
        <Text p={1}>(972)250-1100(817)380-5398 Toll Free:(800)590-0928</Text>
        <Text p={1}>TX DMV No.006044279C</Text>
        <Text p={1}>US Dot #1432374 MC#541225</Text>
      </Box>
      <Flex display="flex" justifyContent="center" p={2}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
          <Image width={50} height={50} src={bbb} />
          <Image width={50} height={50} src={amsalogo} />
          <Image width={50} height={50} src={smalogo} />
        </Box>
      </Flex>
      <Flex direction="column" >
        <Box
          bg="#025702"
          color="white"
          textAlign="center"
          p={2}
        >
          <Text>
            Copyright © MoveCo.Net. All rights reserved. Privacy Notice
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Footer;
