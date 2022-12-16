import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

var Dim_width = Dimensions.get('window').width; //full width

const RemainingDev = ({remaining, AddDeviceToConnected, navigation}) => {

    // return (
    //     <TouchableOpacity onPress={() => AddDeviceToConnected(remaining.id)}>
    //         <View style={[styles.card, styles.elevation]}>
    //             <Text style={styles.listItemText}>{remaining.type + " " + remaining.device_num}</Text>
    //         </View>
    //     </TouchableOpacity>
    // );

    return (
        <TouchableOpacity onPress={() => AddDeviceToConnected(remaining.id)}>
            <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor:'black'}}>
                {/* <Text style={{color:'white', fontSize:35, marginBottom:40}}>Add Device</Text> */}

                <View style={[styles.card, styles.elevation]}>
                    <Text style={{color:'white', fontSize:20}}>{remaining.type + " " + remaining.device_num}</Text>
                    {/* <Text style={{color:'white', fontSize:20}}>{1 > 0 ? "OFF" : "ON"}</Text> */}
                    <AntDesign style={{ marginRight:10}}name="pluscircleo" size={35} color="white" />
                </View>
            </View>
        </TouchableOpacity>        
      );


}

const styles= StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#252525',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color:'white',
    },
    listItemText: {
    fontSize: 18,
    color:'white'
    },
    card: {
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 25,
        width: '75%',
        marginVertical: 10,
        color:'white',
        backgroundColor: '#252525',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    elevation: {
        elevation: 20,
    }
})

export default RemainingDev