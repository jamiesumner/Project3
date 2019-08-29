import React from "react";
import axios from "axios";
import "./style.css";

class Form extends React.Component {
  state = {
    url: "",
    postType: "",
    date: "",
    hashtags: "",
    mentions: "",
    preset: "",
    compensation: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post("/api/post", this.state).then(response => console.log(response));

    console.log(this.state);

    alert("Post added!");
    this.setState({
      url: "",
      postType: "",
      date: "",
      hashtags: "",
      mentions: "",
      preset: "",
      compensation: ""
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <h3 className="text-align-center text-dark font-weight-bold">Add New Post</h3>
          </div>
          <div className="row mt-5">
            <div className="form-card">
              <div className="card-body">
                {/* <h2 className="card-title">Add New Post</h2> */}
                <p className="card-text text-align-center">Add the relevant information for your latest post!</p>
                <div className="col-md-12">
                  <form className="form">
                    <div className="form-group">
                      <input
                        value={this.state.url}
                        name="url"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Post URL"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.postType}
                        name="postType"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Post Type"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.date}
                        name="date"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Date"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.hashtags}
                        name="hashtags"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Hashtags"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.mentions}
                        name="mentions"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Mentions"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.preset}
                        name="preset"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Preset"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value={this.state.compensation}
                        name="compensation"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Compensation"
                      />
                    </div>
                    <div className="submit">
                      <button className="btn btn-dark" onClick={this.handleFormSubmit}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Form;