import {Redirect} from "react-router-dom";

function MainPage(props){

    const user = localStorage.getItem('loggedIn');

    console.log("main page check",user)
    if(user !== undefined && user !== ""){
        console.log(user)
        return(
            <div>Welcome! {props.loggedIn}</div>
        )
    }

    if(user === "" || user === undefined){
        console.log("else", user)
        return(
            <Redirect from="/main-page" to="/" />
        )
    }


    else
        return(
            <div> wenk wonk </div>
        )
    
    
}


export default MainPage;