import axios from 'axios'
import { get, useForm } from "react-hook-form";
import ChannelDisplay from './ChannelDisplay';
import {useState, useEffect} from 'react'

function ChannelMessages(props){
    //react hook form variables

    const [messages, setMessages] = useState([])
    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    //add headers for get/post requests
    const headersList = {
        "access-token": props.headers["access-token"],
        expiry: props.headers.expiry,
        client: props.headers.client,
        uid: props.headers.uid,
      };

   
      const channels = props.channels
      const index = channels.length - 1


    //form submit
    const onSubmit = (data) => {
        // console.log(data)
        // console.log(headersList)

        let messageData ={
            receiver_id: props.id,
            receiver_class: "Channel",
            body: data.message,

        }

        // console.log(messageData)
        
        axios.post("http://206.189.91.54/api/v1/messages", messageData, {
                headers: headersList,
            })

            .then((response) => {
                console.log("POST RESPONSE")
                console.log(response)
                axios
                    .get(`http://206.189.91.54/api/v1/messages?receiver_id=${props.id}&receiver_class=Channel`,{
                        headers: headersList,
                    })
                    .then((response) =>{
                        console.log("GET RESPONSE")
                        console.log(response.data.data)
                        setMessages(response.data.data)
                        // console.log("messageArr",messageArr)
                        

                    })
                    .catch( (error) => console.log(error.message) );    

            })
            .catch((error) => console.log(error.message));

        

    }
        
        // using component
        // axios
        //     .get(`http://206.189.91.54/api/v1/messages?receiver_id=${props.id}&receiver_class=Channel`,{
        //         headers: headersList,
        //     })
        //     .then((response) =>{
        //         console.log("GET RESPONSE")
        //         console.log(response.data.data)
        //         messageArr = response.data.data
        //         setMessages(messageArr)
        //         // console.log("messageArr",messageArr)
                

        //     })
        //     .catch( (error) => console.log(error.message) );

        useEffect( () =>{
            axios
            .get(`http://206.189.91.54/api/v1/messages?receiver_id=${props.id}&receiver_class=Channel`,{
                headers: headersList,
            })
            .then((response) =>{
                console.log("GET RESPONSE")
                console.log(response.data.data)
                messageArr = response.data.data
                setMessages(messageArr)
                // console.log("messageArr",messageArr)
                

            })
            .catch( (error) => console.log(error.message) );

        },[])

        

        //using array
        
        
        // axios
        //     .get(`http://206.189.91.54/api/v1/messages?receiver_id=${props.id}&receiver_class=Channel`,{
        //         headers: headersList,
        //     })
        //     .then((response) =>{
        //         console.log("GET RESPONSE")
        //         console.log(response.data.data)
        //         messageArr = response.data.data
        //         // console.log(response.data.data)
        //         // setMessages(response.data.data)
        //         // console.log("messageArr",messageArr)

                

        //     })
        //     .catch( (error) => console.log(error.message) );
      

    
        return(
            <>
            <div>channel messages</div>
            <ChannelDisplay
            messages={messages}
            />
            {/* <ul>
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
        </ul> */}
    
    
            <form onSubmit={handleSubmit(onSubmit)}>
    
            <input
                type="text"
                id="message"
                placeholder="say something!"
                {...register("message")}
                className = "border-solid border-2 border-black"
            />
            <br></br>
            <button type="submit" className = "border-solid border-2 border-red-500">send</button>
    
            
    
    
            </form>
            </>
        )
    
    
    
}

export default ChannelMessages