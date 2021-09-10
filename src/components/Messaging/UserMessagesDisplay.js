import axios from 'axios'

function UserMessagesDisplay(props){

    let messageArr = props.messages
    

    return(
        <>
        <div>user messages display
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
        </div>
        </>
    )
}


export default UserMessagesDisplay