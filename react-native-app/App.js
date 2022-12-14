import { StatusBar , Platform,  StyleSheet, Text, View, Image , Dimensions, ScrollView ,TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Devices from './components/Devices';
// import Device from './components/Device';
import AddDevice from "./components/AddDevice";
import RemainingDev from "./components/RemainingDev";
import { AntDesign, FontAwesome} from '@expo/vector-icons';

// import Geolocation from '@react-native-community/geolocation';
// import { StatusBar } from 'expo-status-bar';
// import Paho from 'paho-mqtt';
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


  // const clientId = "OhkTEh00FAEUIA4oNRstJis"
  // const host = '//mqtt3.thingspeak.com/mqtt'

  // const options = {
  //   keepalive: 30,
  //   clientId: clientId,
  //   username: 'OhkTEh00FAEUIA4oNRstJis',
  //   password: 'CQSCMjjAjdTm2bw6s135lsIC',
  //   protocolId: 'MQTT',
  //   protocolVersion: 4,
  //   clean: true,
  //   reconnectPeriod: 1000,
  //   connectTimeout: 30 * 1000,
  //   will: {
  //     topic: 'WillMsg',
  //     payload: 'Connection Closed abnormally..!',
  //     qos: 0,
  //     retain: true
  //   },
  //   rejectUnauthorized: false
  // }

  // console.log('connecting mqtt client')
  // var client =  new Paho.Client(host, Number(1883), '/',clientId);

  // client.connect({
  //   onSuccess: function(){
  //     console.log("connected");
  //     client.subscribe('channels/1773603/subscribe', { qos: 0 })
  //     console.log("connected");
  //   },
  //   onFailure: function(){
  //     console.log("connected 2");
  //   },
  //   userName: options.username,
  //   password: options.password,
  //   useSSL:true,
  // })

  // console.log("connected1")
// style = {show_remaining ? styles.gridExpand : styles.gridCollapse} } rgb(255,100,180)
  return (
    <View style = {styles.total}>
        <Header />

        <Text style = { {color : "rgb(2,20,20)" , paddingTop : 5 , fontWeight : '600',  alignSelf : "center", borderBottomColor : "rgba(200,204,208,0.7)",borderTopColor : "rgba(200,204,208,0.9)", borderBottomWidth : 0 , }}>  {connected_dev.length > 0 ? "Connected (" + connected_dev.length + ")" : "No Device Connected"} </Text>

        <ScrollView style = {show_remaining ? styles.gridExpand : styles.gridCollapse}  >

            {connected_dev.length > 0 ? <Devices devices={connected_dev} curr_added={curr_added} deleteDevice={deleteDevice}/> : <Text style = { styles.noDeviceText}> </Text>}
  
          
        </ScrollView>

        
        <View style = {show_remaining ? styles.addButtonBaseExpand : styles.addButtonBaseCollapse} >
          <AddDevice toggleRemaining={toggleRemaining} state = {!show_remaining} />
        </View>

        <ScrollView style = {show_remaining ? styles.additionListExpand : styles.additionListCollapse } >
          
    
          <View>
            { !show_remaining ? ""
                  : (connected_dev.length == devices.length ) ? <Text style = { styles.noDeviceText}> Nothing to Add</Text>
                            
                      :(remaining_dev.map((not_connected) => (<RemainingDev key={not_connected.id} remaining={not_connected} AddDeviceToConnected={AddDeviceToConnected}/>))) 
                          
                          
            }
          </View>

          

        </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  gridExpand:{
    marginTop : 10 ,
    paddingTop : 20 , 
    backgroundColor: "rgba(0,10,10,0.7)",
    width:Dim_width,
    height:'30%',

  },
  
  addButtonBaseExpand:{
    justifyContent: 'space-around',
    height : '10%',
    // backgroundColor: 'blue',
  },

  additionListExpand : {
    // backgroundColor: "cyan",
    backgroundColor: "rgb(0,50,50)",

    width:Dim_width,
    height:'40%',

  },


  gridCollapse:{
    marginTop : 10 ,
    // paddingTop : 20 , 
    // paddingBottom : 40 , 
    backgroundColor: "rgba(0,10,10,0.7)",

    // backgroundColor: "aliceblue",
    width:Dim_width,
    height:600,
  },

  addButtonBaseCollapse:{
    justifyContent: 'space-around',
    paddingVertical : 0 , 
    height : '10%',
    // backgroundColor: 'blue',
  },

  additionListCollapse : {
    // backgroundColor: "cyan",
    backgroundColor: "rgb(0,50,50)",
    width:Dim_width,
    height:'0%',

  },


  noDeviceText : { 
    textAlign : 'center' ,
    color : "white" ,

  } , 
  total:{
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height:'100%',
    backgroundColor  : 'rgba(10,200,220,1)',

  }
});

export default App
