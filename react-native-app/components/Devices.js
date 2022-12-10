import Device from "./Device"
import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity} from 'react-native';


var Dim_width = Dimensions.get('window').width; //full width

const Devices = ({devices, curr_added}) => {


    return (

        <View>
            <View  style={styles.devices}>
                {connected_dev.map((device) => (<Device key={device.id} device ={device}/>))}
            </View>
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