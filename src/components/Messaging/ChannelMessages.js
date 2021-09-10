import axios from 'axios'
import { get, useForm } from "react-hook-form";
import ChannelDisplay from './ChannelDisplay';
import {useState, useEffect} from 'react'

function ChannelMessages(props){
    //react hook form variables

    const [messages, setMessages] = useState([])
    console.log("messages",props.id)
    

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
        
        let messageData ={
            receiver_id: props.id,
            receiver_class: "Channel",
            body: data.message,

        }
  
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
                        

                    })
                    .catch( (error) => console.log(error.message) );    

            })
            .catch((error) => console.log(error.message));

        

    }
    

        useEffect( () =>{
            axios
            .get(`http://206.189.91.54/api/v1/messages?receiver_id=${props.id}&receiver_class=Channel`,{
                headers: headersList,
            })
            .then((response) =>{
                console.log("GET RESPONSE")
                console.log(response.data.data)
                setMessages(response.data.data)   

            })
            .catch( (error) => console.log(error.message) );

        },[props.id])

        

      

    
        return(
            <>
            <div className="
            
            
            ">
            <ChannelDisplay
            messages={messages}
            />
            
            <form onSubmit={handleSubmit(onSubmit)}>
    
            <input
                type="text"
                id="message"
                placeholder="say something!"
                {...register("message")}
                className="
                border-solid 
                border-2 
                border-black
                w-5/12
                ml-40
                p-1
                "
            />
            {/* <br></br> */}
            <button type="submit" 
            className="
            border-solid 
            border-2
            border-green-500 
            
            bg-green-500
            w-32
            
            p-1
            
            ">
            send</button>    
            </form>
            </div>
            </>
        )
    
    
    
}

export default ChannelMessages