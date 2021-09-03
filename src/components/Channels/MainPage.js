import {Redirect} from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";

function MainPage(props){

    const user = localStorage.getItem('loggedIn');

    console.log("main page headers check", props.headers)

    const headers = props.headers

    

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();

      
    const onSubmit = (data) => {

        console.log(data)
        console.log(channelUsers)

        console.log("headers onsubmit check =>",headers['access-token'])

        axios
            .post("http://206.189.91.54/api/v1/channels", {
            body:{
              name: data.newChannel,
            user_ids: channelUsers,

            },
            
            headers:{
              'access-token': headers['access-token'],
              'expiry': headers.expiry,
              'uid': headers.uid,
              'client': headers.client,

            }
            
            })
            .then((response) => {
            console.log("channel =>",response);
            })
            .catch((error) => console.log("this is an error", error));
    
        };

    let channelUsers = ['254','238'];

    // const addUser = () =>{
    //     console.log(addUsers)

    // }
     

    console.log("main page check", props.loggedIn)
    if(props.loggedIn !== undefined &&  props.loggedIn !== ""){
        

        return(

        <div className="min-h-screen flex items-center justify-center bg-gray-600">
            <div className="bg-white p-10 rounded shadow-2xl w-1/3">
      <h2 className="text-3xl font-bold mb-10 text-gray-500 ml-28">
        Create Channel 
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}className="space-y-5">
        <div className="flex flex-col mr-48 w-full">
          
        <input
            type="newChannel"
            id="newChannel"
            placeholder="Create New Channel"
            {...register("newChannel", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
          />
          
        </div>

        {/* <div className="flex flex-col mr-48 w-full">
        <input
            type="addUsers"     
            id="addUsers"
            placeholder="Add a User ID"
            minLength="3"
            {...register("addUsers", { required: true })}
            className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
          />         
        </div>
        <button className=" w-24 bg-green-500 hover:bg-green-400 p-1  rounded text-white font-bold mt-3">+ Add User</button> */}

        <div>
          <button className="block w-full bg-green-500 hover:bg-green-400 p-4 rounded text-white font-bold mt-20">
            Submit
          </button>
          
        </div>
      </form>
    </div>
    </div>
        )
    }

    if(props.loggedIn === "" || user ===  props.loggedIn){
        console.log("else", user)
        return(
            <Redirect from="/main-page" to="/" />
        )
    }


    else
        return(
            <div> wenk wonk </div>
        )
    
    
}


export default MainPage;