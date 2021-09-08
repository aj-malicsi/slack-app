import axios from 'axios'

function ChannelDisplay(props){
    // console.log(props)
    const messageArr = props.messages
    console.log(messageArr)
    
    return(
        <>
        <div>display messages here</div>
        <ul className="border-solid border-2 border-black">
          {
            messageArr.map((message) => {
              return (
                <> 
                <div key={message.id}>
                  {message.body} sent by {message.sender.uid}
                </div>
                </>
              )
            })
          }
        </ul>
        </>
    )
}


export default ChannelDisplay