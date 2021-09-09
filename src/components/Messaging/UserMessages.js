import UserMessagesDisplay from "./UserMessagesDisplay"
import { useForm } from "react-hook-form";
import axios from 'axios'
import {useState, useEffect} from 'react'



function UserMessages(props){
    // console.log(props.match)

    const [messages, setMessages] = useState([])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const{params: {userId, userName}} = props.match

    //add headers for get/post requests
    const headersList = {
        "access-token": props.headers["access-token"],
        expiry: props.headers.expiry,
        client: props.headers.client,
        uid: props.headers.uid,
      };

    //form submit
    const onSubmit = (data) =>{
        console.log(data)
        
        let messageData ={
            receiver_id: userId,
            receiver_class: "User",
            body: data.message,
        }
        
        console.log(messageData)

        axios.post("http://206.189.91.54/api/v1/messages", messageData, {
                headers: headersList,
            })

            .then((response) => {
                console.log("POST RESPONSE")
                console.log(response)
                axios
                    .get(`http://206.189.91.54/api/v1/messages?receiver_id=${userId}&receiver_class=User`,{
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
            .get(`http://206.189.91.54/api/v1/messages?receiver_id=${userId}&receiver_class=User`,{
                headers: headersList,
            })
            .then((response) =>{
                console.log("GET RESPONSE")
                console.log(response.data.data)
                setMessages(response.data.data)
                

            })
            .catch( (error) => console.log(error.message) ); 

    },[userId])

    return(
        <>
        <div>messages with {userName}{userId}</div>

        <UserMessagesDisplay
        messages={messages}
        />

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


export default UserMessages