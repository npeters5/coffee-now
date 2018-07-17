import React, { Component } from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

class SignIn extends Component {
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
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Email address..."
            value={this.state.email}
            onChangeText={this.onFieldChange("email")}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder="Password..."
            value={this.state.password}
            onChangeText={this.onFieldChange("password")}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={() => {
              onSignIn().then(() => navigation.navigate("SignedIn"));
            }}
          />
        </Card>
      </View>
    );
  }
}

export default SignIn;
