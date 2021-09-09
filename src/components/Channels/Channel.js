import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'
import ChannelMessages from "../Messaging/ChannelMessages";


function Channel(props) {
  //   let channels = props.channels;

  // console.log(props.channels.length);
  let index = props.channels.length - 1;
  console.log(props)
  



 

  if (props.channels.length !== 0) {
    console.log(props.channels[index].id)
    return (
      <>
        <div>Channel created {props.channels[index].name}</div>

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

    </>

    );
  } 
  
  else {
    return <div>wenk wonk</div>;
  }
}

export default Channel;
