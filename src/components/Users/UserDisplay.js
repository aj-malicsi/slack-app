
import { Redirect, useHistory, Link } from "react-router-dom";

function UserDisplay(props){

    let user = props.user


    return(
        <>
        <div>
              <Link to={`/user-messages/${user.id}/${user.uid}`}>{user.uid}</Link>
        </div>
        </>
    )
}


export default UserDisplay