import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full width

const Device = ({device, deleteDevice, navigation}) => {
    return (
        <TouchableOpacity style={[styles.card, styles.elevation, device.status ? styles.blue : styles.white]} onPress={() => navigation.navigate('Status', {device})} >
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              {device.deviceTypeNum == 1 ? <MaterialCommunityIcons style={{marginBottom:10, marginLeft:-7}} name="lightbulb" size={28} color="white"/> : ""}
              {device.deviceTypeNum == 2 ? <MaterialCommunityIcons style={{marginBottom:10, marginLeft:-5}} name="fan" size={28} color="white"/> : ""}
              {device.deviceTypeNum == 3 ? <MaterialCommunityIcons style={{marginBottom:10, marginLeft:-4}} name="desk-lamp" size={28} color="white"/> : ""}

              <TouchableOpacity onPress={() => deleteDevice(device.id)}>
                  <View style={styles.container}>
                    <AntDesign name="closecircle" size={25} color="white" />
                  </View>
              </TouchableOpacity>
            </View>
            

            <View style={styles.cross}>
                <Text style={styles.heading}>
                  {device.type + " " + device.device_num}
                </Text>
            </View>
            <Text style={{color:'white'}}>
                {device.status ? "ON" : "OFF"}
            </Text>            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
      color:'white'
    },
    card: {
      borderRadius: 20,
      paddingVertical: 25,
      paddingHorizontal: 25,
      width: '40%',
      marginVertical: 10,
      color:'white'
    },
    white:{
      backgroundColor: '#252525',
      color:'white'
    },
    blue:{
      backgroundColor: '#252525',
      color:'white'
    },
    elevation: {
      elevation: 20,
      // shadowColor: '#52006A',
      // shadowColor: 'white',
    },
    cross:{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'space-between'
    }
  });

export default Device