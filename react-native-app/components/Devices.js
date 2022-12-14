import Device from "./Device"
import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity} from 'react-native';


var Dim_width = Dimensions.get('window').width; //full width

const Devices = ({devices, curr_added, deleteDevice}) => {
    return (
        <View>
            <View  style={stylesDevices.devices}>
                {devices.map((device) => (<Device key={device.id} device ={device} deleteDevice={deleteDevice}/>))}
            </View>
        </View>
    )
}

const stylesDevices= StyleSheet.create({
    devices:{
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-around",
        width:Dim_width,
        // marginTop:30,
        // marginHorizontal:10,
        // marginRight:20,
        flexDirection:'row',
        height : "100%" , 
    }
})

export default Devices
