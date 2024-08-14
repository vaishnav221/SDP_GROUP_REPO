import { axiosInstance, LoginData, SignUpData } from './api'; // Correctly import named exports
import {jwtDecode} from 'jwt-decode'; // Adjust import if necessary

const setToken = (token) => localStorage.setItem('token', token);

const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}

const getUserEmail = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.sub;
    }
    return null;
}

const getUserRole = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        return payLoad?.role;
    }
    return null;
}

const isLoggedIn = () => {
    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        return isLogin;
    }
    return false;
}

const SignIn = (email, password) => LoginData(email, password); // Call the correct function
const SignOut = () => localStorage.clear();

export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };




// import { axiosInstance } from "./api";
// import { jwtDecode } from "jwt-decode";
// import { LoginData, SignUpData } from './api';  // Correct import

// import api from '../services/api';  // Make sure you use the correct path


// const setToken = (token) => localStorage.setItem('token', token);

// const getToken = () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         return token;
//     }
//     return null;
// }


// const getUserEmail = () => {
//     const token = getToken();
//     if (token) {
//         const payLoad = jwtDecode(token);
//         return payLoad?.sub;
//     }
//     return null;
// }

// const getUserRole = () => {
//     const token = getToken();
//     if (token) {
//         const payLoad = jwtDecode(token);
//         return payLoad?.role;
//     }
//     return null;
// }

// const isLoggedIn = () => {
//     const token = getToken();
//     if (token) {
//         const payLoad = jwtDecode(token);
//         const isLogin = Date.now() < payLoad.exp * 1000;
//         return isLogin;

//     }
// }

// const SignIn = (email, password) => axiosInstance.post("v1/auth/authenticate", { email, password });
// const SignOut = () => localStorage.clear()


// export const authService = { getToken, setToken, getUserEmail, getUserRole, isLoggedIn, SignIn, SignOut };


// import api from '../services/api';  // Make sure the path is correct

// // Example usage of the `api` instance
// const registerUser = async (userData) => {
//   try {
//     const response = await api.post('/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error registering the user!", error);
//     throw error;
//   }
// };
