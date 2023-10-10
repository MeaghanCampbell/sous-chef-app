'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const apiBaseURL = process.env.NODE_ENV === 'production' ? 'https://souschefapp-backend-560b3e209edf.herokuapp.com' : 'http://localhost:3001';

    const api = axios.create({
        baseURL: apiBaseURL,
    });

    const handleLogin = async (e) => {
        setErrorMessage('')
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Username and password are required')
            return;
        }
        try {
            const user = { username, password };
            const response = await api.post('/users/login', user);
            Cookies.set('token', response.data.token, { expires: 6 });
            router.push('/dashboard');
        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }

    return (
        <section className="max-w-2xl text-center px-6 md:px-8 py-8 mx-auto h-full flex flex-col justify-center">
            <div className="text-center max-w-xl">
                <h1 className="rich-black font-semibold text-2xl mb-1">Welcome Back!</h1>
                <p className="mb-8 rich-black">Enter your username and password below to log in to your digital cookbook.</p>
                <form className="space-y-4 w-80 mx-auto sm:w-96" onSubmit={handleLogin}>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1" htmlFor="username">Username</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1" htmlFor="password">Password</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p className="text-red-600">{errorMessage}</p>
                    <button className="plus-btn transition font-semibold rounded-md px-3 py-1 w-full" type="submit">Login</button>
                    <div className="pt-2">
                        <span>Don't have an account yet? </span>
                        <a className="cerulean font-semibold" href="/sign-up">Sign up!</a>
                    </div>
                </form>
            </div>
        </section>
    )
}
