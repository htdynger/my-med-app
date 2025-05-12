import './style.css';
import { useRef, useEffect } from 'react';
const Account = () => {

    const containerRef = useRef(null)
    

    useEffect(()=>{
        const container = containerRef.current
    })
    
    const handleRegisterClick = () => {
        container.classList.add('active')
    }

    const handleLoginClick = () => {
        container.classList.remove('active')
    }


    return (
            <div className='form-background'>
                <div ref={containerRef} className="containerAccount mt-3" id="container">
                    <div className="form-container sign-up">
                        <form>

                            <h1>Create Account</h1>


                            <label htmlFor="role">Role</label>
                            <select id="role" className="form-select">
                                <option value="specialist">Специалист</option>
                                <option value="admin">Администрация</option>
                                <option value="client">Клиент</option>
                            </select>

                            <label className='text text-start' htmlFor="name">Name</label>
                            <input id='name' type="text" placeholder="" />

                            <label className='text text-start' htmlFor="phone">Phone</label>
                            <input id='phone' type="tel" placeholder="" />

                            <label className='text text-start' htmlFor="email">Email</label>
                            <input id='email' type="email" placeholder="" />

                            <label className='text text-start' htmlFor="password">Password</label>
                            <input id='password' type="password" placeholder="" />



                            <button className='btn btn-primary' type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="form-container sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forget Your Password?</a>

                            <button className='btn btn-primary' type="submit">Sign In</button>
                        </form>
                    </div>


                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button onClick={handleLoginClick} className="hidden btn btn-primary" id="login">Sign In</button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>
                                    Register with your personal details to use all of site features
                                </p>
                                <button onClick={handleRegisterClick} className="hidden btn btn-primary" id="register">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Account;
