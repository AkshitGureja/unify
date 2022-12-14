import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';

var Dim_width = Dimensions.get('window').width; //full width

const AddDevice = ({toggleRemaining, state}) => {

    return (
        <View style={stylesAddDevice.card}>
            <TouchableNativeFeedback
                style = { stylesAddDevice.toucharea}
                onPress={toggleRemaining}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>


                <View style={[stylesAddDevice.button , { width : state ? '80%' : '40%'  , } , ]}>

                    <Text style={stylesAddDevice.buttonText}> {state ? "Show Available Devices" : "Hide" } {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const stylesAddDevice= StyleSheet.create({

    card : {
      backgroundColor :'violet' ,
      width: '100%',
      height : '100%',
      display : 'flex' ,
      justifyContent : 'space-around' ,
      
      } , 
// rgba ( 128,128,128,1)
    button: {
        // width: {this.state ? '80%' : '40%' },
        height:'60%',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderRadius:30,
        borderWidth : 2 ,
        borderColor : 'red' ,
        alignSelf : 'center' ,
        display : 'flex' ,
        justifyContent : 'space-around' ,

      },

      toucharea : { 
        width: '100%',
        backgroundColor : 'maroon' ,
        borderRadius:'30 0 0 30',
      } ,

      buttonText: {
        color : 'rgba(0,0,0,0.8)',
        alignItems : 'center' ,
        textAlign: 'center',
        
        fontSize:18,
      }
})

export default AddDevice
