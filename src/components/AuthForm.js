import React ,{useState} from "react";
import { StyleSheet } from "react-native";
import { Text,Button ,Input} from "react-native-elements";
import Spacer from "../components/Spacer";
const AuthForm  = ({headerText, errorMessage,buttonText , onSubmit }) => {
  const [email ,setEmail]= useState('');
  const [password ,setPassword]= useState('');
  return (
    <>
      <Spacer>
        <Text h3 >{headerText}</Text>
      </Spacer>
      
      <Input label='Email' value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false} />
      <Spacer/>
      <Input label='Password' secureTextEntry  value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false}/>
       {errorMessage ?<Text>{errorMessage}</Text> :null }
      <Spacer>
      <Button title={buttonText} onPress={()=>{onSubmit({email,password})}} />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({});
export default AuthForm ;