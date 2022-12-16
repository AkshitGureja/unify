import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity, Platform,TouchableNativeFeedback} from 'react-native';
import React from 'react';

var Dim_width = Dimensions.get('window').width; //full width

const ShowDevStatus = ({GetStatus}) => {

    return (
        <View style={[styles.card, styles.elevation]}>
            <TouchableNativeFeedback
                onPress={GetStatus}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Show Device Status {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
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
        height:60,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        borderRadius:50,
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        alignItems: 'center',
        justifyContent:'center',
        fontSize:15,
      }
})

export default ShowDevStatus