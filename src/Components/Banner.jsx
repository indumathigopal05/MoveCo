// // import React, { useState, useEffect } from "react";
// import { Flex, Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
// import GetMovingQuote from "../Components/GetMovingQuote";
// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";

// const Banner = () => {
//   // State to manage the current background image
//   const [currentImage, setCurrentImage] = useState(image1);

//   // Set different background positions based on screen size
//   const boxWidth = useBreakpointValue({ base: "80%", md: "50%" });
//   const boxHeight = useBreakpointValue({ base: "40%", md: "30%" });
//   const headingSize = useBreakpointValue({ base: "md", md: "lg" });
//   const textSize = useBreakpointValue({ base: "sm", md: "md" });

//   useEffect(() => {
//     const images = [image1, image2];
//     let index = 0;

//     const interval = setInterval(() => {
//       index = (index + 1) % images.length; // Toggle between 0 and 1
//       setCurrentImage(images[index]);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <Flex
//       backgroundColor="lightgreen"
//       minHeight="100vh"
//       justifyContent="center"
//       alignItems="center"
//       backgroundImage={`url(${currentImage})`}
//       backgroundSize="cover"
//       backgroundPosition="center"
//       direction={{ base: "column", md: "row" }} // Stack content on mobile
//     >
//       {/* Professional Pack/Unpack Box */}
//       <Box
//         backgroundColor="rgba(0,0,0,0.51)"
//         width={boxWidth}
//         padding={10}
//         borderRadius={10}
//         height={boxHeight}
//         color="white"
//         display="flex"
//         flexDirection="column"
//       >
//         <Heading size={headingSize} mb={4}>
//           Professional Pack/Unpack Services
//         </Heading>
//         <Text fontSize={textSize}>
//           Let us take care of packing and unpacking of your household goods,
//           while keeping your entire moving plan hassle-free.
//         </Text>
//       </Box>

//       {/* Get Moving Quote Box */}
//       <Box width={{ base: "90%", md: "40%" }} mt={{ base: 6, md: 0 }}>
//         <GetMovingQuote />
//       </Box>
//     </Flex>
//   );
// };

// export default Banner;
import React, { useState, useEffect } from "react";
import { Flex, Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import GetMovingQuote from "../Components/GetMovingQuote";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const Banner = () => {
  // State to manage the current background image
  const [currentImage, setCurrentImage] = useState(image1);

  // Set different background positions based on screen size
  const boxWidth = useBreakpointValue({ base: "80%", md: "50%" });
  const boxHeight = useBreakpointValue({ base: "40%", md: "30%" });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });
  const textSize = useBreakpointValue({ base: "sm", md: "md" });

  useEffect(() => {
    const images = [image1, image2];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length; // Toggle between 0 and 1
      setCurrentImage(images[index]);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Flex
      backgroundColor="lightgreen"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundImage={`url(${currentImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      direction={{ base: "column", md: "row" }} // Stack content on mobile
    >
      {/* Professional Pack/Unpack Box */}
      <Box
        backgroundColor="rgba(0,0,0,0.51)"
        width={boxWidth}
        padding={10}
        borderRadius={10}
        height={boxHeight}
        color="white"
        display="flex"
        flexDirection="column"
      >
        <Heading size={headingSize} mb={4}>
          Professional Pack/Unpack Services
        </Heading>
        <Text fontSize={textSize}>
          Let us take care of packing and unpacking of your household goods,
          while keeping your entire moving plan hassle-free.
        </Text>
      </Box>

      {/* Get Moving Quote Box */}
      <Box width={{ base: "90%", md: "40%" }} mt={{ base: 6, md: 0 }}>
        <GetMovingQuote />
      </Box>
    </Flex>
  );
};

export default Banner;
