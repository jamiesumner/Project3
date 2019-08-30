import React, { Component } from "react";
import Nav from "../nav/nav";
import Col from "../column/col";
import Row from "../row/row";
import Dashboard from "../dashboard/dashboard";
import Feed from "../feed/feed";
import FollowerChart from "../charts/chart";

class DashboardPage extends Component {

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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashboardPage;
