// pages/index.tsx
"use client";
import { useState } from 'react';
import { supabase } from "@/lib/supabase";
import { useRouter } from 'next/navigation';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const router = useRouter();



    const handleEmailLogin = async () => {

        // Implement your email authentication logic here
        console.log('Email Login:', email, password);
    };

    const handleGoogleLogin = async () => {
        // const router = useRouter();
        // Implement your Google OAuth logic here
        console.log('Google Login');
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });

            if (data) console.log(data); router.refresh();
        } catch (error) {
            console.error('Google login error:', error);
        }
    };

    const handleFacebookSignup = () => {
        // Implement your Facebook signup logic here
        console.log('Facebook Login');
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-96 p-8 bg-white rounded shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Login/Signup</h1>

                {/* Email Login */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
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
                    <input
                        type="password"
                        id="password"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        style={{ color: "black" }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    className="bg-blue-500 text-white p-2 rounded-md w-full mb-4 focus:outline-none hover:bg-blue-600"
                    onClick={handleEmailLogin}
                >
                    Login with Email
                </button>

                {/* Or Line */}
                <div className="flex items-center mb-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="mx-4 text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>


                {/* Google OAuth Login */}
                <a
                    href="#"
                    className="flex items-center justify-center bg-white text-black border border-gray-300 shadow-md p-2 rounded-md w-full focus:outline-none hover:bg-gray-200"
                    onClick={handleGoogleLogin}
                >
                    <img
                        src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" // Replace with the actual Google logo URL
                        alt="Google Logo"
                        className="w-6 h-6 mr-2"
                    />
                    Login with Google
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
                    Login with Facebook
                </a>
            </div>
        </div>
    );
};

export default LoginPage;
