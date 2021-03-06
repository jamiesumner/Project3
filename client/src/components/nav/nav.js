import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="col-md-12">
                    <img src="https://i.ibb.co/Kx03wbm/grmmr.png" width="150" alt="logo"></img>
                    <ul className="menu">
                        <li className="nav-item">
                            <Link to="/login" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/dashboard"
                                className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/posts"
                                className={window.location.pathname === "/posts" ? "nav-link active" : "nav-link"}
                            >
                                Posts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/addpost"
                                className={window.location.pathname === "/addpost" ? "nav-link active" : "nav-link"}
                            >
                                Add New Post
                            </Link>
                        </li>
                        {/* </ul> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;