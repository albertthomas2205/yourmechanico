import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserWrapper from "./Pages/user/UserWrapper";
import userStore from "./Redux/userStore";
import { Provider } from "react-redux";
const App=()=> {
 

  return (
    <>
  

    <ChakraProvider>
      <BrowserRouter>
      <Provider store={userStore}>
      <Routes>
        <Route path="*" element={<UserWrapper/>}/>
      </Routes>
      </Provider>
      </BrowserRouter>
     
    </ChakraProvider>
  
  
    </>
  );
}

export default App;




