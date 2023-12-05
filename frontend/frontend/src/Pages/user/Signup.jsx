import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUserRegistration } from "../../Redux/user/RegistrationSlice";


const Signup = ({updatechild}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });
 

  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignup = async () => {
    // Form validation
    // if (!formData.name.trim()) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
    //   return;
    // } else {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, name: '' }));
    // }

    // if (!formData.email.trim()) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
    //   return;
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
    //   return;
    // } else {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, email: '' }));
    // }

    // if (!formData.phone_number.trim()) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, phone_number: 'Phone number is required' }));
    //   return;
    // } else if (!/^\d{10}$/.test(formData.phone_number)) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, phone_number: 'Invalid phone number' }));
    //   return;
    // } else {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, phone_number: '' }));
    // }

    // if (!formData.password.trim()) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
    //   return;
    // } else {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, password: '' }));
    // }

    // if (formData.password !== formData.confirmPassword) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
    //   return;
    // } else {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
    // }

    // Handle signup logic here

    // Assuming signup logic is successful, navigate to "/"
    try {
      const response = await axios.post('http://127.0.0.1:8000/accounts/otp/', {
        email: formData.email,
      });
  
      // Check the status code and handle accordingly
      if (response.status === 201) {
        console.log(response)
      
        const otp = response.data.otp;

        // Dispatch the action to update the Redux store with user details and OTP
        const userData = {
          name:formData.name,
          email:formData.email,
          phone_number:formData.phone_number,
          password:formData.password,
          otp:otp,
          // Add any other user details you want to store in the Redux store
        };
        dispatch(setUserRegistration(userData));
        const data = "haiii"
        updatechild(data)
        // Assuming signup logic is successful, navigate to "/"
        navigate('/b/register');
      } else {
        console.error('Unexpected status code:', response.status);
        // Handle other status codes if needed
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          Sign Up
        </Heading>
        <FormControl id="name" mb={4}>
          <FormLabel color="white">Name</FormLabel>
          <Input type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
          {errorMessages.name && <Text color="red">{errorMessages.name}</Text>}
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel color="white">Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" name="email" onChange={handleChange} />
          {errorMessages.email && <Text color="red">{errorMessages.email}</Text>}
        </FormControl>
        <FormControl id="phone_number" mb={4}>
          <FormLabel color="white">Phone Number</FormLabel>
          <Input type="tel" placeholder="Enter your phone number" name="phone_number" onChange={handleChange} />
          {errorMessages.phone_number && <Text color="red">{errorMessages.phone_number}</Text>}
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
          {errorMessages.password && <Text color="red">{errorMessages.password}</Text>}
        </FormControl>
        <FormControl id="confirmPassword" mb={6}>
          <FormLabel color="white">Confirm Password</FormLabel>
          <Input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            onChange={handleChange}
          />
          {errorMessages.confirmPassword && <Text color="red">{errorMessages.confirmPassword}</Text>}
        </FormControl>
        <Box mb={3} textAlign="center">
          <Button colorScheme="red" onClick={handleSignup} w="80%">
            Sign Up
          </Button>
        </Box>
        <Box mt={3} display="flex" justifyContent="space-between">
          <Link href="#" color="white" fontSize="sm" flexShrink={1}>
            Already have an account? Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
