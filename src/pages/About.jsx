import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Input,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import AboutHeader from "../assets/AboutHeader.jpg";

const About = () => {
  return (
    <Box>
      {/* Header Image */}
      <Image
        src={AboutHeader}
        alt="Header Image"
        w="100%"
        h={{ base: "20vh", md: "70vh" }}
        objectFit="cover"
      />

      {/* Two Columns Section */}
      <Flex
        //w="85%"
        mx={{ base: "0", md: "100px" }}
        py={10}
        px={4}
        direction={{ base: "column", md: "row" }}
        gap={8}
        //justifyContent="space-between"
      >
        {/* Left Column: Text */}
        <Box display="flex" flexDirection="column" gap={6} flex="1">
          <Text fontSize="lg" fontFamily="sans-serif">
            We move coast to coast under our own authority. Moveco.Net is
            licensed with the Texas Department of Motor Vehicles (TXDMV
            #006044279C) and the US Department of Transportation (USDOT
            #1432374).
          </Text>

          <Text fontSize="lg" fontFamily="sans-serif">
            MoveCo.net is a member with the Better Business Bureau, and the
            Southwest Movers Association (SMA)
          </Text>

          <Text fontSize="lg" fontFamily="sans-serif">
            What does membership with the BBB, and SMA mean to you, our
            customer? Not only is there a set of ethics MoveCo.net must abide by
            to maintain membership with these organizations. You, our customer
            also have the right to arbitration/mediation if you’re unsatisfied
            with any of the services by MoveCo.Net. This again protects you the
            consumer, our customer.
          </Text>

          <Heading size="md">Goal</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            Our goal is simple: we want you to be impressed enough with our
            service to give our business cards to your friends and co-workers.
            And post your text and Video testimonial on our website. Not to
            mention, use us the next time you move.
          </Text>

          <Heading size="md">100s of Customer Testimonials</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            Our online testimonial board goes a step further. You can post your
            moving experience for our future customers to see, you can also go
            to our web site and see over 10 (ten) years of customer comments.
            Our crews make the difference. We conduct background checks and
            random drug tests.
          </Text>

          <Text fontSize="lg" fontFamily="sans-serif">
            Our crews are trained professionals. We never used day laborers or
            contract our moves out to other companies. After all, our crews are
            our reputation. Our trucks are well-maintained and have high-quality
            pads, straps, and dollys. Our fleet is GPS tracked as well, in real
            time. Payment may be made with personal check (upon approval), cash
            or any major credit card. You decide what is convenient for you.
            Payment is made at the drop-off location.
          </Text>

          <Heading size="md">You can get a true online real-time quote</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            Our advanced real-time move quotation software allows you to create
            binding quotations just by specifying the inventory you want to move
            and their locations. It is that simple, in minutes you get your
            quotation number along with all the binding documents, sent directly
            to your email inbox.
          </Text>

          <Heading size="md">Schedule a free In-Home Estimate</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            You also have option to online schedule a free In-Home Estimate of
            your upcoming moving requirements. An In-Home Estimate is such that
            our moving specialists first visit your home and conduct a full
            walk-thru of the home, answer all the questions and concerns you
            might have, then analyze all the inventory and understand moving
            locations and at the end, calculate a quotation for you on the spot
            before leaving your home. So why not go ahead and book a free
            In-Home Estimate of your upcoming move.
          </Text>

          <Text fontSize="lg" fontFamily="sans-serif">
            A lot of our competitors do send out their sales personnel for their
            moving consultation, whereas we send out current professional
            drivers who have years of real moving experience.
          </Text>

          <Text fontSize="lg" fontFamily="sans-serif">
            During the In-Home Estimate appointment, you can also consider our
            professional packing services in which our professional movers will
            estimate the cost it will take to pack your possessions safely in
            boxes.
          </Text>

          <Heading size="md">Moving Supplies</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            When you plan a move, you certainly want to keep your possessions
            safe and organized. Boxes, packing material, moving safety material,
            and all the other rest of moving supplies are also sold here in our
            online shop. You can visit our online Packing supply store and have
            them delivered directly at your doorstep with FREE* shipping.
          </Text>

          <Heading size="md">Storage Services</Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            Moving from one house to another, and need an intermediate place to
            store your belongings? Out of Lewisville area for a few months and
            want to safely store your belongings? You can try MoveCo.Net as we
            offer professional storage services for our moving customers. Our
            professional storage service comes with free safety Packing of your
            belongings, and offer hassle-free end-to-end moving. You can buy
            storage space from 10×20 feet to a 10×30, with any number of
            multiples and combinations. This service is currently offered in the
            Dallas area only.
          </Text>

          <Heading size="md">
            Professionally Packing Your Possessions During the Move
          </Heading>
          <Text fontSize="lg" fontFamily="sans-serif">
            Get your belongings packaged by professionals right in front of you:
            Our professional movers can also give you an estimation of our
            professional packing services when they visit your house for the
            free In-Home Estimate. Our professional packing service ensures just
            the right packing of your possessions by professional movers who
            have years of current experience in packing and moving valuable
            goods.
          </Text>

          <Heading size="md">
            What do you get when you choose MoveCo.Net?
          </Heading>
          <UnorderedList fontSize="lg" fontFamily="sans-serif" spacing={4}>
            <ListItem>your consumer rights with the BBB, and SMA</ListItem>
            <ListItem>$50,000 bond</ListItem>
            <ListItem>$40,000 Standard cargo insurance</ListItem>
            <ListItem>2 million General liability insurance</ListItem>
            <ListItem>
              MoveCo.net’s in-house policy to repair or replace items damage in
              the move. (see website for details)
            </ListItem>
            <ListItem>
              Free disassembly and reassembly of your washer, dryer, mirrors on
              dressers, and standard beds. Other items can be disassembled and
              reassembled for nominal fee, (see website for details). Moving the
              furniture where you want it in each room.
            </ListItem>
            <ListItem>
              All manpower, fuel, truck, trailer, pad, and equipment costs
            </ListItem>
          </UnorderedList>
        </Box>

        {/* Right Column: Recent Blogs */}
        <Box
          bg="#F9F9F9"
          borderRadius="md"
          p={6}
          height="40%"
          //w={{ base: "100%", md: "40%" }}
        >
          <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="left">
            Recent Blogs
          </Text>

          <Flex mb={4} flexDirection="row" >
            <Input
              type="text"
              placeholder="Search blogs..."
              borderRadius="0"
              //borderRadius="
              border="1px solid #d9d9d9;"
             
              flex="1"
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

export default About;
