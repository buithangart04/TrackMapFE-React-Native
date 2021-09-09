import React,{useContext} from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from '@expo/vector-icons'; 

const AccountScreen = () => {
  const {signout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:48}}>AccountScreen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  title : 'Acount',
  tabBarIcon : <FontAwesome name="gear" size={24} color="black" />
}
const styles = StyleSheet.create({
  container :{
    marginTop: 30
  }
});
export default AccountScreen;