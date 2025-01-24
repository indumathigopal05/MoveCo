import React from "react";
import { Box, Heading, Text, Flex, Input, Button } from "@chakra-ui/react";

import GetMovingForm from "../Components/GetMovingForm"
const Services = () => {
  return (
    <Box height="130vh" px={{ base: 5, md: 20 }} py={{ base: 10, md: 20 }} bg="white">
      <Flex
        width="100%"
        flexDirection={{ base: "column", md: "row" }}
        gap={10}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {/* Instant Online Estimate Section */}
        <Flex direction="column"  flex="3" alignItems={{ base: "center", md: "flex-start" }}>
          <Box width={{ base: "100%", md: "90%" }} textAlign={{ base: "center", md: "left" }}>
            <Heading size="lg" mb={4}>
              Instant Online Estimate
            </Heading>
            <Text mb={7}>
              Already have an inventory list? Avoid surprises, get an immediate guaranteed fixed price moving quote right now.
            </Text>
          </Box>

          
            <Heading size="lg">Get Moving Quote</Heading>    
            <GetMovingForm />                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            
          
        </Flex>

        {/* Recent Blogs Section */}
        <Box
          bg="#F9F9F9"
          borderRadius="md"
          p={6}
          flex="1"
          width={{ base: "100%", md: "25%" }}
          boxShadow="sm"
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign={{ base: "center", md: "left" }}>
            Recent Blogs
          </Text>

          <Flex mb={4} flexDirection={{base:"column",md:"row"}} gap={2}>
            <Input
              type="text"
              placeholder="Search blogs..."
              borderRadius="0"
              border="1px solid #d9d9d9;"
              flex="1"
              mb={{base:"2",md:"0"}}
            />
            <Button
              bg="green"
              borderRadius="0"
              color="white"
              _hover={{ bg: "green.600" }}
            >
              Search
            </Button>
          </Flex>

          <Text fontSize="lg"></Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;

