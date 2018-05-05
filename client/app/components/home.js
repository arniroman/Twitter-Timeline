import React,{ Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchAllTweets } from "../logic";

class HomePage extends Component {

  handelInputData = e => {
    this.setState({ inputData: e.target.value });
  };

  handleButton = () => {
    let sendData = this.state.inputData;
    this.props.fetchAllTweets(sendData);
  };

  render() {
    console.log(this.props.allTwits);
    return (
      <div>
        <input onChange={e => this.handelInputData(e)} />
        <button onClick={this.handleButton}>Get</button>
        {this.props.allTwits.map((item, key) => (
          <div key={key}>
            <p>id: {item.id}</p>
            <p>text: {item.text} </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allTwits: state.getAllTwits
  };
};

export default connect(mapStateToProps, { fetchAllTweets })(HomePage);
