import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import RemainingDev from './RemainingDev';

var Dim_width = Dimensions.get('window').width; //full width

const AddDevice = ({toggleRemaining, navigation, remaining_dev, show_remaining, AddDeviceToConnected}) => {

    return (
        <View style={[styles.card, styles.elevation]}>
            <TouchableNativeFeedback
                onPress={() => navigation.navigate('Add')}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center', alignSelf:'center', marginTop:20}}>
                        <AntDesign style={{ marginRight:10}}name="pluscircleo" size={35} color="white" />
                        <Text style={{color:'white', fontSize:25}}>Add Device</Text>
                    </View>
                </View>                
            </TouchableNativeFeedback>
        </View>
    );
}

const styles= StyleSheet.create({
    devices:{
        display:"flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        width:Dim_width,
        marginTop:30,
        flexDirection:'row',
    },
    button: {
        marginBottom: 30,
        marginTop:20,
        width: Dim_width,
        height:90,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius:50,
      },
      buttonText: {
        textAlign: 'center',
        padding: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:20
      }
})

export default AddDevice