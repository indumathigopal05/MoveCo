import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  VStack,
  Text,
  FormErrorMessage,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  PhoneIcon,
  EmailIcon,
  CalendarIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";

const GetMovingQuote = () => {
  const [message, setMessage] = useState("");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      dob: Yup.date().required("Date of birth is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      setMessage("We will call you shortly!");
    },
  });

  return (
    <Box
      p={6}
      bg="gray.100"
      w={isMobile ? "100%" : "50%"}
      //borderRadius="md"
      maxW="lg"
      mx="auto"
      mt={isMobile ? 10: 3}
      mb={isMobile ? 10:3}
      
      justifyItems="center"
    >
      <Heading mb={4} size="md"  >
        Get a Moving Quote
      </Heading>
      <form onSubmit={formik.handleSubmit} >
        <VStack spacing={4}>
          {/* First Name */}
          <FormControl
            isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          >
            <InputGroup>
              <InputLeftAddon>
                <InfoOutlineIcon />
              </InputLeftAddon>
              <Input
                name="firstName"
                placeholder="Enter your first name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          {/* Last Name */}
          <FormControl
            isInvalid={formik.touched.lastName && !!formik.errors.lastName}
          >
            <InputGroup>
              <InputLeftAddon>
                <InfoOutlineIcon />
              </InputLeftAddon>
              <Input
                name="lastName"
                placeholder="Enter your last name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
          </FormControl>

          {/* Date of Birth */}
          <FormControl isInvalid={formik.touched.dob && !!formik.errors.dob}>
            <InputGroup>
              <InputLeftAddon>
                <CalendarIcon />
              </InputLeftAddon>
              <Input
                name="dob"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.dob}</FormErrorMessage>
          </FormControl>

          {/* Phone Number */}
          <FormControl
            isInvalid={formik.touched.phone && !!formik.errors.phone}
          >
            <InputGroup>
              <InputLeftAddon>
                <PhoneIcon />
              </InputLeftAddon>
              <Input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
          </FormControl>

          {/* Email */}
          <FormControl
            isInvalid={formik.touched.email && !!formik.errors.email}
          >
            <InputGroup>
              <InputLeftAddon>
                <EmailIcon />
              </InputLeftAddon>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </InputGroup>
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          {/* Submit Button */}
          <Button colorScheme="teal" type="submit" w="50">
            Submit
          </Button>
        </VStack>
      </form>

      {message && (
        <Text mt={4} color="green.500" fontWeight="bold">
          {message}
        </Text>
      )}
    </Box>
  );
};

export default GetMovingQuote;
