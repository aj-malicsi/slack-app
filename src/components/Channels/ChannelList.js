import { Link } from "react-router-dom";


function ChannelList(props){

    let channels = props.channels
    

    return(
        <>
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
    </>
    )
}

export default ChannelList