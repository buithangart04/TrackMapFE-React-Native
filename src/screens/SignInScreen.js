import React ,{useContext,useEffect} from "react";
import {  View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignIn = () => {
  const {state,signin,clearErrorMessage}= useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage}/>
      <AuthForm 
      headerText= 'Sign In for Tracker'
      errorMessage={state.errorMessage}
      onSubmit={signin}
      buttonText='Sign In'
      />
      <NavLink
      text="Don't have an account ? Sign up instead" 
      routeName='SignUp'/>
    </View>
  );
};
SignIn.navigationOptions=()=>{
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
export default SignIn;