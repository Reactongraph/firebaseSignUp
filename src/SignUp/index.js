import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import firebase from "react-native-firebase";
import styles from "./styles";

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };
  handleSignUp = () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      alert("Email or Password Field can't be empty");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          alert("Sign Up Successful !!!");
          this.setState({ email: "", password: "" });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up With Firebase</Text>
        {this.state.errorMessage && (
          <Text
            style={{ color: "yellow", textAlign: "center", paddingTop: 10 }}
          >
            {this.state.errorMessage}
          </Text>
        )}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          placeholderTextColor="white"
          onChangeText={email => this.setState({ email, errorMessage: null })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
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
              this.handleSignUp();
            }}
            activeOpacity={0.6}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate("Login")}
            activeOpacity={0.6}
          >
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
