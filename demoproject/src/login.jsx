function login()
{
    return(
        <div>
        <h1>Welcome to our hospital Appointemnt Booking System</h1>
         <h2> This is login page</h2>
        <label>Email: </label><input type="text" required></input><br></br><br></br>
        <label>password: </label><input type="password" required></input><br></br><br></br>
        <button type="submit">Login</button>
        </div>
       
    )
}
export default login;