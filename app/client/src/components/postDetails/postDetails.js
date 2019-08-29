import React from "react";
import "./style.css";

function PostDetails(props) {
    return (
        <div>
            {/* <div className="text-center">
                <div className="row mt-5">
                    <h3 className="text-align-center text-dark font-weight-bold">Post Data</h3>
                </div>
                <img alt="" className="img-fluid" src={props.photoUrl} style={{ margin: "0 auto" }} />
                <h3>URL: {props.url}</h3>
                <h3>Post Type: {props.postType}</h3>
                <h3>Date: {props.date}</h3>
                <h3>Hashtags: {props.hashtags}</h3>
                <h3>Mentions: {props.mentions}</h3>
                <h3>Preset: {props.preset}</h3>
                <h3>Compensation: {props.compensation}</h3>
            </div> */}

            {/* <div className="text-center">
                <div className="row mt-5">
                    <h3 className="text-align-center text-dark font-weight-bold">Post Data</h3>
                </div>
                <img alt="" className="img-fluid" src={props.photoUrl} style={{ margin: "0 auto" }} />
                <h3>URL: {props.url}</h3>
                <h3>Post Type: {props.postType}</h3>
                <h3>Date: {props.date}</h3>
                <h3>Hashtags: {props.hashtags}</h3>
                <h3>Mentions: {props.mentions}</h3>
                <h3>Preset: {props.preset}</h3>
                <h3>Compensation: {props.compensation}</h3>
            </div> */}


            <div className="row mt-5">
                <h3 className="text-align-center text-dark font-weight-bold">Post Data</h3>
            </div>
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">URL</th>
                        <th scope="col">Post Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Hashtags</th>
                        <th scope="col">Mentions</th>
                        <th scope="col">Preset</th>
                        <th scope="col">Compensation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{props.url}</th>
                        <td>{props.postType}</td>
                        <td>{props.date}</td>
                        <td>{props.hashtags}</td>
                        <td>{props.mentions}</td>
                        <td>{props.preset}</td>
                        <td>{props.compensation}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PostDetails;
