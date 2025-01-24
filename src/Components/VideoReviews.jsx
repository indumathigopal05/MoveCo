// // import React, { useState } from "react";
// import { Flex, Box, Heading } from "@chakra-ui/react";

// const VideoReviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const videos = [
//     "https://www.youtube.com/embed/OC8twKHnGxQ",
//     "https://www.youtube.com/embed/7OlTUkfB3Bw",
//     "https://www.youtube.com/embed/A1BDCK0Jq4w",
//     "https://www.youtube.com/embed/ekZrVdNjcjQ",
//     "https://www.youtube.com/embed/nFMYZIAkn5k",
//     "https://www.youtube.com/embed/tchHgNc4flY",
//     "https://www.youtube.com/embed/p9XANqXhq8Y",
//     "https://www.youtube.com/embed/1C0YQIjev9o",
//   ];

//   const videosPerGroup = { base: 1, md: 3 }; // 1 video on small screens, 3 on larger
//   const totalGroups = Math.ceil(videos.length / videosPerGroup.md); // Total number of groups for large screens

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   const startIndex = currentIndex * videosPerGroup.md;
//   const displayedVideos = videos.slice(
//     startIndex,
//     startIndex + videosPerGroup.md
//   );

//   return (
//     <Flex direction="column" p={5}>
//       <Box align="center" mb={10}>
//         <Heading>Client Reviews</Heading>
//       </Box>

//       {/* Video Component */}
//       <Flex
//         justifyContent="center"
//         alignItems="center"
//         flexWrap="wrap"
//         gap={4}
//       >
//         {displayedVideos.map((video, index) => (
//           <Box
//             key={index}
//             flex={{ base: "1 1 100%", md: "1 1 calc(33.33% - 16px)" }} // Responsive behavior
//             minW="280px"
//             maxW="352px"
//           >
//             <iframe
//               width="100%"
//               height="200"
//               src={video}
//               title={`video-${index}`}
//               style={{ borderRadius: "8px" }}
//             ></iframe>
//           </Box>
//         ))}
//       </Flex>

//       {/* Pagination Dots */}
//       <Flex justify="center" align="center" mt={5}>
//         <ul
//           style={{
//             display: "flex",
//             listStyle: "none",
//             padding: 0,
//             gap: "10px",
//           }}
//         >
//           {Array.from({ length: totalGroups }).map((_, index) => (
//             <li
//               key={index}
//               onClick={() => handleDotClick(index)}
//               style={{
//                 width: "12px",
//                 height: "12px",
//                 borderRadius: "50%",
//                 backgroundColor: currentIndex === index ? "green" : "lightgray",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s",
//               }}
//             ></li>
//           ))}
//         </ul>
//       </Flex>
//     </Flex>
//   );
// };

// export default VideoReviews;

import React from "react";
import Slider from "react-slick";
import { Box, Heading, Flex } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoReviews = () => {
  const videos = [
    "https://www.youtube.com/embed/OC8twKHnGxQ",
    "https://www.youtube.com/embed/7OlTUkfB3Bw",
    "https://www.youtube.com/embed/A1BDCK0Jq4w",
    "https://www.youtube.com/embed/ekZrVdNjcjQ",
    "https://www.youtube.com/embed/nFMYZIAkn5k",
    "https://www.youtube.com/embed/tchHgNc4flY",
    "https://www.youtube.com/embed/p9XANqXhq8Y",
    "https://www.youtube.com/embed/1C0YQIjev9o",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    centerMode: true, // Center slides
    centerPadding: "0", // No padding on the sides
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 video per slide
          arrows: false, // Optional: Hide arrows for cleaner mobile UI
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <Flex direction="column" p={5} justify="center" align="center">
      {/* Heading */}
    
      <Box align="center" mb={8}>
        <Heading>Client Reviews</Heading>
      </Box>

      {/* Video Carousel */}
      <Box w={{ base: "90%", md: "80%", lg: "70%"}}>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
            >
              <iframe
                src={video}
                title={`video-${index}`}
                style={{
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  width: "100%", // Responsive full width
                  //maxWidth: "600px", // Limit width for larger screens
                  height: "250px", // Default height
                }}
                allowFullScreen
              ></iframe>
            </Box>
          ))}
        </Slider>
        </Box>
      
    </Flex>
  );
};

export default VideoReviews;
