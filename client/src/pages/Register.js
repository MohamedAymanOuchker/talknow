import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "../styles.css";
import Axios from "axios";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let  navigate = useNavigate();

  const register = () => {
    Axios.post("http://localhost:3001/user/register", {
      firstname: firstname,
      surname: surname,
      email: email,
      password: password
    }).then((res) => {
      console.log(res);
      navigate('/login');
    })
  };

  return (
    <div className="flex flex-col my-16 mx-8 lg:flex lg:flex-row lg:my-30 lg:mx-32">
      <div className="mb-8 lg:flex-1">
        <h1 className="text-7xl">TalkNow</h1>
        <p className="text-2xl">Connect and share with people you love.</p>
      </div>
      <div className="lg:w-full lg:max-w-xl lg:mx-5">
        <form className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-10 flex justify-center">
            <h1 className="text-xl font-bold">Create a new account</h1>
          </div>
          <div className="mb-8 flex">
            <input
              name="firstname"
              type="text"
              className="shadow appearance-none border mr-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              placeholder="First Name"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              name="surname"
              type="text"
              className="shadow appearance-none border ml-2 rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="surname"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <input
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-16">
            <input
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-12 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline"
              type="button"
              id="signUpButton"
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
