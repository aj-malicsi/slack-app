import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'
import ChannelMessages from "../Messaging/ChannelMessages";
import { useForm } from "react-hook-form";


function Channel(props) {
  //   let channels = props.channels;

  // console.log(props.channels.length);
  let index = props.channels.length - 1;
  // console.log(props)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const headersList = {
    "access-token": props.headers["access-token"],
    expiry: props.headers.expiry,
    client: props.headers.client,
    uid: props.headers.uid,
  };

  


  const onSubmit = (data) => {
    // console.log("add user =>",data)
    // console.log("add user =>",headersList)

    let channelData = {
      id: props.channels[index].id,
      member_id: data.newUser,
    };

    // console.log("ADD USER =>")
    // console.log(channelData)

    axios
      .post("http://206.189.91.54/api/v1/channel/add_member", channelData, {
        headers: headersList,
      })

      .then((response) => {
        console.log("ADD USER =>")
        console.log("post", response.data);
        console.log(headersList)

        // axios
        //     .get(`http://206.189.91.54/api/v1/channel/${props.channels[index].id}`, channelData, {
        //       headers: headersList,
        //     })

        //     .then((response) => {
        //       console.log("GET CHANNEL =>")
        //       console.log("GET", response.data);
        
        //     })
        //     .catch((error) => console.log(error.message));
  
      })
      .catch((error) => console.log(error.message));


  }
 

  if (props.channels.length !== 0) {
    // console.log(props.channels[index].id)
    

    // console.log("CHANNEL LOG")
    // console.log(props.channels[index])
    return (
      <>
        <div>Channel Name:{props.channels[index].name} ID:{props.channels[index].id}</div>

        <div>Channel List</div>
      <ul>
      {
        props.channels.map((channel) => {
          return (
            <> 
            <div key={channel.id}>
              <Link to={`/channel/${channel.id}/${channel.name}`}>{channel.name}</Link>
            </div>
            </>
          )
        })
      }
    </ul>
    <ChannelMessages
    id={props.channels[index].id}
    headers={props.headers}
    loggedIn={props.loggedIn}
    channels={props.channels}
    />

    <Link
      to="/main-page"
      className="text-blue-800 hover:text-blue-500"
    >
      Create a channel
    </Link>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="newUser"
        id="newUser"
        placeholder="Enter User Id Here"
        minLength="3"
        {...register("newUser")}
      />

      <button type="submit">Add User</button>
    </form>
  
    </>

    );
  } 
  
  else {
    return <div>wenk wonk</div>;
  }
}

export default Channel;
