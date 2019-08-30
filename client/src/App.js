import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/nav/nav";
import Col from "./components/column/col";
import Row from "./components/row/row";
import DashboardPage from "./components/pages/dashboardPage";
import AddPostsPage from "./components/pages/addPostsPage";
import PostsPage from "./components/pages/postsPage";

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
      <Router>
        <div>
          <Row>
            <Col size="md-2">
              <Nav />
            </Col>
            <Col size="md-10">
              <Switch>
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/addpost" component={AddPostsPage} />
              </Switch>
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
