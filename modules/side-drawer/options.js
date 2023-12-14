import LoginScreen from "../../screens/LoginScreen";
import login from "../loginName";
const screenSet = [{
  name: 'login',
  component: login?.navigator,
  options: {}
}, {
  name: 'LoginScreen',
  component: LoginScreen,
  options: {}
}];
const drawerOptions = {
  initialRouteName: "",
  drawerType: "",
  screenOptions: {},
  drawerPosition: "",
  drawerStyle: {},
  overlayColor: "",
  hideStatusBar: false,
  edgeWidth: 0,
  keyboardDismissMode: "",
  minSwipeDistance: 0
};
export default {
  screenSet: screenSet,
  drawerOptions: drawerOptions
};