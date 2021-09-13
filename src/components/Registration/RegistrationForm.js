// import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function RegistrationForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory()

  // const [users, setUsers] = useState([]);

  // let userArray = users;

  const onSubmit = (data) => {

    console.log("registration data", data)

    let registrationData = {
      email: data.email,
      password: data.password,
      password_confirmation: data.password2,
    };

    console.log(registrationData)
    axios
      .post("http://206.189.91.54/api/v1/auth", registrationData
      )
      .then((response) => {
        console.log("REGISTRATION",response)
        history.push("/")
      })
      .catch((error) => console.log("this is an error", error));

    if (data.password !== data.password2) {
      console.log(`Password do not match`);
    }

  };

  return (
    <div className="bg-white p-10 rounded shadow-2xl w-1/3">
      <h2 className="text-3xl font-bold mb-10 text-gray-500 ml-20">
        Create Your Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex flex-col mr-48 w-full ">
          <label htmlFor="firstName" className="font-bold mb-2 text-gray-500">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300 "
          />
          <div className="text-red-600">
            {errors.firstName && "First name is required"}
          </div>
        </div>
        <div className="flex flex-col mr-48 w-full ">
          <label htmlFor="lastName" className="font-bold mb-2 text-gray-500">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300 "
          />
          <div className="text-red-600">
            {errors.lastName && "Last name is required"}
          </div>
        </div>

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

        <div className="flex flex-col mr-48 w-full">
          <label htmlFor="password2" className="font-bold mb-2 text-gray-500">
            Confirm Password
          </label>
          <input
            type="password"
            id="password2"
            {...register("password2", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
          />
          <div className="text-red-600">
            {errors.password2 && "Password is required"}
          </div>
        </div>
        <div>
          <button className="block w-full bg-yellow-500 hover:bg-yellow-400 p-4 rounded text-white font-bold">
            Sign up
          </button>
          <div className="flex justify-center mt-5 font-medium">
            <p>Already have an account?</p>
            <p className="ml-3">
              <Link to="/" className="text-blue-800 hover:text-blue-500">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
