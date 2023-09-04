'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setErrorMessage('Username and password are required')
            return;
        }
        try {
            const user = { username, password };
            const response = await axios.post('http://localhost:3001/users/create', user);
            console.log(response.data)
            router.push('/');
        } catch (error) {
            setErrorMessage(error.response.data.error)
        }
    }

    return (
        <section className="max-w-2xl text-center px-6 md:px-8 py-8 mx-auto h-full flex flex-col justify-center">
            <div className="text-center max-w-xl">
                <h1 className="rich-black font-semibold text-2xl mb-1">Meet Your Personal Sous Chef.</h1>
                <p className="mb-8 rich-black">Welcome to the Sous Chef app where you can create a digital cookbook of all of your favorite recipes, plan meals for the week and generate a grocery list. Enter a username and password below to sign up.</p>
                <form className="space-y-4 w-80 mx-auto sm:w-96" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1" htmlFor="username">Username</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold mb-1" htmlFor="password">Password</label>
                        <input className="border border-gray-300 px-2 py-1 rounded-md" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <p className="text-red-600">{errorMessage}</p>
                    <button className="plus-btn transition font-semibold rounded-md px-3 py-1 w-full" type="submit">Sign Up</button>
                    <div className="pt-2">
                        <span>Already have an account? </span>
                        <a className="cerulean font-semibold" href="/">Login!</a>
                    </div>
                </form>
            </div>
        </section>
    )
}
