import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome} from '@expo/vector-icons';

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full width

const Device = ({device, deleteDevice}) => {
    return (
        <View style={[styles.card, styles.elevation, device.status ? styles.blue : styles.white]}>
            <View style={styles.cross}>
                <Text style={styles.heading}>
                  {device.type + " " + device.device_num}
                </Text>
                <TouchableOpacity onPress={() => deleteDevice(device.id)}>
                  <View style={styles.container}>
                    <AntDesign name="closecircle" size={25} color="maroon" />
                  </View>
                </TouchableOpacity>
            </View>
            <Text>
                {device.status ? "ON" : "OFF"}
            </Text>
            {/* <TouchableOpacity >
              <Text>Remove</Text>
            </TouchableOpacity> */}
            
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
      borderRadius: 20,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: '40%',
      marginVertical: 10,
    },
    white:{
      backgroundColor: 'white',
    },
    blue:{
      backgroundColor: 'skyblue'
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    cross:{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'space-between'
    }
  });

export default Device