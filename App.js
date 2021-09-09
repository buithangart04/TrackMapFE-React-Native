import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "./src/screens/AccountScreen";
import SignIn from "./src/screens/SignInScreen";
import SignUp from "./src/screens/SignUpScreen";
import TrackCreate from "./src/screens/TrackCreateScreen";
import TrackList from "./src/screens/TrackListScreen";
import TrackDetail from "./src/screens/TrackDetailScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext";
import { setNavigator } from "./src/navigationRefs";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { FontAwesome } from '@expo/vector-icons'; 

const trackFlow= createStackNavigator({
  TrackList,
  TrackDetail,
});
trackFlow.navigationOptions = {
  title : 'Tracks',
  tabBarIcon : <FontAwesome name="list" size={24} color="black" />
}
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignIn,
    SignUp,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow:trackFlow ,
    TrackCreate,
    Acount: AccountScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App
          ref = {(navigator) => {
            setNavigator(navigator);
          }}
        />
      </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
};
