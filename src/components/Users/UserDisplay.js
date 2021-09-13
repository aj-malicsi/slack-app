
import { Redirect, useHistory, Link } from "react-router-dom";

function UserDisplay(props){

    let user = props.user


    return(
        <>
        <div>
              <Link className="text-pink-800 font-bold hover:text-pink-600"
              to={`/user-messages/${user.id}/${user.uid}`}>{user.uid}</Link>
        </div>
        </>
    )
}


export default UserDisplay