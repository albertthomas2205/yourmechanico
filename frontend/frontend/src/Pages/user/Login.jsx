import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Link } from '@chakra-ui/react';
import Background from './Background';

const Login = () => {
  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button clicked');
  };

  return (
 
    <Box
      w="full"
      maxW="xl"
      mx={4} // Adjust the left and right margin
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="rgba(0, 0, 0, 0.5)" // Transparent black background (adjust the last value for opacity)
    >
      <Box
        direction="column"
        align="center"
        justify="center"
        p={4}
        borderRadius={8}
      >
        <Heading as="h2" size="xl" textAlign="center" mb={6} color="white">
          Login
        </Heading>
        <FormControl id="email" mb={4}>
          <FormLabel color="white">Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Box mb={3} textAlign="center">
          <Button colorScheme="red" onClick={handleLogin} w="80%">
            Login
          </Button>
        </Box>
        <Box mb={5} textAlign="center">
          <Button colorScheme="red" variant="outline" w="80%">
            Sign in with Google
          </Button>
        </Box>
        <Box mt={3} display="flex" justifyContent="space-between">
          <Link href="#" color="white" fontSize="sm" flexShrink={1}>
            Forgot Password?
          </Link>
          <Link href="#" color="white" fontSize="sm" flexShrink={1}>
            Don't have an account? Sign up
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
