import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  tweetsWrapp: {
    display: "flex",
    justifyContent: "center"
  },
  searchInput: {
    height: "50px",
    width: "400px",
    fontSize: "35px"
  },
  searchBtn: {
    fontSize: "40px",
    marginLeft: "10px",
    display: "inline",
    cursor: "pointer",
    color: "#b1b1b1",
    ":hover": {
      color: "#966fd6"
    }
  },
  tweetsContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "900px"
  },
  tweetsItemBox: {
    margin: "50px 0"
  },
  tweetsItems: {
    border: "1px solid",
    padding: "50px",
    borderColor: "#cdcdcd"
  },
  errorBlock: {
    paddingTop: '25px',
    color: 'red'
  }
});
