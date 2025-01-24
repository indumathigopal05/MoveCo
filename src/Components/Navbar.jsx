import { Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiUsers } from "react-icons/hi2";
import { Box, Flex, HStack, IconButton,  Stack, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import Logo  from "../assets/Logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box bg="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Flex
          alignItems="center"
          mb={{ base: 2, md: 0 }}
          ml={{ base: 0, md: '120px' }}
          w="100%"
        >
          <Image w={50} h={50} src={Logo} alt="Logo" />
        </Flex>

        {/* Desktop Links */}
        <HStack as="nav" spacing={2} display={{ base: 'none', md: 'flex' }} mr={{ md: '90px' }}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              style={({ isActive }) => ({
                padding: '8px 12px',
                borderRadius: '5px',
                color: 'black',
                fontFamily:"Poppins",
                backgroundColor: isActive ? 'teal.600' : 'transparent',
                textDecoration: 'none',
              })}
              
            >
              <Box
        as="span"
        _hover={{
          color: 'green.500', // Changes text color to green on hover
          textDecoration: 'underline', // Adds underline on hover
        }}>
             {link.name}
             
            </Box>

            </NavLink>
          ))}
          <Tooltip label="Book Now" aria-label="Phone tooltip">
          <IconButton
            aria-label="Phone"
            icon={<PhoneIcon />}
            size="sm"
            bg="green.500"
            color="white"
            _hover={{ bg: 'teal.700' }}
          />
          </Tooltip>
          <Tooltip label="Tell a friend about MoveCo" aria-label="Phone tooltip">
          <IconButton
            aria-label="Phone"
            icon={<HiUsers />}
            size="sm"
            bg="green.500"
            color="white"
            _hover={{ bg: 'teal.700' }}

          />
          </Tooltip>
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
          bg="green"
          color="white"
        />
      </Flex>

      {/* Mobile Links */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => ({
                  padding: '8px 12px',
                  borderRadius: '5px',
                  color: 'gray',
                  backgroundColor: isActive ? 'teal.600' : 'transparent',
                })}
              >
                {link.name}
              </NavLink>
            ))}
            <Tooltip label="Tell a friend about MoveCo" aria-label="Phone tooltip">
            <IconButton
              aria-label="Phone"
              icon={<PhoneIcon />}
              size="sm"
              bg="green"
              color="white"
              _hover={{ bg: 'teal.700' }}
            />
            </Tooltip>
          <Tooltip label="Tell a friend about MoveCo" aria-label="Phone tooltip">
          <IconButton
            aria-label="Phone"
            icon={<HiUsers />}
            size="sm"
            bg="green.500"
            color="white"
            _hover={{ bg: 'teal.700' }}

          />
          </Tooltip>
            
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
