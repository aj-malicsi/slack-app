import axios from 'axios'

function ChannelDisplay(props){
    // console.log(props)
    const messageArr = props.messages
    // console.log(messageArr)
    
    return(
        <>
        <div className="overflow-auto 
        text-left
        h-screen
        w-screen
        ml-40
        overflow-auto   
        ">
        <ul className="">
          {
            messageArr.map((message) => {
              return (
                <> 
                <p key={message.id} className="font-bold p-1">
                  {message.sender.uid}
                </p>
                <p key={message.id}>
                  {message.body}
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


export default ChannelDisplay