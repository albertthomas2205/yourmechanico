// Sidebar.js
import React from 'react';
import { Box, Flex, Link as ChakraLink, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column" bg="black" color="white" p="4" minW="200px" h="100vh">
      <Box mb="4" textAlign="center">
        <Image src="/images/20231114_135440.png" alt="Logo" boxSize="100px" />
      </Box>
      <NavItem to="/" text="Home" />
      <NavItem to="/userlist" text="User List" />
      <NavItem to="/mechaniclist" text="Mechanic List" />
      <NavItem to="/totalbooking" text="Total Booking" />
      <NavItem to="/services" text="Services" />

      {/* Drawer for smaller screens */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerHeader textAlign="center">
            <Image src="/images/20231114_135440.png" alt="Logo" boxSize="80px" />
          </DrawerHeader>
          <DrawerBody>
            <NavItem to="/" text="Home" onClose={onClose} />
            <NavItem to="/userlist" text="User List" onClose={onClose} />
            <NavItem to="/mechaniclist" text="Mechanic List" onClose={onClose} />
            <NavItem to="/totalbooking" text="Total Booking" onClose={onClose} />
            <NavItem to="/services" text="Services" onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const NavItem = ({ to, text, onClose }) => {
  return (
    <ChakraLink as={Link} to={to} display="block" mb="4" onClick={onClose}>
      <Box
        p="2"
        borderRadius="md"
        _hover={{ bg: 'red.500' }}
        transition="background-color 0.3s"
      >
        <Box color="white">{text}</Box>
      </Box>
    </ChakraLink>
  );
};

export default Sidebar;
