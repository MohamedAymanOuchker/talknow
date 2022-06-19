import React, {useState} from 'react'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom'
import '../styles.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let  navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3001/user/login", {
      email: email,
      password: password
    }).then((res) => {
      if (res.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("email", res.data.email);
        navigate('/');
      } else {
        setErrorMessage(res.data.message);
      }
    })
  };

  return (
    <><div className="bg-blue">
      
    </div><div className="grid place-content-evenly mr-6 ml-6 mt-20 lg:mt-40">
        <div className="w-full max-w-xl">
          <form className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
            <div className="mb-6 flex justify-center">
              <h1 className="text-xl font-bold">Log In</h1>
            </div>
            <div className="mb-10">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-4"
                type="email" placeholder="Email Address" onChange={(e) => { setEmail(e.target.value); } } />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); } } />
            </div>
            <div className="mb-10 flex flex-col justify-center">
              <div className='flex justify-center mb-8'>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
                  type="button" id="loginButton"
                  onClick={login}>
                  Login
                </button>
              </div>
              <div className="flex justify-center font-bold text-red-600">
                {errorMessage}
              </div>
            </div>
          </form>
        </div>
      </div></>
  )
}

export default Login