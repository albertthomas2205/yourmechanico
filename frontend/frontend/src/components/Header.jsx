import { Box, Flex, HStack, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <Box
      bg="black"
      color="white"
      p={5}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* Left Side - Logo */}
        <Box>
          {/* Add your large logo component or image here */}
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Your Logo
          </Text>
        </Box>

        {/* Right Side - Links with Increased Spacing */}
        <HStack spacing={20}>
          {/* Use Text component for navigation */}
          <Text color="white">About</Text>
          <Text color="white">Products</Text>

          {/* Use Link component for navigation */}
          <Link as={RouterLink} to="/b/login" color="white">
            Login
          </Link>

          <Link as={RouterLink} to="/b/register" color="white">
            Register
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
