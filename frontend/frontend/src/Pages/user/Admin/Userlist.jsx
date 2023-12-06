import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/accounts/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleBlockUnblock = async (userId) => {
    try {
      const response = await axios.post('http://127.0.0.1:8001/api/send_user_id/', {
        user_id: userId,
      });

      if (response.status === 200) {
        console.log("jaiiii")
        fetchData(); // Call fetchData to update the user list
      } else {
        console.error('Failed to block/unblock user:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error calling block/unblock API:', error);
    }
  };

  return (
    <Box overflowX="auto">
      <Text fontWeight="bold" fontSize="xl" textAlign="center" mb="4">
        User Details
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone_number}</Td>
              <Td>{user.is_active ? 'True' : 'False'}</Td>
              <Td>
                <Button
                  colorScheme={user.is_active ? 'green' : 'red'}
                  onClick={() => handleBlockUnblock(user.id)}
                >
                  {user.is_active ?  'Block' : 'Unblock'}
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserList;
