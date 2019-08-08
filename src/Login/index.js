import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import firebase from "react-native-firebase";
import styles from "./styles";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (email.length === 0 || password.length === 0) {
      alert("Email or Password Field can't be empty");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login Successful !!!");
          this.setState({ email: "", password: "" });
          this.props.navigation.navigate("Main");
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login With Firebase</Text>
        {this.state.errorMessage && (
          <Text
            style={{ color: "yellow", textAlign: "center", paddingTop: 10 }}
          >
            {this.state.errorMessage}
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={email => this.setState({ email, errorMessage: null })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={password =>
            this.setState({ password, errorMessage: null })
          }
          value={this.state.password}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.handleLogin();
            }}
          >
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
