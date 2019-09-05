import React from "react";
import "./style.css";

function Dashboard() {
    return (
        <div className="container mt-5">
            <div className="row">
                <h3 className="text-align-center text-dark font-weight-bold">Dashboard</h3>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-white">Total Posts</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">3027</h2>
                                <p className="text-white mb-0">All Time</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fab fa-instagram fa-2x"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-white">Compensation</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">$340,000</h2>
                                <p className="text-white mb-0">Year To Date</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fa fa-money fa-2x"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-white">Follower Growth</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">-300</h2>
                                <p className="text-white mb-0">This Week</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fas fa-user-plus fa-2x"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-white">Engagement</h3>
                            <div className="d-inline-block">
                                <h2 className="text-white">3.69%</h2>
                                <p className="text-white mb-0">All Time</p>
                            </div>
                            <span className="float-right display-5 opacity-5"><i className="fas fa-heart fa-2x"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;