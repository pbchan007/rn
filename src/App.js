import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions
} from "react-navigation"; // Version can be specified in package.json

import { SpringScrollView } from "react-native-spring-scrollview";
import { ChineseWithLastDateHeader } from "react-native-spring-scrollview/Customize";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home  lScreen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "Details" })]
              })
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    margin: 20
  }
});

class DetailsScreen extends React.Component {


  render() {
    const arr = [];
    for (let i = 0; i < 20; ++i) arr.push(i);
    return (
      // <SpringScrollView>
      //   {arr.map((i, index) =>
      //     <Text key={index} style={styles.text}>
      //     {index + 1} --------------
      //       eeeeeeeeeeeeeffffjjjjjjjjjjjjjModifyddsdf the '_contentCount','_bounces' and '_scrollEnabled' in
      //       BouncesExample.js to check if VerticalScrollView works well.}
      //     </Text>
      //   )}
      // </SpringScrollView>

      <SpringScrollView
        ref={ref => (this._scrollView = ref)}
        refreshHeader={ChineseWithLastDateHeader}
        onRefresh={() => {
          this.timer1 = setTimeout(() => {
            this._scrollView.endRefresh();
            this.timer2 = setTimeout(() => this.setState({ prop: "your changed props" }),200);
          }, 2000);
        }}
      >
        <Text>This is a Normal Refresh Test</Text>
      </SpringScrollView>

      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Mine MIneScreen</Text>
      //   <Button
      //     title="Go to Home"
      //     onPress={() => {
      //       this.props.navigation.dispatch(StackActions.reset({
      //         index: 0,
      //         actions: [
      //           NavigationActions.navigate({ routeName: 'Home' })
      //         ],
      //       }))
      //     }}
      //   />
      // </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const RootApp = createAppContainer(AppNavigator);

export default RootApp;
