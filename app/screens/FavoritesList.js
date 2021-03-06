import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Linking,
  View,
  Image,
  FlatList,
  StyleSheet,
  RefreshControl
} from "react-native";
import { Card, Button } from "react-native-elements";
import Favorite from "./Favorite";
import { onSignOut } from "../auth";
import ajax from "../ajax";

class FavoritesList extends Component {
  constructor(props) {
    super(props);
    this.fetchData();
    console.log(props.navigation);
    this.state = {
      refreshing: false,
      favorites: []
    };
    const loadListener = this.props.navigation.addListener(
      "willFocus",
      payload => {
        console.debug("willFocus");
        this.fetchData();
      }
    );
  }

  async fetchData() {
    const favorites = await ajax.getFavorites();
    console.log(favorites);
    this.setState({ favorites });
    console.log(this.state.favorites);
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  render() {
    if (this.state.favorites.length > 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(237, 255, 217)"
          }}
        >
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
            data={this.state.favorites}
            keyExtractor={(item, index) => item.shop_id.toString()}
            renderItem={({ item, index }) => (
              <Favorite favorite={item} id={item.id.toString()} />
            )}
          />
        </View>
      );
    } else if (this.state.favorites.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "rgb(237, 255, 217)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>You dont have any favorites.</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "rgb(237, 255, 217)",
    width: "100%"
  }
});

export default FavoritesList;
