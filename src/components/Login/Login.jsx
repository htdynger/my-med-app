const Login = () => {

    return (
        <div className="form-background"> 
            <aside className="border border-primary container mw-25 rounded bg-light mx-auto mt-5">

                <h1 className="text fw-bold text-center">Login</h1>
                <br></br>
                <p>Please fill in the form to log in.</p>
            <br></br>
                <form> 
                    

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                    
                    <br></br>
                    <button className="btn btn-primary mx-1"> Submit </button>
                    <button className="btn btn-danger mx-1"> Reset </button>
                    <br></br>
                    <br></br>
                </form>
            </aside>
        </div>
    )
}

export default Login;
