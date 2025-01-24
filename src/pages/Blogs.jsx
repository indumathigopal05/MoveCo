import React from "react";
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { FaHome, FaArchive, FaEnvelope, FaSearch } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

const FlexExample = () => {
  return (
    <Box
      gap={{ base: 2, md: 4 }}
      bg="#333"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 20 }}
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
    >
      {/* First child: Column layout */}
      <Flex
        direction="column"
        gap={4}
        justifyContent="center"
        alignItems="center"
        width={{ base: "100%", lg: "20%" }}
        p={4}
      >
        {/* Logo Box */}
        <Box
          bg="white"
          //p={4}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="20%"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              width={{ base: "70%", md: "50%" }}
              height={{ base: "70%", md: "50%" }}
              src={Logo}
              alt="Logo"
            />
          </Box>
        </Box>

        {/* Icon Row */}
        <Box
          width="90%"
          height="50px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            width="30%"
            height="50px"
            background="rgba(255, 255, 255, 0.1)"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaHome} boxSize={6} color="white" />
          </Box>
          <Box
            width="30%"
            height="50px"
            background="rgba(255, 255, 255, 0.1)"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaArchive} boxSize={6} color="white" />
          </Box>
          <Box
            width="30%"
            height="50px"
            background="rgba(255, 255, 255, 0.1)"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaEnvelope} boxSize={6} color="white" />
          </Box>
        </Box>

        {/* Search Input */}
        <Flex
          direction="column"
          bg="blackAlpha.100"
          width="90%"
          height="10%"
          p={4}
          borderRadius="md"
        >
          <InputGroup>
            <InputRightElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.500" />
            </InputRightElement>
            <Input
              type="text"
              placeholder="Search here..."
              focusBorderColor="black"
            />
          </InputGroup>
        </Flex>

        {/* Other Boxes */}
        <Flex
          direction="column"
          bg="black"
          width="90%"
          borderRadius="md"
          gap={2}
        >
          <Box>
            <Text color="white" p={4}>
              Category List
            </Text>
          </Box>
        </Flex>

        <Flex
          direction="column"
          bg="black"
          color="gray"
          width="90%"
          p={4}
          borderRadius="md"
        >
          <Box>
            <Text color="white" p={4}>
              Post List
            </Text>
          </Box>
          <Box>
            <Text>Packing the House!</Text>
            <Text>Moving and Handling the Unpredictable!</Text>
            <Text>Moving?</Text>
            <Text>Our First Post!</Text>
          </Box>
        </Flex>

        <Flex
          direction="column"
          bg="black"
          width="90%"
          color="gray"
          p={4}
          borderRadius="md"
        >
          <Box>
            <Text color="white" p={4}>
              Month List
            </Text>
          </Box>
          <Box>
            <Text>2024</Text>
            <Text>January</Text>
            <Text>2023</Text>
          </Box>
        </Flex>
      </Flex>

      {/* Second child: Row layout */}
      <Flex
        direction="column"
        bg="white"
        fontFamily="Poppins"
        gap={4}
        justifyItems="center"
        borderRadius="md"
        flex="2"
        width={{ base: "100%", lg: "80%" }}
        p={{ base: 4, lg: 24 }}
      >
        <Heading size="lg" color="steelblue">
          Packing House
        </Heading>
        <Text size="xs">Professional Packing Service</Text>
        <Text>
          It is 8am the day before your move. There is a knock at your door. The
          clean-cut packing crew is wearing matching uniforms. You know based on
          your prior research that this company does background checks, drug
          tests, and has vetted the references of each packing/moving crew
          member. It does not matter how skilled your mover is, if you would not
          trust him in your house. After introductory courtesies, you invite
          them into your house and do a quick walk through with the crew leader,
          identifying concerns and answering questions. All boxes will be
          labeled based on where you will want the items at your new address. As
          you have pointed out individual rooms, the crew leader has taken note:
          master bedroom, Emilie’s bedroom, Wesley’s bedroom, laundry,
          kitchenette, et cetera. Meanwhile, the other members of the crew have
          brought in piles of new sturdy boxes, and packing supplies.
        </Text>
        <Text>
          There is packing tape, shrink wrap, bubble wrap, wardrobe boxes, 1.5
          cubic ft. book boxes, 3.1 cubic ft. median boxes, and 4.5 cubic ft.
          large boxes, 4.5 cubic ft. dish packs and picture/mirror boxes. You’re
          asked to sign the contract before they start. The contract is
          familiar, it is the same proposal you reviewed when you reserved your
          move date.{" "}
        </Text>
        <Text>
          The crew gets to work. Carefully wrapping all breakable items, and
          labeling the boxes, “fragile” or “glass”. Books and heavier items are
          packed in 1.5 cubic ft. book boxes. Lighter items are packed in larger
          boxes. Hanging clothes are packed in wardrobe boxes; which are like
          mini closets with a metal bar to hang the clothes.
        </Text>
        <Text>
          You are on hand to answer any questions the crew may have, one of
          which is, “What should be packed in your priority boxes?” The stuff
          you will need immediately after the move. Things like coffee, cups,
          coffee pot for you and tooth brushes, and pajamas for the kids. If
          what you need most is identified now, packed and labeled; you will not
          be searching every box on the move night just to put the kids to bed.
          The first day in your new home can be kind of chaotic. A few well
          packed “priority boxes” can make all the difference.
        </Text>
        <Text>
          The phone rings a few hours later, it is the moving company’s office.
          The lady on the phone just wants to know if everything is all right,
          and going smoothly. She asks if you have any questions. She then
          confirms the time the move crew will be there in the morning. It was
          just a courtesy call.
        </Text>
        <Text>
          As the day progresses, neat stacks of boxes about 4-5 feet tall fill
          the house. Each box is labeled with its contents and what room it is
          destined for at the new house. Boxes that are sealed with tape are
          about 40 % stronger than boxes that are just folded. Every box is
          sealed with tape.
        </Text>
        <Text>
          As the day comes to a close, your entire home is packed by
          professionals. The crew leader does a walk through with you to double
          check that everything that needed to be packed, was indeed packed.
          Meanwhile, the crew picks up any trash, empty tape rolls, box bundle
          binders, et cetera.
        </Text>
        <Text>
          The crew leader asks you to sign the move contract acknowledging the
          packing services performed. He leaves you with a copy of the updated
          move contract with actual box numbers, as well as his business card.
          Goodbyes are said and the crew departs. You look around with great
          relief. What would have taken an average family (with friends helping)
          over a week of exhausting work, and multiple trips to the box store,
          has been completed in just one day. You think to yourself this is the
          way to prep for a move. You are ready for the movers tomorrow!
        </Text>
      </Flex>
    </Box>
  );
};

export default FlexExample;
