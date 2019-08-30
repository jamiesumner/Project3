import React, { Component } from "react";
import axios from "axios";
import Nav from "../nav/nav";
import Col from "../column/col";
import Row from "../row/row";
import Feed from "../feed/feed";
import PostDetails from "../postDetails/postDetails";
import PostDetailsMain from "../postDetails/postDetailsMain";

class PostsPage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("/api/post").then(results => {
            console.log(results);
            this.setState({
                posts: results.data
            })
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Feed />
                    <PostDetailsMain />
                    {this.state.posts.map(post => (
                        <PostDetails
                            url={post.url}
                            postType={post.postType}
                            date={post.date}
                            hashtags={post.hashtags}
                            mentions={post.mention}
                            preset={post.preset}
                            compensation={post.compensation} />
                    ))}
                </Row>
            </div>
        );
    }
}

export default PostsPage;
