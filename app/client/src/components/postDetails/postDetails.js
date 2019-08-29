import React from "react";

function postDetails(props) {
    return (
        <div className="text-center">
            <img alt={props.description} className="img-fluid" src={props.photoUrl} style={{ margin: "0 auto" }} />
            <h3>URL: {props.url}</h3>
            <h3>Post Type: {props.postType}</h3>
            <h3>Date: {props.date}</h3>
            <h3>Description: {props.description}</h3>
            <h3>Caption: {props.caption}</h3>
            <h3>Hashtags: {props.hashtags}</h3>
            <h3>Mentions: {props.mentions}</h3>
            <h3>Preset: {props.preset}</h3>
            <h3>Sponsored: {props.sponsored}</h3>
            <h3>Brand: {props.brand}</h3>
            <h3>Requirements: {props.requirements}</h3>
            <h3>Compensation: {props.compensation}</h3>
        </div>
    );
}

export default PostDetails;
