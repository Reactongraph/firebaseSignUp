import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  btn: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: "rgb(68, 99, 147)"
  },
  btnTxt: {
    color: "#fff"
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200
  }
});

export default styles;
