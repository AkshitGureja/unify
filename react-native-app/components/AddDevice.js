import { StyleSheet, Text, View, Image , Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

var Dim_width = Dimensions.get('window').width; //full width

const AddDevice = () => {

    return (
        <View style={[styles.card, styles.elevation]}>
            <View>
                <Text style={styles.heading}>
                  Add Device
                </Text>
            </View>
            <Text>
                Options
            </Text>
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
    }
})

export default AddDevice