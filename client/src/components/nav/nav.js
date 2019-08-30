import React from "react";
import "./style.css";

function Nav() {
    return (
        <div className="sidebar">
            <div className="row">
                <div className="col-md-12">
                    <img src="https://i.ibb.co/Kx03wbm/grmmr.png" width="150" alt="logo"></img>
                    <ul className="menu">
                        <a href="./index.html">
                            <i className="icon-speedometer menu-icon"></i><span>Home</span>
                        </a><br></br>
                        <a href="./index.html">
                            <i className="icon-speedometer menu-icon"></i><span>Dashboard</span>
                        </a><br></br>
                        <a href="./index.html">
                            <i className="icon-speedometer menu-icon"></i><span>Posts</span>
                        </a><br></br>
                        <a href="./index.html">
                            <i className="icon-speedometer menu-icon"></i><span>Add Post</span>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;