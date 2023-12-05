import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Otp from './Otp';
import { Outlet } from 'react-router-dom';

const Background = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Background Image with Blur */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://i.pinimg.com/564x/09/0d/de/090dde650e76670112033eb8ac0d048a.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0px)', // Adjust the blur intensity as needed
        }}
      ></div>
      {/* Darker overlay with more opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(30, 30, 30, 0.9)', // Very dark gray with 90% opacity
        }}
      ></div>
      {/* Logo */}
      <img
        src="/images/20231114_135440.png" // Adjust the path based on your actual project structure
        alt="Logo"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '150px', // Adjust the width as needed
          height: 'auto',
        }}
      />
      {/* Login Form */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div>
          <Outlet/>
        
         
        </div>
      </div>
    </div>
  );
};

export default Background;
