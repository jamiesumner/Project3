import React from "react";
import "./style.css";

function Login() {
    return (
        <div>
            <div className="row justify-content-center h-100">
                <div className="col-md-6">
                    <div className="form-input-content">
                        <div className="login-card login-form">
                            <div className="card-body">
                                <img src="https://i.ibb.co/Kx03wbm/grmmr.png" width="150" alt="logo"></img>
                                <form className="login-input">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email"></input>
                                    </div>
                                    <button className="btn submit">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;