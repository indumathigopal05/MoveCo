// import React from 'react';
import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import contact from "../assets/contact.jpg";
import SendEmail from "../Components/SendEmail";

const Contact = () => {
  return (
    <Box paddingTop={5}>
      <Image src={contact} alt="Contact Header" />
      <Flex direction={{ base: "column", md: "row" }}>
        {/* Contact Information Section */}
        <Box
          width={{ base: "100%", md: "70%" }}
          px={{ base: 4, md: 20 }}
          py={10}
        >
          <Heading size="md">Dallas</Heading>
          <Box p={2}>
            <Text>1439 Crescent Ave,</Text>
            <Text>Lewisville, TX-75057</Text>
          </Box>
          <Text p={2}>Office: 972-250-0925</Text>
          <Text p={2}>Toll Free: 800-590-0928</Text>

          <Heading size="md">Houston</Heading>
          <Text p={2}>Office: 281-825-5544</Text>

          <Heading size="md">Austin</Heading>
          <Text p={2}>Office: 512-366-7901</Text>

          {/* Email Section */}
          <Box>
            <Heading size="md">Send an Email</Heading>
            <Text p={2}>Send us an email, we would love to hear from you!</Text>
            <Text p={2}>
              Just fill out the form, and a representative will get back to you
              as soon as possible
            </Text>
            <SendEmail />
          </Box>
        </Box>

        {/* Map Section */}
        <Box
          width={{ base: "100%", md: "30%" }}
          px={{ base: 4, md: 10 }}
          py={10}
        >
          <Box
            bg="white"
            height="300px"
            boxShadow="lg"
            borderRadius="md"
            overflow="hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.9394529774379!2d-97.00336053546414!3d33.062842389722675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c31ff0889f581%3A0xb7f130061f7cfa81!2sMoveCo.net%20LLC!5e0!3m2!1sen!2sin!4v1695690218411!5m2!1sen!2sin"
              width="600"
              height="310"
              frameborder="0"
              //style="border:"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
