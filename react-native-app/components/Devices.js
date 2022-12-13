import Device from "./Device"
import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity} from 'react-native';


var Dim_width = Dimensions.get('window').width; //full width

const Devices = ({devices, curr_added, deleteDevice}) => {
    return (
        <View>
            <View  style={styles.devices}>
                {devices.map((device) => (<Device key={device.id} device ={device} deleteDevice={deleteDevice}/>))}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    devices:{
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-evenly",
        width:Dim_width,
        marginTop:30,
        // marginLeft:20,
        marginRight:20,
        flexDirection:'row',
    }
})

export default Devices