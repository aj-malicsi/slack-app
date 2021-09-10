import { Redirect, useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState} from "react";
import UserDisplay from "./UserDisplay";



function UserSearch(props){
    // console.log(props)
    const [user, setUser] = useState({})

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    // console.log(props.users[0])

    let users =  props.users

    let displayUser = {}

    const findUser = (userArr, user) =>{
        console.log(userArr, user)
        for(let i = 0; i < userArr.length; i++){
            if(user === userArr[i].id){
                console.log(userArr[i].id, userArr[i].uid)
                setUser(userArr[i])
                return true;
            }
        }
        console.log("user couldn't be found")

    }

    // findUser(users, 238)

    


    const onSubmit = (data) =>{
        console.log(data)

        let user = parseInt(data.searchUser)
        console.log(user)

        // console.log("ON SUBMIT")
        findUser(users, user)

        
        
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

            <UserDisplay
            user = {user}
            />

            <Link
            to="/main-page"
            className="text-blue-800 hover:text-blue-500"
            >
            Create a channel
            </Link>

    
            </form>
            </>
        )

    
    

    
}

export default UserSearch