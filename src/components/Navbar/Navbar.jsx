import { useState } from "react"
import logoURL from './../../assets/logo.webp'
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate()
    // const [burger, setBurger] = useState(false)
    const burger = window.innerWidth <= 768;

    const [navIsVisible, setNavIsVisible] = useState(false)
    const handleBurgerClick = () => {
        setNavIsVisible(!navIsVisible)
        
    }

    return (

        <>
            <nav>
                
                {!burger ? <div style={{"borderBottom": "2px solid #000"}} className="row mt-4 align-items-center text-center">
                        {/* <div className="col-md-2"><img src={logoURL} className="img img-fluid"></img>  </div> */}
                        <div className="col-md-2"> <p className=" fw-bold text-primary"> Stay Health </p> </div> 


                        <div className=" col-md-1">
                            <button onClick={()=>navigate('home')} className="btn btn-default">Home</button>
                        </div>
                        <div className=" col-md-2">
                            <button onClick={()=>navigate('appointments')} className="btn btn-default">Appointments</button>
                        </div>
                        <div className=" col-md-2">
                            <button onClick={()=>navigate('health')} className="btn btn-default">Health Blog</button>
                        </div>
                        <div className=" col-md-1">
                            <button onClick={()=>navigate('reviews')} className="btn btn-default">Reviews</button>
                        </div>
                        <div className=" col-md-2">
                            <button onClick={()=>navigate('signup')} className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick={()=>navigate('login')} className="btn btn-primary">Login</button>
                        </div>
                    </div> 
                
                : 

                <div style={{"borderBottom": "2px solid #000"}} className="row align-items-center text-center mt-3">
                    <div className="col-9"> <p className="h2 fw-bold text-primary"> Stay Health </p> </div> 

                    
                    
                    <div className="col-3">
                        <button className="btn btn-primary" onClick={handleBurgerClick}> ☰ </button> 
                    </div>

                    <div className={navIsVisible ? '' : 'd-none'}> 
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('home')} className="btn btn-default">Home</button>
                        </div>
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('appointments')} className="btn btn-default">Appointments</button>
                        </div>
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('health')} className="btn btn-default">Health Blog</button>
                        </div>
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('reviews')} className="btn btn-default">Reviews</button>
                        </div>
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('signup')} className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="col-12  col-md-auto">
                            <button onClick={()=>navigate('login')} className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
                
                }
            </nav>
        </>
    )
}

export default Navbar