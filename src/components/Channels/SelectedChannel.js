import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'
import ChannelMessages from "../Messaging/ChannelMessages";
import { useForm } from "react-hook-form";
import ChannelList from "./ChannelList";



function SelectedChannel(props) {
  //   let channels = props.channels;

  // console.log(props.channels.length);
  let index = props.channels.length - 1;
  console.log(props)

  const {params: {channelName, channelId} } = props.match;
  console.log(channelName, channelId)

  //if selected channel id is in the channel array get the channel name to display
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
      id: channelId,
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

  
      })
      .catch((error) => console.log(error.message));


  }
  


  if (props.channels.length !== 0) {
    return (
      <>
        <div>Channel Name: {channelName} ID: {channelId} </div>

    <ChannelList 
      channels={props.channels}
    />

    <ChannelMessages
    id={channelId}
    headers={props.headers}
    loggedIn={props.loggedIn}
    channels={props.channels}
    />

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

    <Link
      to="/main-page"
      className="text-blue-800 hover:text-blue-500"
      >
      Create a channel
    </Link>

    </>

    

    );
  } 
  
  else {
    return <div>wenk wonk</div>;
  }
}

export default SelectedChannel;
