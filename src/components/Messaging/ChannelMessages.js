import axios from 'axios'
import { useForm } from "react-hook-form";

function ChannelMessages(props){
    //react hook form variables
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
        console.log(data)
        console.log(headersList)

        let messageData ={
            receiver_id: props.id,
            receiver_class: "Channel",
            body: data.message,

        }

        // console.log(messageData)

        axios
            .post("http://206.189.91.54/api/v1/channels", messageData, {
                headers: headersList,
            })

            .then((response) => {
                console.log(response)    

            })
            .catch((error) => console.log(error.message));

    
    }

    
    return(
        <>
        <div>channel messages</div>

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