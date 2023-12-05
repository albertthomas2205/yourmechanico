import { configureStore } from "@reduxjs/toolkit";

import Registrationdetails from "./user/RegistrationSlice";

export default  configureStore ({
    reducer :{
        user_registration: Registrationdetails
    }
})