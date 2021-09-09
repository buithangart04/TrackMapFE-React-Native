import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const instance =  axios.create({
    baseURL: 'http://55c9-2405-4803-fbc8-9a50-a47a-2971-6613-a75a.ngrok.io'
});
instance.interceptors.request.use (
    async (config)=>{
        const token= await AsyncStorage.getItem('token');
        if(token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }

);
export default instance; 