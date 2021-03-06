import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import ajax from "../ajax";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  onFieldChange = fieldName => text => {
    this.setState({
      [fieldName]: text
    });
  };

  render() {
    const { navigation } = this.props;
    console.log(this.state);

    return (
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: "rgb(58, 48, 66)",
          height: "100%"
        }}
      >
        <Card containerStyle={{ backgroundColor: "rgb(237, 255, 217)" }}>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Email address..."
            value={this.state.email}
            onChangeText={this.onFieldChange("email")}
            keyboardType="email-address"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            inputStyle={{ color: "black" }}
            secureTextEntry
            placeholder="Password..."
            value={this.state.password}
            onChangeText={this.onFieldChange("password")}
          />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..." />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="rgb(219, 157, 71)"
            title="SIGN UP"
            onPress={() => {
              ajax
                .userSignUp(this.state.email, this.state.password)
                .then(onSignIn)
                .then(() => navigation.navigate("SignedIn"));
            }}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
        </Card>
      </View>
    );
  }
}

export default SignUp;
