// // import React from 'react';
// // import { FaUser, FaIdCard, FaEnvelope, FaLock } from 'react-icons/fa';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';

// // const Register = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center">
// //       <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
// //         <CardHeader className="bg-[#000235] text-white p-6">
// //           <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
// //           <CardDescription className="text-blue-100">
// //             Enter your details below to create your account
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent className="p-6">
// //           <form>
// //             <div className="space-y-4">
// //               <div>
// //                 <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
// //                 <div className="mt-1 relative rounded-md shadow-sm">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaUser className="text-gray-400" />
// //                   </div>
// //                   <Input id="name" name="name" type="text" placeholder="John Doe" className="pl-10 w-full" />
// //                 </div>
// //               </div>

// //               <div>
// //                 <Label htmlFor="rollnumber" className="text-gray-700 font-medium">Roll Number</Label>
// //                 <div className="mt-1 relative rounded-md shadow-sm">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaIdCard className="text-gray-400" />
// //                   </div>
// //                   <Input id="rollnumber" name="rollnumber" type="text" placeholder="123456" className="pl-10 w-full" />
// //                 </div>
// //               </div>

// //               <div>
// //                 <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
// //                 <div className="mt-1 relative rounded-md shadow-sm">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaEnvelope className="text-gray-400" />
// //                   </div>
// //                   <Input id="email" name="email" type="email" placeholder="you@example.com" className="pl-10 w-full" />
// //                 </div>
// //               </div>

// //               <div>
// //                 <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
// //                 <div className="mt-1 relative rounded-md shadow-sm">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaLock className="text-gray-400" />
// //                   </div>
// //                   <Input id="password" name="password" type="password" placeholder="••••••••" className="pl-10 w-full" />
// //                 </div>
// //               </div>
// //             </div>
// //           </form>
// //         </CardContent>
// //         <CardFooter className="bg-gray-50 px-6 py-4">
// //           <Button className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
// //             Create account
// //           </Button>
// //         </CardFooter>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default Register;


// import React, { useState } from 'react';
// import { FaUser, FaIdCard, FaEnvelope, FaLock, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useNavigate } from 'react-router-dom';
// import { SignUpData } from '@/services/api';
// import {toast} from 'react-toastify';
 
// const Register = () => {
//   const [isDashboardOpen, setIsDashboardOpen] = useState(false);
//   const navigate = useNavigate();

//   const [registerdata, setRegisterdata] = useState({
//     name: '',
//     phonenumber:'',
//     email: '',
//     password: ''
//   //   role: ''
//     })
//   const toggleDashboard = () => {
//     setIsDashboardOpen(!isDashboardOpen);
//   };

//   const handleNavigate = () => {
//     navigate("/");  // Navigate to home page
//   };
//   const handleChange = (e) => {
//     setRegisterdata({ ...registerdata, [e.target.id]: e.target.value })
//     }

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   console.log(registerdata);
//   const res = await SignUpData(registerdata.name, registerdata.email, registerdata.password, registerdata.role = 'USER');

//   if (res.status === 200) {
//       setTimeout(() => {
//           setRegisterdata({
//               name: '',
//               phonenumber:'',
//               email: '',
//               password: ''
//           });
//           // navigate('/login')
//           toast.success("Registered successfully!")
//       }, 5000)
//   }
//   else {
//       toast.error(res.data)
// }}

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
//       {/* Dashboard Sidebar */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
//         <div className="p-4">
//           <button onClick={toggleDashboard} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
//             <FaTimes size={24} />
//           </button>
//           <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//           <ul className="space-y-4">
//             <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
//               <FaUserCircle /> <span className="font-medium">Profile</span>
//             </li>
//             {/* Add more dashboard items as needed */}
//           </ul>
//         </div>
//       </div>

