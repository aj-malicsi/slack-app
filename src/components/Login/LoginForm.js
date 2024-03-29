import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

function LoginForm(props) {

  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const onSubmit = (data) => {
    axios
      .post("https://slackapi.avionschool.com/api/v1/auth/sign_in", {
          email: data.email,
          password: data.password,

      })
      .then((response) => {
       
        if(typeof response.data.data.uid === 'string'){
          // console.log("its a string", response.data.data.uid)
          // props.setLoggedIn(response.data.data.uid)
          props.setLoggedIn(response.data.data)
          
          props.setHeaders(response.headers)
          // console.log("test", props.headers)

          history.push('/main-page')
        }
        

          
      })
      .catch((error) => console.log("Hello", error));

      
  };

  return (
    <div className="bg-white p-10 rounded shadow-2xl w-1/3">
      <h2 className="text-3xl font-bold mb-10 text-gray-500 ml-28">
        Member Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col mr-48 w-full">
          <label htmlFor="Email" className="font-bold mb-2 text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="Email"
            {...register("email", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
          />
          <div className="text-red-600">
            {errors.email && "Email is required"}
          </div>
        </div>

        <div className="flex flex-col mr-48 w-full">
          <label htmlFor="password" className="font-bold mb-2 text-gray-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
          />
          <div className="text-red-600">
            {errors.password && "Password is required"}
          </div>
        </div>

        <div>
          <button className="block w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded text-white font-bold">
            Log In
          </button>
          <div className="flex justify-center mt-5 font-medium">
            <p className="text-gray-600">Not a member?</p>
            <p className="ml-3">
              <Link
                to="/RegistrationForm"
                className="text-blue-800 hover:text-blue-500"
              >
                Signup now
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
