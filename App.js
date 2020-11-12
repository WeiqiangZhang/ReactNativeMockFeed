import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./storeConfig";
import { Provider } from "react-redux";
import Feed from "./src/components/Feed";
import FeedInfo from "./src/components/FeedInfo";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              style={styles.container}
              screenOptions={{
                headerTitleAlign: "center",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#e82238" },
              }}
            >
              <Stack.Screen name="Feed" component={Feed} />
              <Stack.Screen name="FeedInfo" component={FeedInfo} />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}
