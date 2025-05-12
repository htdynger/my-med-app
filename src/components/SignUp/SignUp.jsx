import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate()
    return (
        <div className="form-background"> 
            <aside className="border border-primary container mw-25 rounded bg-light mx-auto mt-5">

                <h1 className="text fw-bold text-center">Sign Up</h1>
                <br></br>
                <p > Already have a account? <strong className="text text-decoration-underline text- fw-bold" onClick={()=>navigate('/login')}>  Login </strong>  </p>
            <br></br>
                <form> 
                    <label htmlFor="role">Role</label>
                    <select id="role" className="form-select">
                        <option value="specialist">Специалист</option>
                        <option value="admin">Администрация</option>
                        <option value="client">Клиент</option>
                    </select>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" className="form-control" />

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

export default SignUp;
