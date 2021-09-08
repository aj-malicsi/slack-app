import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from 'react';

function MainPage(props) {
  const user = localStorage.getItem("loggedIn");

  let history = useHistory();

  console.log("main page users =>",props.users)

 
  const headersList = {
    "access-token": props.headers["access-token"],
    expiry: props.headers.expiry,
    client: props.headers.client,
    uid: props.headers.uid,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let users = [props.loggedIn.id];

  const onSubmit = (data) => {

    console.log(data.addUsers)
    let splitUsers = data.addUsers.split(",")
    

    splitUsers.push(users.pop())
    console.log(splitUsers)
    
    let channelData = {
      name: data.newChannel,
      user_ids: splitUsers,
    };
   

    console.log("channel data obj", channelData);

    axios
      .post("http://206.189.91.54/api/v1/channels", channelData, {
        headers: headersList,
      })

      .then((response) => {
        // console.log(headersList);
        console.log("post", response.data);
        history.push("/channel");
        // console.log(response);

        axios
          .get("http://206.189.91.54/api/v1/channels", {
            headers: headersList,
          })
          .then((response) => {
            console.log("get response", response.data.data);
            let channelArr = response.data.data;
            props.setChannels(channelArr);
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));

  };

  useEffect( () =>{
    console.log("use effect main page check")
    axios
          .get("http://206.189.91.54/api/v1/users", {
            headers: headersList,
          })
          .then((response) => {
            console.log("get response", response);
            // let channelArr = response.data.data;
            // props.setChannels(channelArr);
          })
          .catch((error) => console.log(error.message));

  },[])




  if (props.loggedIn !== undefined && props.loggedIn !== "") {
    return (
      // //Main Page UI

      // <div className="relative min-h-screen flex">
      //   <div className="bg-purple-800 w-64 flex flex-col p-3">
      //     <div className="bg-green-100 p-2">User Name</div>
      //     <div>Channels</div>
      //   </div>
      //   <div className="p-8 flex-1">Chatbox goes here</div>
      // </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-600">
        <div className="bg-white p-10 rounded shadow-2xl w-1/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-500 ml-28">
            Create Channel
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex flex-col mr-48 w-full">
              <input
                type="newChannel"
                id="newChannel"
                placeholder="Create New Channel"
                {...register("newChannel", { required: true })}
                className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
              />
            </div>

            <div className="flex flex-col mr-48 w-full">
            <input
              type="addUsers"
              id="addUsers"
              placeholder="Add a User ID"
              minLength="3"
              {...register("addUsers", { required: true })}
              className="border-2 border-gray-400 p-1 pl-3 rounded outline-none focus:border-blue-300"
            />
          </div>
          {/* <button className=" w-24 bg-green-500 hover:bg-green-400 p-1  rounded text-white font-bold mt-3">
            + Add User
          </button> */}
            <div>
              <button className="block w-full bg-green-500 hover:bg-green-400 p-4 rounded text-white font-bold mt-20">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (props.loggedIn === "" || user === props.loggedIn) {
    console.log("else", user);
    return <Redirect from="/main-page" to="/" />;
  } else return <div> wenk wonk </div>;
}
export default MainPage;
