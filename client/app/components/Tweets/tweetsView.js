import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllTweets } from "../../logic";
import { css } from "aphrodite";
import styles from "./styleTweets";

class TweetsView extends Component {
  handelInputData = e => {
    this.setState({ inputData: e.target.value });
  };

  sendData = () => {
    let sendData = this.state.inputData;
    this.props.fetchAllTweets(sendData);
  };

  tweetsView = () => {
    if (this.props.allTwits.errors) {
      return (
        <div className={css(styles.errorBlock)}>
          {this.props.allTwits.errors[0].message}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.allTwits.map((item, key) => (
            <div className={css(styles.tweetsItemBox)} key={key}>
              <img src={item.user.profile_image_url_https} />
              <p>
                {new Date(item.created_at).toLocaleString("en-US", {
                  timeZone: "Europe/Helsinki"
                })}
              </p>
              <p className={css(styles.tweetsItems)}>{item.text} </p>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div className={css(styles.tweetsWrapp)}>
        <div className={css(styles.tweetsContainer)}>
          <div>
            <input
              className={css(styles.searchInput)}
              onChange={e => this.handelInputData(e)}
              placeholder="Search users..."
            />
            <div className={css(styles.searchBtn)} onClick={this.sendData}>
              <i class="fas fa-search" />
            </div>
            {this.tweetsView()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allTwits: state.getAllTwits
  };
};

export default connect(mapStateToProps, { fetchAllTweets })(TweetsView);
