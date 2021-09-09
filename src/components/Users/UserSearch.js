import { Redirect, useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


function UserSearch(props){
    // console.log(props)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


    const onSubmit = (data) =>{
        console.log(data)
        
    }

    return(
        <>
        <div>Search for a user</div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <input
                type="searchUser"
                id="searchUser"
                placeholder="Enter User Id"
                {...register("searchUser", { required: true })}
                // className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
              />
        <button type="submit">Search</button>


        </form>
        </>
    )
}

export default UserSearch