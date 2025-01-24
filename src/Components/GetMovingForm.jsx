import React, { useState } from "react";
import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaUser, FaPhone, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const GetMovingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
    setSuccessMessage("");
  };

  // Validate inputs
  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.dob) errors.dob = "Date of birth is required.";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      errors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.email || !emailRegex.test(formData.email))
      errors.email = "Enter a valid email address.";

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {
      setSuccessMessage("Thank you! We will call you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        phone: "",
        email: "",
      });
      setError({});
    }
  };

  return (
    <Box
      // bg="#f9f9f9"
       p={5}
      // borderRadius="md"
      // boxShadow="lg"
      // maxW="500px"
      // mx="auto"
    >

      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={error.firstName} mb={4}>
        
          <InputGroup>
            <InputLeftElement
              children={<Icon as={FaUser} color="gray.400" />}
            />
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{error.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={error.lastName} mb={4}>
          
          <InputGroup>
            <InputLeftElement
              children={<Icon as={FaUser} color="gray.400" />}
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{error.lastName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={error.dob} mb={4}>
          
          <InputGroup>
            <InputLeftElement
              children={<Icon as={FaCalendarAlt} color="gray.400" />}
            />
            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{error.dob}</FormErrorMessage>
        </FormControl>


        <FormControl isInvalid={error.phone} mb={4}>
          
          <InputGroup>
            <InputLeftElement
              children={<Icon as={FaPhone} color="gray.400" />}
            />
            <InputRightElement children={<Text color="gray.500"></Text>} />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{error.phone}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={error.email} mb={4}>
          
          <InputGroup>
            <InputLeftElement
              children={<Icon as={FaEnvelope} color="gray.400" />}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </InputGroup>
          <FormErrorMessage>{error.email}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="green" width="30%" mt={4}>
          Next
        </Button>
      </form>
      {successMessage && (
        <Text color="green.500" mt={4} textAlign="center">
          {successMessage}
        </Text>
      )}
    </Box>
  );
};

export default GetMovingForm;
