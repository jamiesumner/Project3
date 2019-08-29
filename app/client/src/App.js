import React, { Component } from "react";
import axios from "axios";
import Form from "./components/form/form";
import Nav from "./components/nav/nav";
import Col from "./components/column/col";
import Row from "./components/row/row";
import Dashboard from "./components/dashboard/dashboard";
import Feed from "./components/feed/feed";
import FollowerChart from "./components/charts/chart";

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
        <Row>
          <Col size="md-2">
            <Nav />
          </Col>
          <Col size="md-10">
            <Dashboard />
            <FollowerChart />
            <Feed />
            <Form />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
