import React from "react";
import { Flex, Box, Text, Heading, useBreakpointValue, Container } from "@chakra-ui/react";
import GetMovingQuote from "../Components/GetMovingQuote";
import image1 from "../assets/image1.jpg";
import VideoReviews from "../Components/VideoReviews";
import ClientReviews from "../Components/ClientReviews"
import Banner from "../Components/Banner"
import Footer from "../Components/Footer";

const Home = () => {
  // Set different background positions based on screen size
  const boxWidth = useBreakpointValue({ base: "80%", md: "50%" });
  const boxHeight = useBreakpointValue({ base: "40%", md: "30%" });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    
      <>
      <Banner />
      <Box mt={10}>
      <VideoReviews />
      </Box>
      <Box mt={20}>
        <ClientReviews />
        </Box>
        </>
        
        
       
    
  
    
  
  );
};

export default Home;
