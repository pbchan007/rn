import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { SpringScrollView } from "react-native-spring-scrollview";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    const arr = [];
    for (let i = 0; i < 20; ++i) arr.push(i);
    return (
      // <SpringScrollView>
      //   {arr.map((i, index) =>
      //     <Text key={index} style={styles.text}>
      //       Modify the '_contentCount','_bounces' and '_scrollEnabled' in
      //       BouncesExample.js to check if VerticalScrollView works well.
      //     </Text>
      //   )}
      // </SpringScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home lllllScreen</Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  text:{
    fontSize:16,
    margin:20
  }
});
