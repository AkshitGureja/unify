import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome} from '@expo/vector-icons';

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full width
const Device = ({device, deleteDevice}) => {
  // return (
  //     <View style={[stylesDevice.card, stylesDevice.elevation, device.status ? stylesDevice.blue : stylesDevice.white]}>
  //         <View style={stylesDevice.cross}>
  //             <Text style={stylesDevice.heading}>
  //               {device.type + " " + device.device_num}
  //             </Text>
  //             <TouchableOpacity style = {stylesDevice.toucharea} onPress={() => deleteDevice(device.id)}>
  //               <View style={stylesDevice.container}>
  //                 <AntDesign name="closecircle" size={25} color="orange" />
  //               </View>
  //             </TouchableOpacity>
  //         </View>
  //         <Text>
  //             {device.status ? "ON" : "OFF"}
  //         </Text>
     
  //     </View>
  // );

// /*
  return (

    <View style = {[stylesDevice.card, stylesDevice.elevation, device.status ? stylesDevice.blue : stylesDevice.white]}> 

      <View style = {stylesDevice.crosspart}>
          <TouchableOpacity style = {stylesDevice.toucharea} onPress={() => deleteDevice(device.id)}>
                <View style={stylesDevice.xmark}>
                  <AntDesign name="closecircle" size={20} color="orange" />
                </View>
          </TouchableOpacity>
      </View>

    

      <View style = {stylesDevice.textpart} >
      
          <Text style={stylesDevice.heading}>
                {device.type + " " + device.device_num}
              </Text>

          <Text>
              {device.status ? "ON" : "OFF"}
          </Text>
      
      </View>

      
    </View>
    
); 

// */

};

const stylesDevice = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingBottom: 45,
    paddingLeft: 25,
    paddingRight: 5,
    paddingTop: 5,
    width: '40%',
    marginVertical: 10,
    borderColor : "green" ,
    borderStyle : 'solid', 
    borderWidth : 3 , 
  },
  white:{
    backgroundColor: 'white' ,
  },
  blue:{
    backgroundColor: 'rgba(180, 255, 180, 1)' ,
  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },

  toucharea: { 
    // backgroundColor : 'maroon',
  },

  textpart : { 
    // backgroundColor  : 'rgba(0,0,0,0)',
  },

  all : {
     backgroundColor : 'white',
  },

  crosspart:{
    // backgroundColor : 'pink',
    // flex:1, 
    display : 'flex',
    flexDirection:'row', 
    justifyContent:'flex-end',
    // alignItems : 'right',
  }
  
});



export default Device
