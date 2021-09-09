import React ,{useContext} from "react";
import {  View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignUp = () => {
  const {state,signup,clearErrorMessage}= useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage}/>
      <AuthForm 
      headerText= 'Sign Up for Tracker'
      errorMessage={state.errorMessage}
      onSubmit={signup}
      buttonText='Sign Up'
      />
      <NavLink
      text='Already have an account ? Sign in instead' 
      routeName='SignIn'/>
    </View>
  );
};
SignUp.navigationOptions=()=>{
  return ({
    headerShown: false
  });
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"center",
    marginBottom:250
  } 
});
export default SignUp;