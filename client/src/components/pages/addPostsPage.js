import React, { Component } from "react";
import axios from "axios";
import Form from "../form/form";
import Nav from "../nav/nav";
import Col from "../column/col";
import Row from "../row/row";

class AddPostsPage extends Component {
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
                    <Col size="md-10">
                        <Form />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default AddPostsPage;
