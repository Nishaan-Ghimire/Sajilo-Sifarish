import React from 'react'
import "./Login.css" 
function Login() {
  return (
    <>
    <section className="login flex justify-center pt-24">
    <div className="w-full max-w-xs">
        <form action="/login" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input
                name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
                {/* <button
                    className="btn-primary rounded-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn"
                    type="submit"> */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Log In
                </button>
                <a className="inline-block align-baseline font-bold text-sm" href="/register">
                   Don't have account?
                </a>
            </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2023 Sajilo Sifarish.  All rights reserved.
        </p>
    </div>
</section>
    </>
  )
}

export default Login
