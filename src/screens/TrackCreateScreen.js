import '../_mockLocation';
import React, { useContext,useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';
const TrackCreate = ({isFocused}) => { //  khi navigate tu man hinh khac sang 
  const {state : {recording} ,addLocation} = useContext(LocationContext);
  const callback = useCallback((location)=>{addLocation(location, recording)},[recording])
  const [err] = useLocation(isFocused||recording,callback);
  return (
    <View style={styles.container}>
      <Text h3>TrackCreate</Text>
      <Map />
      {!err ? <Text>please enable your location </Text> : null}
      <TrackForm/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
TrackCreate.navigationOptions = {
  title : 'Add track',
  tabBarIcon : <FontAwesome name="plus-circle" size={24} color="black" />
}
export default withNavigationFocus(TrackCreate);
