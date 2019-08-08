import React, { Component } from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Main from "./src/Main/index";
import Login from "./src/Login/index";
import SignUp from "./src/SignUp/index";

const AppNavigator = createSwitchNavigator(
  {
    Main: { screen: Main },
    Login: { screen: Login },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
