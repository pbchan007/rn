import React from "react";
import { StackNavigator } from "react-navigation";

// 引入页面组件
import Home from "../pages/Home";
import Mine from "../pages/Mine";

// 配置路由
const AppNavigator = StackNavigator({
  ScreenHome: {
    screen: Home
  },
  ScreenMine: {
    screen: Mine
  }
});

export default () => <AppNavigator />;