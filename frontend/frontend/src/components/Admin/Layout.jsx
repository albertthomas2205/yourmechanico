// Layout.js
import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import TopBar from './Topbar';

const Layout = ({ children }) => {
  return (
    <Flex>
      <TopBar />
      <Sidebar />
      <Flex flex="1" p="4">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
