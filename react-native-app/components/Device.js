import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full width

const Device = ({device, deleteDevice}) => {
    return (
        <View style={[styles.card, styles.elevation]}>
            <View>
                <Text style={styles.heading}>
                  {device.type + " " + device.device_num}
                </Text>
            </View>
            <Text>
                {device.status ? "ON" : "OFF"}
            </Text>
            <TouchableOpacity onPress={() => deleteDevice(device.id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
        </View>
    );
}

// const styles = StyleSheet.create({
//     device:{
//         position:"relative",
//         height:170,
//         // width:60,
//         margin: 10,
//     },
//     strong:{
//         marginTop: 70,
//         marginBottom: 0,
//         marginRight:10,
//         fontSize:18,
//     },
//     label:{
//         position:"absolute",
//         width: 0.74*Dim_width,
//         height: 0.71*Dim_height,
//         padding:20,
//         borderRadius:30,
//         shadowColor: 'black',
//         shadowOpacity: 0.3,
//     }
    
// });

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 20,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: '40%',
      marginVertical: 10,
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
  });

export default Device