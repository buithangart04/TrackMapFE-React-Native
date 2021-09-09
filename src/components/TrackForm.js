import React, {useContext} from 'react';
import { Button,Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';
export default ()=>{
    const {state :{recording, name , locations},
    startRecording ,
    stopRecording , 
    changeName
} = useContext(LocationContext);
 const [saveTrack] = useSaveTrack();
    return(<>
    <Spacer>
        <Input value={name} onChangeText={changeName} placeholder='Enter Name '/>
    </Spacer>
    <Spacer>
        {recording?<Button title=' Stop' onPress={stopRecording}/> 
        :<Button title=' Start Recording' onPress={startRecording}/>
        }
    </Spacer>
    <Spacer>
        {!recording && locations.length ?<Button title='Save' onPress={saveTrack}/> 
        :null
        }
    </Spacer>
    </>);
}