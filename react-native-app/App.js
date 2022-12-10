import { StyleSheet, Text, View, Image , Dimensions} from 'react-native';
import React, {useState} from 'react'
import Header from './components/Header';
import Devices from './components/Devices';

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full height

const App = () => {
  const [curr_added, setCurrDevices] = useState([1,2,3,6,7])

  const [devices, setDevices] = useState([
    {
      id:1,
      type:"Light",
      device_num: 1,
      status: false,
    },
    {
      id:2,
      type:"Light",
      device_num: 2,
      status: true,
    },
    {
      id:3,
      type:"Light",
      device_num: 3,
      status: false,
    },
    {
      id:4,
      type:"Light",
      device_num: 4,
      status: false,
    },
    {
      id:5,
      type:"Fan",
      device_num: 1,
      status: true,
    },
    {
      id:6,
      type:"Fan",
      device_num: 2,
      status: false,
    },
    {
      id:7,
      type:"Dimmer",
      device_num: 1,
      status: false,
    },
    {
      id:8,
      type:"Add Device",
      device_num: 0,
      status: true,
    }
  ])


  return (
    <View style={styles.container}>
      <Header />
      {devices.length > 0 ? <Devices devices={devices} curr_added={curr_added} /> : " No Connected Device"}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "aliceblue",
    width:Dim_width,
    height:Dim_height+50,
  }
});

export default App