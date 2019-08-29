import React from "react";
import PropTypes from "prop-types";
import Chart from "../../utils/chart";

class FollowerChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const followerGrowth = new Chart(this.canvasRef.current, {
            type: "LineWithLine",
            data: this.props.chartData,
        });

        followerGrowth.render();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <canvas
                        height="150"
                        ref={this.canvasRef}
                    />
                </div>
            </div>
        );
    }
}

FollowerChart.propTypes = {
    chartData: PropTypes.object,
    chartOptions: PropTypes.object
};

FollowerChart.defaultProps = {
    chartData: {
        labels: Array.from(new Array(32), (_, i) => (i === 0 ? 1 : i)),
        datasets: [
            {
                label: "Current Month",
                fill: "start",
                data: [
                    10912,
                    10987,
                    11000,
                    11023,
                    11058,
                    11071,
                    11068,
                    11085,
                    11101,
                    11123,
                    11208,
                    11259,
                    11286,
                    11318,
                    11405,
                    11384,
                    11392,
                    11511,
                    11559,
                    11634,
                    11678
                ],
                backgroundColor: "rgba(0,123,255,0.1)",
                borderColor: "rgba(0,123,255,1)",
                pointBackgroundColor: "#ffffff",
                pointHoverBackgroundColor: "rgb(0,123,255)",
                borderWidth: 1.5,
                pointRadius: 0,
                pointHoverRadius: 3
            },
            {
                label: "Past Month",
                fill: "start",
                data: [
                    9234,
                    9278,
                    9312,
                    9374,
                    9420,
                    9467,
                    9501,
                    9512,
                    9538,
                    9578,
                    9601,
                    9621,
                    9645,
                    9678,
                    9721,
                    9812,
                    9888,
                    9910,
                    9993,
                    10012,
                    10078,
                    10138,
                    10223,
                    10259,
                    10312,
                    10389,
                    10459,
                    10490,
                    10601,
                    10687,
                    10701,
                    10812
                ],
                backgroundColor: "rgba(255,65,105,0.1)",
                borderColor: "rgba(255,65,105,1)",
                pointBackgroundColor: "#ffffff",
                pointHoverBackgroundColor: "rgba(255,65,105,1)",
                borderWidth: 1.5,
                pointRadius: 0,
                pointHoverRadius: 3
            }
        ]
    }
};

export default FollowerChart;