//       {/* Registration Form */}
//       <div className="flex items-center justify-center pt-20">
//         <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
//           <CardHeader className="bg-[#000235] text-white p-6">
//             <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
//             <CardDescription className="text-blue-100">
//               Enter your details below to create your account
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="p-6">
//   <form onSubmit={handleSubmit}>
//     <div className="space-y-4">
//       <div>
//         <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
//         <div className="mt-1 relative rounded-md shadow-sm">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FaUser className="text-gray-400" />
//           </div>
//           <Input 
//             id="name" 
//             name="name" 
//             type="text" 
//             placeholder="John Doe" 
//             className="pl-10 w-full" 
//             value={registerdata.name}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div>
//         <Label htmlFor="phonenumber" className="text-gray-700 font-medium">Phone Number</Label>
//         <div className="mt-1 relative rounded-md shadow-sm">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FaIdCard className="text-gray-400" />
//           </div>
//           <Input 
//             id="phonenumber" 
//             name="phonenumber" 
//             type="text" 
//             placeholder="9876543210" 
//             className="pl-10 w-full"
//             value={registerdata.phonenumber || ''}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div>
//         <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
//         <div className="mt-1 relative rounded-md shadow-sm">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FaEnvelope className="text-gray-400" />
//           </div>
//           <Input 
//             id="email" 
//             name="email" 
//             type="email" 
//             placeholder="you@example.com" 
//             className="pl-10 w-full"
//             value={registerdata.email}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div>
//         <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
//         <div className="mt-1 relative rounded-md shadow-sm">
//           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <FaLock className="text-gray-400" />
//           </div>
//           <Input 
//             id="password" 
//             name="password" 
//             type="password" 
//             placeholder="••••••••" 
//             className="pl-10 w-full"
//             value={registerdata.password}
//             onChange={handleChange}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="mt-6">
//       <Button type="submit" className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
//         Create account
//       </Button>
//     </div>
//   </form>
// </CardContent>
//           {/* <CardFooter className="bg-gray-50 px-6 py-4">
//             <Button className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
//               Create account
//             </Button>
//           </CardFooter> */}
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Register;





import React, { useState } from 'react';
import { FaUser, FaIdCard, FaEnvelope, FaLock, FaTimes, FaUserCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import  {SignUpData} from '@/services/api';  // Your Axios instance
import { toast } from 'react-toastify';

const Register = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const navigate = useNavigate();

  const [registerdata, setRegisterdata] = useState({
    name: '',
    phonenumber: '',
    email: '',
    password: '',
  });

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const handleChange = (e) => {
    setRegisterdata({ ...registerdata, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await api.post('/register', {
  //       name: registerdata.name,
  //       email: registerdata.email,
  //       password: registerdata.password,
  //       role: 'USER',  // Default role
  //     });

  //     if (res.status === 200) {
  //       toast.success("Registered successfully!");
  //       setTimeout(() => {
  //         setRegisterdata({
  //           name: '',
  //           phonenumber: '',
  //           email: '',
  //           password: ''
  //         });
  //         navigate('/login');
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message || "Registration failed");
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await SignUpData(registerdata.name, registerdata.email, registerdata.password, 'USER');
        if (response.status === 200) {
            // Handle success
            toast.success("Registered successfully!");
            setRegisterdata({
                name: '',
                phonenumber: '',
                email: '',
                password: ''
            });
        }
    } catch (error) {
        toast.error("Registration failed!");
        console.error(error);
    }
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Dashboard Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isDashboardOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <button onClick={toggleDashboard} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out">
              <FaUserCircle /> <span className="font-medium">Profile</span>
            </li>
            {/* Add more dashboard items as needed */}
          </ul>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex items-center justify-center pt-20">
        <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
          <CardHeader className="bg-[#000235] text-white p-6">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription className="text-blue-100">
              Enter your details below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 w-full"
                      value={registerdata.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="phonenumber" className="text-gray-700 font-medium">Phone Number</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIdCard className="text-gray-400" />
                    </div>
                    <Input
                      id="phonenumber"
                      name="phonenumber"
                      type="text"
                      placeholder="9876543210"
                      className="pl-10 w-full"
                      value={registerdata.phonenumber || ''}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10 w-full"
                      value={registerdata.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 w-full"
                      value={registerdata.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                  Create account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
