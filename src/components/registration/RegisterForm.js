
import {useForm} from "react-hook-form";
import axios from "axios";

function RegisterForm(props){

    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data.email, data.password, data.conPass);
        
        axios.post("http://206.189.91.54/api/v1/auth", {
            email: data.email,
            password: data.password,
            password_confirmation: data.conPass,
            })
            .then((response) => {
                console.log("response",response);
            })
            .catch((error) => console.log("this is an error",error));
        
        };
        



    

    return(
        <form onSubmit={handleSubmit(onSubmit)}> 
            <p>Register</p>
            <label>Enter Email:</label>
            <input 
            type="email" 
            placeholder="Email"
            {...register("email")}
            />
            <br></br>

            <label>Enter Password:</label>
            <input 
            type="password" 
            placeholder="Password"
            {...register("password", {required:true}) }
            required={true}
            />

            <br></br>

            <label>Confirm Password:</label>
            <input 
            type="password"
            placeholder="Confirm Password"
            required={true}
            {...register("conPass")}
            />

            <br></br>
            <button type="submit">Register</button>
        </form>

    )
}

export default RegisterForm