// pages/signup.tsx
"use client";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailSignup = () => {
        // Implement your email signup logic here
        console.log('Email Signup:', email, password);
    };

    const handleGoogleSignup = () => {
        // Implement your Google OAuth signup logic here
        console.log('Google Signup');
    };

    const handleFacebookSignup = () => {
        // Implement your Facebook signup logic here
        console.log('Facebook Signup');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-8 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Signup</h1>

                {/* Email Signup */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        style={{ color: "black" }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="mt-1 p-2 w-full border rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            style={{ color: "black" }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="absolute top-0 right-0 m-2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="mt-1 p-2 w-full border rounded-md bg-gray-50 focus:outline-none focus:border-blue-500"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        style={{ color: "black" }}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    className="bg-blue-500 text-white p-2 rounded-md w-full mb-2 focus:outline-none hover:bg-blue-600"
                    onClick={handleEmailSignup}
                >
                    Signup with Email
                </button>

                {/* First Or Line */}
                <div className="flex items-center mb-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google OAuth Signup */}
                <a
                    href="#"
                    className="flex items-center justify-center bg-white text-black border border-gray-300 shadow-md p-2 rounded-md w-full focus:outline-none hover:bg-gray-200"
                    onClick={handleGoogleSignup}
                >
                    <img
                        src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" // Replace with the actual Google logo URL
                        alt="Google Logo"
                        className="w-6 h-6 mr-2"
                    />
                    Signup with Google
                </a>

                {/* Second Or Line */}
                <div className="flex items-center my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Signup with Facebook */}
                <a
                    href="#"
                    // className="flex items-center justify-center bg-blue-600 text-white p-2 rounded-md w-full focus:outline-none hover:bg-blue-700"
                    className="flex items-center justify-center bg-white text-black border border-gray-300 shadow-md p-2 rounded-md w-full focus:outline-none hover:bg-gray-200"
                    onClick={handleFacebookSignup}
                >
                    <img src="https://i.imgur.com/2iDX5RQ.png" alt="Facebook Logo" className="w-6 h-6 mr-2" />
                    Signup with Facebook
                </a>
            </div>
        </div>
    );
};

export default SignupPage;
