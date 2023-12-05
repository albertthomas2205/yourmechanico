import React from 'react';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';

const Home = () => {
  const { name, isAuthenticated } = useSelector((state) => state.authentication_user);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Header />
      <div>
        {isAuthenticated && <h1 style={{ color: 'red' }}>hiiiii{name}</h1>}
        {!isAuthenticated && <p>Please log in</p>}
      </div>
    </div>
  );
};

export default Home;
