import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import firebase from "react-native-firebase";
import ImagePicker from "react-native-image-picker";
import styles from "./styles";

const options = {
  title: "Select Image",
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class Main extends React.Component {
  state = { currentUser: null, imgSource: "" };

  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert("You cancelled image picker 😟");
      } else if (response.error) {
        alert("And error occured: ", response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source
        });
      }
    });
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Firebase Image Upload </Text>
        <Text style={styles.instructions}>
          Hello 👋, Let us upload an Image
        </Text>
        {/** Select Image button */}
        <TouchableOpacity style={styles.btn} onPress={this.pickImage}>
          <View>
            <Text style={styles.btnTxt}>Pick image</Text>
          </View>
        </TouchableOpacity>
        {/** Display selected image */}
        {this.state.imgSource ? (
          <Image source={this.state.imgSource} style={styles.image} />
        ) : (
          <Text>Select an Image!</Text>
        )}
        <View style={{ top: 20, right: "30%" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <View>
              <Text style={styles.btnTxt}>Back to Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
