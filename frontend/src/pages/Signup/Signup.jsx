import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'; // Import Axios
function Signup() {
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Form data to be sent in the POST request
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };
    
        try {
          // Make POST request to the specified endpoint
          const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
    
          // Handle the response here if needed
          console.log('Registration successful:', response.data);
    
          // Redirect or perform any other action after successful registration
        } catch (error) {
          // Handle error if the registration fails
          console.error('Registration failed:', error);
        }
      };


  return (
    <>



<div className='flex flex-col h-screen bg-slate-300'>
<section className="login flex justify-center pt-24">
    <div className="w-full max-w-xs">
        <form action="/register" onSubmit={handleSubmit} method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Name
                </label>
                <input 
                name="name" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Enter your name"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input
                name="email" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                name="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded" type="submit">
                    Sign up
                </button>
                <Link to="/login"  className="inline-block align-baseline font-bold text-sm hover:text-slate-950" href="/login">
                   Already have account?
                </Link>
            </div>
        </form>
        <p className="text-center text-slate-900 text-xs">
            &copy;2023 Sajilo Sifarish. All rights reserved.
        </p>
    </div>
</section>
</div>
</>
  )
}

export default Signup