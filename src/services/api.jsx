import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL,
});

// axiosInstance.interceptors.request.use(
//     (config) => {

//         const token = localStorage.getItem('token');
//         if(token) {
//             config.headers.Authorization = Bearer `${token}`;
//         }

//         return config;
//     }, (error) => {
//         return Promise.reject(error);
//     }

// );
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;  // Corrected this line
        }
        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    }
);


const LoginData = (email, password) => axiosInstance.post('/v1/auth/authenticate', {email, password});

// export {axiosInstance, LoginData}

const SignUpData = (name, email, password, role) => axiosInstance.post(`${baseURL}/v1/auth/register`, {name, email, password, role});

export {axiosInstance,LoginData,SignUpData}


// import axios from 'axios';

// // Create an Axios instance with default configuration
// const api = axios.create({
//   baseURL: 'http://localhost:8080/api/v1/auth', // Replace with your backend URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Export the Axios instance
// export default api;