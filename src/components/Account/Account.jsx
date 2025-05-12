import './Account.css';
import { useRef, useState } from 'react';

const Account = () => {
    const containerRef = useRef(null);
    const containerRegisterMobileRef = useRef(null);
    const containerLoginMobileRef = useRef(null);

    const isSmallScreen = window.innerWidth <= 768;

    const [isLoginMenu, setIsLoginMenu] = useState(true);

    const handleRegisterClick = () => {
        containerRef.current.classList.add('active');
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove('active');
    };

    const handleMobileLoginClick = () => {
        containerLoginMobileRef.current.classList.remove('unSelectMobile');
        containerRegisterMobileRef.current.classList.add('unSelectMobile');
        setIsLoginMenu(true);
    };

    const handleMobileRegisterClick = () => {
        containerLoginMobileRef.current.classList.add('unSelectMobile');
        containerRegisterMobileRef.current.classList.remove('unSelectMobile');
        setIsLoginMenu(false);
    };

    return (
        <div className='form-background'>
            {!isSmallScreen ? (
                <div ref={containerRef} className="containerAccount my-3" id="container">
                    <div className="background-blur"></div>

                    <div className="form-container sign-up">
                        <form>
                            <h1 className='text text-center mb-3'>Create Account</h1>

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

                            <br />

                            <button className='btn btn-primary' type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="form-container sign-in">
                        <form>
                            <h1 className='text text-center mb-3'>Sign In</h1>
                            
                            <label htmlFor='email' className='text text-start'> Email </label>
                            <input id='email' type="email" placeholder="" />

                            <label htmlFor='password' className='text text-start'> Password </label>
                            <input id='password' type="password" placeholder="Password" />

                            <a href="#">Forget Your Password?</a>

                            <button className='btn btn-primary' type="submit">Sign In</button>
                        </form>
                    </div>

                    <div className="toggle-container">
                        <div className="toggle">
                            <div className="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button
                                    onClick={handleLoginClick}
                                    className="hidden btn btn-primary"
                                    id="login"
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>
                                    Register with your personal details to use all of site features
                                </p>
                                <button
                                    onClick={handleRegisterClick}
                                    className="hidden btn btn-primary"
                                    id="register"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='containerAccountMobile mt-5'>
                    <div className='row text-center'>
                        <div
                            onClick={handleMobileLoginClick}
                            ref={containerLoginMobileRef}
                            className='col-6'
                        >
                            <button className='btn fw-bold'>Sign In</button>
                        </div>
                        <div
                            onClick={handleMobileRegisterClick}
                            ref={containerRegisterMobileRef}
                            className='col-6 unSelectMobile'
                        >
                            <button className='btn fw-bold'>Sign Up</button>
                        </div>
                    </div>

                    {isLoginMenu ? (
                        <form className='row px-4 my-5'>
                            <h1 className='my-4 text-center'>Login</h1>

                            <label htmlFor='email'>Email</label>
                            <input id='email' className='my-2' type="email" placeholder="" />

                            <label htmlFor='password'>Password</label>
                            <input id='password' className='my-2' type="password" placeholder="" />

                            <button className='btn my-5 btn-primary' type="submit">Sign In</button>
                        </form>
                    ) : (
                        <form className='row px-4 my-5'>
                            <h1 className='my-4 text-center'>Create Account</h1>

                            <label className='text text-start' htmlFor="role">Role</label>
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


                            <button className='btn my-5 btn-primary' type="submit">Sign In</button>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default Account;
