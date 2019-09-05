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
                    258936,
                    258834,
                    258765,
                    258752,
                    258711
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
                    259128,
                    259130,
                    259147,
                    259175,
                    259180,
                    259171,
                    259170,
                    259167,
                    259180,
                    259197,
                    259170,
                    259158,
                    259145,
                    259222,
                    259231,
                    259190,
                    259172,
                    259147,
                    259160,
                    259169,
                    259147,
                    259138,
                    259127,
                    259132,
                    259125,
                    259131,
                    259080,
                    259045,
                    259031,
                    259011,
                    258930,
                    258923
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
