import React from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios'
import ChannelMessages from "../Messaging/ChannelMessages";



function SelectedChannel(props) {
  //   let channels = props.channels;

  // console.log(props.channels.length);
  let index = props.channels.length - 1;
  console.log(props)

  const {params: {channelName, channelId} } = props.match;
  console.log(channelName, channelId)

  //if selected channel id is in the channel array get the channel name to display
  


  if (props.channels.length !== 0) {
    return (
      <>
        <div>Channel Name: {channelName} ID: {channelId} </div>

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
    id={channelId}
    headers={props.headers}
    loggedIn={props.loggedIn}
    channels={props.channels}
    />

    </>

    );
  } 
  
  else {
    return <div>wenk wonk</div>;
  }
}

export default SelectedChannel;
