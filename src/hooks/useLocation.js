import { useState,useEffect,useCallback } from "react";
import { requestPermissionsAsync ,watchPositionAsync, Accuracy} from "expo-location";
export default (shouldTrack , callback) => {
    const [err, setErr] = useState(null);
   
      useEffect(() => {
        let subcriber ; // khi move vào trong -> set local cho dễ quản lí vì chỉ nên tạo subcriber mỗi khi thằng recording thay đổi
        const startWatching = async () => {
          try {
            await requestPermissionsAsync();
            subcriber = await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10 
            },callback);
          } catch (error) {
            setErr(error);
          }
        };

        if(shouldTrack) startWatching();
        else {
            if (subcriber)subcriber.remove();
            subcriber= null;
        }
        return ()=> {
          if (subcriber)subcriber.remove();
        }
      }, [shouldTrack,callback]); // nên để những props , state , context để theo dõi cho việc render 
      return [err];
}