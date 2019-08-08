import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d285f"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "white",
    color: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: "5%"
  },
  heading: {
    fontSize: 24,
    color: "white"
  },
  signUpText: {
    fontSize: 16,
    color: "#0d285f"
  },
  loginButton: {
    width: "30%",
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  buttonView: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    marginTop: "10%"
  }
});

export default styles;
