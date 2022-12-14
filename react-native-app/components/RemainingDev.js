import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';

var Dim_width = Dimensions.get('window').width; //full width
const RemainingDev = ({remaining, AddDeviceToConnected}) => {

    return (
        <TouchableOpacity style={stylesRemDev.listItem} onPress={() => AddDeviceToConnected(remaining.id)}>
            <View style={stylesRemDev.listItemView}>
                <Text style={stylesRemDev.listItemText}>{remaining.type + " " + remaining.device_num}</Text>
            </View>
        </TouchableOpacity>
    );
  }
  
  const stylesRemDev= StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 2,
        borderColor: 'pink',
    },
    listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
    listItemText: {
    fontSize: 18,
    },
  })
  

export default RemainingDev
