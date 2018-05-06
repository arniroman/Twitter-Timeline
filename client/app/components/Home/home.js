import React from "react";
import Tweets from "../Tweets/tweetsView";
import { css } from "aphrodite";
import styles from "./homeStyle";

export const HomePage = () => {
  return (
    <div>
      <header className={css(styles.header)}>
        <i class="fab fa-twitter" />
      </header>
      <Tweets />
    </div>
  );
};
