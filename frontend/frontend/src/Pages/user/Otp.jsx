import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import axios

const Otp = () => {
  const navigate = useNavigate();
  const { name, email, phone_number, otp, password } = useSelector(
    (state) => state.user_registration
  );
  console.log(name, email, otp);

  const [enteredOtp, setEnteredOtp] = useState('');
  const [error, setError] = useState(null);

  const formdata = { name: name, email: email, phone_number: phone_number, otp: otp, password: password };

  const handleVerifyOTP = async () => {
    try {
      // Add your logic to verify the OTP here
      // For demonstration purposes, let's consider a simple case
      const isValidOTP = enteredOtp === otp;

      if (isValidOTP) {
        const response = await axios.post('http://127.0.0.1:8000/accounts/register/', formdata);

        // Check the status code and handle accordingly
        if (response.status === 201) {
          console.log('User registered successfully');
          navigate('/b/login');
        } else {
          console.log('Error occurred');
        }
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
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
      <Box direction="column" align="center" justify="center" p={4} borderRadius={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={6} color="white">
          Verify OTP
        </Heading>
        {error && (
          <Text color="red" mb={4} textAlign="center">
            {error}
          </Text>
        )}
        <FormControl id="otp" mb={6}>
          <FormLabel color="white">Enter OTP</FormLabel>
          <Input
            type="text"
            placeholder="Enter the OTP received"
            value={enteredOtp}
            onChange={(e) => setEnteredOtp(e.target.value)}
          />
        </FormControl>
        <Box mb={3} textAlign="center">
          <Button colorScheme="red" onClick={handleVerifyOTP} w="80%">
            Verify OTP
          </Button>
        </Box>
        <Box mt={3} display="flex" justifyContent="space-between">
          <Link href="#" color="white" fontSize="sm" flexShrink={1}>
            Resend OTP
          </Link>
          <Link href="#" color="white" fontSize="sm" flexShrink={1}>
            Back to Login
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Otp;