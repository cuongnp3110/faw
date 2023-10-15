import { createContext, useReducer } from "react";
import axios from "axios";

import { authReducer } from "../reducers/auth.reducer";
import { apiURL, LOCAL_STORAGE_TOKEN_NAME } from "./contant";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //Login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiURL}/auth/login`, userForm);
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.assessToken
        );
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiURL}/form`);
      if (response.data.success) return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const submitForm = async (Form) => {
    try {
      const response = await axios.post(`${apiURL}/form`, Form);
      if (response.data.success) return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  //Context data
  const authContextData = { loginUser, submitForm, fetchData };

  return (
    <>
      <authContext.Provider value={authContextData}>
        {children}
      </authContext.Provider>
    </>
  );
};

export default AuthContextProvider;
