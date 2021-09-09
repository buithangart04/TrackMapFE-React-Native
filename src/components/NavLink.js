import React from "react";
import { StyleSheet,TouchableOpacity } from "react-native";
import { Text} from "react-native-elements";
import { withNavigation } from "react-navigation";
const NavLink  = ({text,routeName,navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={()=>navigation.navigate(routeName)} >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
    link:{
        color:"blue"
    }
});
export default withNavigation(NavLink) ;