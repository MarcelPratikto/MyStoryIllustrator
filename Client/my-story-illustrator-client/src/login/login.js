function Login(){
    return(
        <Form>
            <input type="text"></input><br></br>
            <input type="password"></input><br></br>
            <input type="submit" value="Login"></input>
            {/* #TODO submit should hook into the backend here*/}
            {/* #TODO loging in should be full-featured: 'forgot password', 'username or password incorrect', etc */}
        </Form>
    );
}

export default Login;