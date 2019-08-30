import React from "react";
// import PostDetails from "./postDetails";

function PostDetailsMain() {
    return (
        <div>
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
                {/* <PostDetails /> */}
            </table>
        </div>
    )
}

export default PostDetailsMain;