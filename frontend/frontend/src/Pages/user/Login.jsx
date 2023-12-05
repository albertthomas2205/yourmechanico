import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Link } from '@chakra-ui/react';
import Background from './Background';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { set_Authentication } from '../../Redux/user/AuthenticationSlice';
// import jwt_decode from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setFormError([]);

    try {
      const res = await axios.post('http://127.0.0.1:8000/accounts/login/', { email, password });
      if (res.status === 200) {
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);
        console.log(res.data);
        dispatch(
          set_Authentication({
            name: res.data.name,
            isAuthenticated: true,
            // isAdmin: res.data.isAdmin
          })
        );
        navigate('/');
        return res;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        setFormError(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Box
      w="full"
      maxW="xl"
      mx={4}
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      bg="rgba(0, 0, 0, 0.5)"
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
          <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {formError.length > 0 && (
          <Box color="red" textAlign="center" mb={3}>
            {formError.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </Box>
        )}
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
