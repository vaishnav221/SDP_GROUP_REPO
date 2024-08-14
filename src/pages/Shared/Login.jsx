import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { LoginData, axiosInstance } from '@/services/api';  // Ensure axiosInstance is imported
import { authService } from '../../services/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('user');
    const navigate = useNavigate();

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // navigate('/dashboard');
        setError('');

    //     try {
    //         const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
    //         if (res.status === 200) {
    //             authService.setToken(res.data.token);

    //             // Fetch the user data
    //             const userResponse = await axiosInstance.get('/v1/auth/user', {
    //                 headers: {
    //                     Authorization: `Bearer ${res.data.token}`,  // Pass the token in the request
    //                 },
    //             });

    //             const userData = userResponse.data;

    //             // Validate user data based on your criteria
    //             if (userData.role === 'USER') {
    //                 navigate('/hallview');
    //             } else if (userData.role === 'MANAGER') {
    //                 navigate('/request-management');
    //             } else {
    //                 setError('Invalid role');
    //             }
    //         }
    //     } catch (error) {
    //         setError('Invalid email or password');
    //     }

    //     setIsLoading(false);
    // };


    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setError('');
    
        try {
            const res = await authService.SignIn(emailRef.current.value, passwordRef.current.value);
            if (res.status === 200) {
                authService.setToken(res.data.token);
    
                // Fetch the user data
                const userResponse = await axiosInstance.get('/v1/auth/user', {
                    headers: {
                        Authorization: `Bearer ${res.data.token}`,  // Use the token here
                    },
                });
    
                const userData = userResponse.data;
    
                // Validate user data based on your criteria
                if (userData.role === 'USER') {
                    navigate('/hallview');
                } else if (userData.role === 'MANAGER') {
                    navigate('/request-management');
                } else {
                    setError('Invalid role');
                }
            }
        } catch (error) {
            setError('Invalid email or password');
        }
    
        setIsLoading(false);
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <div className="flex items-center justify-center pt-20">
                <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <CardHeader className="bg-[#000235] text-white p-6">
                        <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                        <CardDescription className="text-blue-100 text-center">
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleLogin}>
                        <CardContent className="p-6 space-y-4">
                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error!</strong>
                                    <span className="block sm:inline"> {error}</span>
                                </div>
                            )}
                            <div>
                                <Label className="text-gray-700 font-medium">Email</Label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input 
                                        type="email" 
                                        id="email" 
                                        ref={emailRef} 
                                        className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label className="text-gray-700 font-medium">Password</Label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <Input 
                                        id="password" 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="••••••" 
                                        className="pl-10 w-full"
                                        ref={passwordRef}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50 px-6 py-4">
                            <Button 
                                className="w-full bg-[#000235] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : `Login as ${loginType.charAt(0).toUpperCase() + loginType.slice(1)}`}
                            </Button>
                        </CardFooter>
                    </form>
                    <div className="text-center p-4 bg-gray-50">
                        <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
                        <p className="mt-2">
                            Don't have an account? 
                            <a href="/register" className="text-blue-600 hover:underline ml-1">Sign up</a>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
