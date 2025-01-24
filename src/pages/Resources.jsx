import React from 'react'
import { Box } from "@chakra-ui/react";
import VideoReviews from '../Components/VideoReviews'
import ClientReviews from '../Components/ClientReviews'

const Resources = () => {
  return (
   <Box bg="#5b6674">
     <VideoReviews />
     <ClientReviews />
   </Box>
  )
}

export default Resources
