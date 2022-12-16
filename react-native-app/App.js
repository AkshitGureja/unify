import { StyleSheet, Text, View, Image , Dimensions, ScrollView, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react'
import Header from './components/Header';
import Devices from './components/Devices';
import AddDevice from "./components/AddDevice";
import RemainingDev from "./components/RemainingDev";
import ShowDevStatus from './components/ShowDevStatus';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full height
var channelID = 1521595;
var ReadAPIKey = "HS2MH5I3OVEJV4OJ";
var WriteAPIKey = "A8PNTCM88WJY1U82";

const App = () => {
  const [curr_added, setCurrDevices] = useState([1,4,3,5,6])

  const [show_remaining, setShowRemaining] = useState(true)

  const [devices, setDevices] = useState([
    {
      id:1,
      type:"Light",
      deviceName: null,
      deviceTypeNum : 1,
      device_num: 1,
      status: true,
    },
    {
      id:2,
      type:"Light",
      deviceName: null,
      deviceTypeNum: 1,
      device_num: 2,
      status: true,
    },
    {
      id:3,
      type:"Light",
      deviceName: null,
      deviceTypeNum : 1,
      device_num: 3,
      status: true,
    },
    {
      id:4,
      type:"Fan",
      deviceName: null,
      deviceTypeNum : 2,
      device_num: 1,
      status: true,
      fan_speed: 1,
    },
    {
      id:5,
      type:"Fan",
      deviceName: null,
      deviceTypeNum : 2,
      device_num: 2,
      status: false,
      fan_speed: 0,
    },
    {
      id:6,
      type:"Dimmer",
      deviceName: null,
      deviceTypeNum : 3,
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
    // console.log(not_connected);
  }

  const AddDeviceToConnected = (id) => {
    AddToThingsSpeak(id);
    setCurrDevices(curr_added => {
      return [...curr_added, id]
    })
    
  }

  const deleteDevice = (id) => {
    setCurrDevices(curr_added => {
      var current = curr_added.filter(function(ele){return ele != id})
      DeleteToThingsSpeak(id);
      return current
    })
  }

  const DeleteToThingsSpeak = async(id) => {
    try {
      var [dev] = devices.filter(function(ele){return ele.id === id})
      var apiCall = 'https://api.thingspeak.com/update?api_key=' + WriteAPIKey + '&field8=' + dev.deviceTypeNum + dev.id + '0';
      // console.log(apiCall)
      const response = await fetch(apiCall);
      const json = await response.json();
      console.log(json)
    } catch (error){
      console.error(error)
    }
  }

  const AddToThingsSpeak = async(id) => {
    try {
      var [dev] = devices.filter(function(ele){return ele.id === id})
      var apiCall = 'https://api.thingspeak.com/update?api_key=' + WriteAPIKey + '&field8=' + (dev.deviceTypeNum) + (dev.id) + '1';
      // console.log(apiCall)
      const response = await fetch(apiCall);
      const json = await response.json();
      console.log(json)
    } catch (error){
      console.error(error)
    }
  }

  const GetStatus = async() => {

    for(let i = 0; i < curr_added.length; i++){
      try {
        var apiCall = 'https://api.thingspeak.com/channels/' + channelID + '/fields/' + curr_added[i] + '/last.json?api_key=' + ReadAPIKey
        // console.log(apiCall)
        const response = await fetch(apiCall);
        const json = await response.json();
        const Json = JSON.stringify(json);
        var r = JSON.parse(Json);
        var filename = "field" + curr_added[i];
        var stat = Number(r[filename])
        console.log(stat)

        setDevices(devices => {
          if(stat < 1){
            devices[curr_added[i]-1].status = false;
          }else{
            devices[curr_added[i]-1].status = true;
          }
          return devices
        })
        
      } catch (error){
        console.error(error)
      }
    }
  }

  function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
        <Header />
        <Text style={{color:'white', fontSize:35}}>Personal Devices</Text>
        <View>
          {connected_dev.length > 0 ? <Devices devices={connected_dev} curr_added={curr_added} deleteDevice={deleteDevice} navigation={navigation}/> : " No Connected Device"}
        </View>
        <View>
          {connected_dev.length < 7 ? <AddDevice onPress={() => navigation.navigate('Details')} toggleRemaining={toggleRemaining}/> : ""}
        </View>
        <View>
          {show_remaining ? (remaining_dev.map((not_connected) => (<RemainingDev key={not_connected.id} remaining={not_connected} AddDeviceToConnected={AddDeviceToConnected}/>))) : ""}
        </View>
        {/* <View>
          {connected_dev.length > 0 ? <ShowDevStatus GetStatus={GetStatus} /> : ""}
        </View> */}
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Status')}
      />
      </ScrollView>
    );
  };

  const getStatusById  = async(id) => {
    try {
        var apiCall = 'https://api.thingspeak.com/channels/' + channelID + '/fields/' + id + '/last.json?api_key=' + ReadAPIKey
        // console.log(apiCall)
        const response = await fetch(apiCall);
        const json = await response.json();
        const Json = JSON.stringify(json);
        var r = JSON.parse(Json);
        var filename = "field" + id;
        console.log(r, filename)
        var stat = Number(r[filename])
        console.log(stat)

        return stat;
        
      } catch (error){
        console.error(error)
      }
  }

  const StatusScreen = ({navigation, route}) =>{

    var stat = getStatusById(route.params.device.id)
    console.log(stat)

    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'black'}}>
            {route.params.device.deviceTypeNum == 1 ? <MaterialCommunityIcons name="lightbulb" size={60} color="white"/> : ""}
            {route.params.device.deviceTypeNum == 2 ? <MaterialCommunityIcons name="fan" size={60} color="white"/> : ""}
            {route.params.device.deviceTypeNum == 3 ? <MaterialCommunityIcons name="desk-lamp" size={60} color="white"/> : ""}
            <Text style={{color:'white', fontSize:35, marginBottom:40}}>{route.params.device.type + " " + route.params.device.device_num}</Text>

            <View style={[styles.card, styles.elevation]}>
                <Text style={{color:'white', fontSize:20}}>Status:</Text>
                <Text style={{color:'white', fontSize:20}}>{Number(stat) > 0 ? "OFF" : "ON"}</Text>
            </View>

        </View>
        
      );
  }

  const AddScreen = ({navigation, route}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Add Screen</Text>
        </View>
      );
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "black",
    width:Dim_width,
    height:Dim_height+50,
    color:'white',
  },
  card: {
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '80%',
    marginVertical: 10,
    color:'white',
    backgroundColor: '#252525',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  elevation: {
    elevation: 20,
    // shadowColor: '#52006A',
    // shadowColor: 'white',
  },
  cross:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    color:'white'
  },
});

export default App