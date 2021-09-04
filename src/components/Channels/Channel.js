import React from "react";
import { useHistory } from "react-router-dom";

function Channel(props) {
  //   let channels = props.channels;

  console.log(props.channels.length);
  let index = props.channels.length - 1;

  console.log(index);

  if (props.channels !== []) {
    return (
      <>
        <div>Welcome to</div>
      </>
    );
  } else {
    return <div>wenk wonk</div>;
  }
}

export default Channel;
