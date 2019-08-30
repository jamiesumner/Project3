import React, { Component } from "react";
import axios from "axios";
import Form from "./components/form/form";
import Nav from "./components/nav/nav";
import Col from "./components/column/col";
import Row from "./components/row/row";
import Dashboard from "./components/dashboard/dashboard";
import Feed from "./components/feed/feed";
import FollowerChart from "./components/charts/chart";
import PostDetails from "./components/postDetails/postDetails";
import PostDetailsMain from "./components/postDetails/postDetailsMain";
// import Login from "./components/login/login";

class App extends Component {
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
        {/* <Login /> */}
        <Row>
          <Col size="md-2">
            <Nav />
          </Col>
          <div className="container">
            <Col size="md-10">
              <Dashboard />
              <FollowerChart />
              <Feed />
              <Form />
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
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
