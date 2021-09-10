import { Link } from "react-router-dom";


function ChannelList(props){

    let channels = props.channels
    

    return(
        <>
    <div className="
    bg-pink-800
    w-40 h-full
    text-white
    absolute
    
    " >
    Channels
     <ul className="text-center">
       {
        props.channels.map((channel) => {
          return (
            <> 
            <p key={channel.id} 
               className ="hover:text-green-400">

              <Link to={`/channel/${channel.id}/${channel.name}`}>{channel.name}</Link>
            </p>
            </>
          )
        })
      }
    </ul>
    </div>
    </>
    )
}

export default ChannelList