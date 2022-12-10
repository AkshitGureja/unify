import { StyleSheet, Text, View, Image , Dimensions} from 'react-native';
import React, {useState} from 'react'
import Header from './components/Header';
import Devices from './components/Devices';
import AddDevice from "./components/AddDevice";
import RemainingDev from "./components/RemainingDev";

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full height

const App = () => {
  const [curr_added, setCurrDevices] = useState([1,4,3,6,7])

  const [show_remaining, setShowRemaining] = useState(true)

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
      fan_speed: 1,
    },
    {
      id:6,
      type:"Fan",
      device_num: 2,
      status: false,
      fan_speed: 0,
    },
    {
      id:7,
      type:"Dimmer",
      device_num: 1,
      status: false,
    },
  ])

  connected_dev = [];
  remaining_dev = [];

  for(let i = 0; i < devices.length; i++){
      if(curr_added.includes(devices[i].id)){
          connected_dev.push(devices[i]);
      }else{
          remaining_dev.push(devices[i]);
      }
  }

  const toggleRemaining = () => {
    setShowRemaining(!show_remaining);
  }

  const AddDeviceToConnected = (id) => {
    setCurrDevices(curr_added => {
      return [...curr_added, id]
    })
  }

  const deleteDevice = (id) => {
    setCurrDevices(curr_added => {
      var current = curr_added.filter(function(ele){return ele != id})
      return current
    })
  }

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View>
        {connected_dev.length > 0 ? <Devices devices={connected_dev} curr_added={curr_added} deleteDevice={deleteDevice}/> : " No Connected Device"}
      </View>
      <View>
        {connected_dev.length < 7 ? <AddDevice toggleRemaining={toggleRemaining}/> : ""}
      </View>
      <View>
        {show_remaining ? (remaining_dev.map((not_connected) => (<RemainingDev key={not_connected.id} remaining={not_connected} AddDeviceToConnected={AddDeviceToConnected}/>))) : ""}
      </View>
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