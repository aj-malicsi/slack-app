function RegisterForm(props){

    return(
        <form>
            <p>Register</p>
            <label>Enter Email:</label>
            <input type="email" placeholder="example@mail.com"></input>
            <br></br>

            <label>Enter Password:</label>
            <input type="password"></input>

            <br></br>
            <label>Confirm Password:</label>
            <input type="password"></input>
            <br></br>
            <button type="submit">Register</button>
        </form>

    )
}

export default RegisterForm