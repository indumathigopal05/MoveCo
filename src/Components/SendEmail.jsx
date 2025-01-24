import React, { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required.";
    }
    if (!formData.email) {
      formErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(formData.email)) {
      formErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Invalid phone number. Must be 10 digits.";
    }
    if (!formData.message) {
      formErrors.message = "Message is required.";
    }

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for current field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <Box
      w={{ base: "90%", sm: "80%", md: "50%", lg: "60%" }}
      //mx="auto"
      //mt={8}
      //p={5}
      //border="1px solid #ccc"
      //borderRadius="md"
      //boxShadow="lg"
    >
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={errors.name} mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel>Your Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone} mb={4}>
          <FormLabel>Your Phone Number</FormLabel>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <FormErrorMessage>{errors.phone}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message} mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message"
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          bg="green"
          color="white"
          _hover={{ bg: "lightgreen" }}
          w={{base:"50%",md:"50%"}}
        >
          Send
        </Button>
      </form>

      {isSubmitted && (
        <Text mt={4} color="green.500" textAlign="center">
          Thank you for sending your message!
        </Text>
      )}
    </Box>
  );
};

export default ContactForm;
