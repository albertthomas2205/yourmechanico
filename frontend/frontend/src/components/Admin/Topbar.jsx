// TopBar.js
import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';

const Topbar = () => {
  return (
    <Box bg="gray.800" p="4" textAlign="right" w="100%">
      <Button colorScheme="red" variant="ghost">
        Logout
      </Button>
    </Box>
  );
};

export default Topbar;
