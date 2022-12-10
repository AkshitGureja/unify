import Device from "./Device"
import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity} from 'react-native';
import AddDevice from "./AddDevice";
import RemainingDev from "./RemainingDev";

var Dim_width = Dimensions.get('window').width; //full width

const Devices = ({devices, curr_added}) => {

    connected_dev = [];
    remaining_dev = [];

    for(let i = 0; i < devices.length; i++){
        if(curr_added.includes(devices[i].id)){
            connected_dev.push(devices[i]);
        }else{
            remaining_dev.push(devices[i]);
        }
    }

    return (

        <View>
            <View  style={styles.devices}>
                {connected_dev.map((device) => (<Device key={device.id} device ={device}/>))}
            </View>
            {connected_dev.length < 7 ? <AddDevice/> : ""}
            {remaining_dev.map((not_connected) => (<RemainingDev remaining={not_connected}/>))}

        </View>
    )
}

const styles= StyleSheet.create({
    devices:{
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        width:Dim_width,
        marginTop:30,
        flexDirection:'row',
    }
})

export default Devices