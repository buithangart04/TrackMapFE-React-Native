import React,{useContext} from "react";
import { Text, View, StyleSheet } from "react-native";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
const TrackDetail = ({navigation}) => {
  const {state} = useContext(TrackContext);
  const _id= navigation.getParam('_id');
  const track = state.find(t => t._id===_id);
  const initialCoords = track.locations[0].coords;
  return (
    <View style={styles.container}>
      <Text>{track.name}</Text>
      <MapView
      initialRegion ={{
        longitudeDelta : 0.01,
        latitudeDelta :0.01,
        ...initialCoords
      }}
      style ={styles.map}
      >
        <Polyline coordinates = {track.locations.map(loc=> loc.coords)} lineDashPattern={[0]} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container :{
    marginTop: 30
  },
  map :{
    height: 300 
  }
});
export default TrackDetail;