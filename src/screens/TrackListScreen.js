import React, {useContext} from "react";
import { Text, View, StyleSheet,FlatList, TouchableOpacity  } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { NavigationEvents } from "react-navigation";
const TrackList = ({navigation}) => {
  const {state , fetchTracks} = useContext(TrackContext);
  return (
    
    <View style={styles.container}>
      <NavigationEvents onWillFocus={fetchTracks}/>
      <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem = {({item})=>{
        return (
          <TouchableOpacity onPress = {()=>{navigation.navigate('TrackDetail',{_id: item._id})}}>
            <ListItem>
              <ListItem.Title>
                {item.name}
              </ListItem.Title>
                <ListItem.Chevron color="black" />
            </ListItem>
          </TouchableOpacity>
        );
      }}
      />
    </View>
  );
};
TrackList.navigationOptions={
  title :'Tracks'
}
const styles = StyleSheet.create({
  container :{
    marginTop: 30
  }
});
export default TrackList;