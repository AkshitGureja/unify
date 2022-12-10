import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';

var Dim_width = Dimensions.get('window').width; //full width

const AddDevice = () => {

    return (
        <View style={[styles.card, styles.elevation]}>
            <TouchableNativeFeedback
                // onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Device {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
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
        width: Dim_width,
        height:90,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius:20,
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