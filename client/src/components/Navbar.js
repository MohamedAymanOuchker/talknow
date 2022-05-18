/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import '../styles.css'

function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"))
    }, [localStorage.getItem("loggedIn")])

    return (
        <>
            {/* <nav class="bg-gray-700">
                <div class="p-4 lg:px-2">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex-1 flex items-center justify-end">
                            <div class="lg:space-x-2">
                                <input type="email" placeholder="Email" class="shadow appearance-none border rounded py-1 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user" />
                                <input type="password" placeholder="Password" class="shadow appearance-none border rounded py-1 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" /> 
                                <button class="text-white bg-blue-500 hover:bg-blue-700 font-bold px-5 py-1 rounded" id="logInButton">Log In</button>
                                <a href="forgtpass.html" class="text-white hover:text-green-400">Forgotten password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <nav className="bg-gray-700">
                <div className="p-4 lg:px-2">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex-1 flex items-center justify-end">
                            <div className="space-x-6">
                                <a href="/" className="text-white hover:text-green-400">Home</a>
                                {!loggedIn ? (
                                    <>
                                        <a href="/profile" className="text-white hover:text-green-400">Profile</a>
                                    </>

                                ) : (
                                    <>
                                        <a href="/register" className="text-white hover:text-green-400">Register</a>
                                        <a href="/login" className="text-white hover:text-green-400">Login</a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar