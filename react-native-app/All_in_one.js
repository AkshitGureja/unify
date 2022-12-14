import { StatusBar , Platform,  StyleSheet, Text, View, Image , Dimensions, ScrollView ,TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import React, {useEffect, useState} from 'react'
// import Header from './components/Header';
// import Devices from './components/Devices';
// // import Device from './components/Device';
// import AddDevice from "./components/AddDevice";
// import RemainingDev from "./components/RemainingDev";
import { AntDesign, FontAwesome} from '@expo/vector-icons';

// import Geolocation from '@react-native-community/geolocation';
// import { StatusBar } from 'expo-status-bar';
// import Paho from 'paho-mqtt';
var Dim_width = Dimensions.get('window').width; //full width
var Dim_height = Dimensions.get('window').height; //full height


// -------------------------------------------------------------------------------------------------------------------------
// Header
const Header = () => {

  // Banglore by default

  const [latitude, setLatitude] = useState(13.23) ;
  const [longitude, setLongitude] = useState(78.29) ;

  
  
  let WeatherFromLoc_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=fd8451f6faf82427d680c1f9b37f7b16" ; 
  
  
  const [temperature, setTemperature] = useState(30);
  const [description, setDescription] = useState('mist');
  
  useEffect(() => {
    fetch ( `${WeatherFromLoc_URL}&lat=${latitude}&lon=${longitude}`)
    .then ( (x) => x.json() )
    .then ( (x) => { 
      setDescription( x["weather"][0]["description"] ) ;
      setTemperature( x["main"]["temp"] );
    } ) ;
    

    setLatitude ( 19) ;
    setLongitude ( 73) ;


  } , [])



  const date = new Date().toString();

  StatusBar.setHidden(false, 'none');
  // StatusBar.setBackgroundColor('blue');
  StatusBar.setBackgroundColor('rgb(0,0,0)');
  StatusBar.setBarStyle('light-content');

//  
  return (

      <View style = {styles0.overall}> 

          <View style = {styles0.logobase }>
          <Image source = {require("./assets/unify_inverse.png")} style = {styles0.logo}/>

          {/* <Text style = { styles0.textpart} > Unify </Text> */}

          </View>
          
          <View style = { [styles0.textpart, {width : '40%' , height : '100%' , display : 'flex' , flexDirection : 'column' , justifyContent : 'space-evenly'}]}> 
                  
                  <Text style ={{color:'white', fontWeight : "800" ,}}> {date.slice(0,3)}, {date.slice(4,10)}  </Text>
                  <Text style ={{color:'white', fontWeight : "800" ,}}> {temperature} °C </Text>
                  <Text style ={{color:'white', fontWeight : "800" ,}}> {description} </Text>
          </View>


      </View>

    );

  }

 

  const styles0 = StyleSheet.create({

    overall : { 
      paddingLeft : '10%' ,
      display : 'flex' ,
      flexDirection : 'row' , 
      justifyContent : 'space-around',
      alignItems : 'center',
      height : '20%', 
      width : '100%',
      paddingVertical : '2%' ,
      marginTop : StatusBar.currentHeight , 
      marginBottom: '0%' , 
      borderBottomColor : 'rgba(220,224,228,0.5)' ,
      borderBottomWidth : 1 ,
      // backgroundColor : '#DDF8E6' ,
      backgroundColor : 'rgb(37,37,48)' ,
    },
    textpart : { 

      alignSelf : 'center',
      color : 'white' ,
      
      // backgroundColor : '#9fff9f' ,
      
    
   },
   logobase : {
    justifyContent : 'center',
    alignItems : 'center',
    // border : '1% solid yellow' ,
    // backgroundColor : 'rgba(255,255,255,0.5)' ,
    // borderWidth : 1 , 
    // borderColor : 'yellow' ,
    height : '75%',
    width : '25%',
    // 


   },

   logo : { 
    height : '100%' ,
    width : '100%' ,
    resizeMode : 'center' ,
   }

  }
  );


// -----------------------------------------------------------------------------------------------------------------------

// device rgb()rgb(255,165,0)
const Device = ({device, deleteDevice}) => {
 
  return (

    <View style = {[stylesDevice.card, stylesDevice.elevation, device.status ? stylesDevice.blue : stylesDevice.white]}> 

      <View style = {stylesDevice.crosspart}>
          <TouchableOpacity style = {stylesDevice.toucharea} onPress={() => deleteDevice(device.id)}>
                <View style={stylesDevice.xmark}>
                  <AntDesign name="closecircle" size={23} color="rgba(245,215,180,0.7)" />
                </View>
          </TouchableOpacity>
      </View>

    

      <View style = {stylesDevice.textpart} >
      
          <Text style={stylesDevice.heading}>
                {device.type + " " + device.device_num}
              </Text>

          <Text  style = { { color : "rgb(0,0,0)"}} >
              {device.status ? "ON" : "OFF"}
          </Text>
      
      </View>

      
    </View>
    
); 

// style = { { color : "white"}}

};

const stylesDevice = StyleSheet.create({

  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    color : 'rgb(10,110,110 )' ,
    // color : 'green' ,
    backgroundColor  : 'rgba(0,0,0,0)',

    // backgroundColor: 'rgba(80,80,80,1)',
  },
  card: {
    backgroundColor: 'aliceblue',
    borderRadius: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 0,
    paddingTop: 10,
    width: '37%',
    marginVertical: 10,
    borderStyle : 'solid', 
    borderWidth : 3 , 
    backgroundColor  : 'rgba(0,0,0,0)',

  },
  white:{
    // backgroundColor: 'rgb(60,120,80)' ,
    backgroundColor: 'rgb(255,255,255)' ,
    // borderColor : "rgba(250,255,155,1)" ,
    borderColor : "rgba(160,240,220,0.3)" ,

  },
  blue:{
    // backgroundColor : "rgba(250,255,155,1)" ,
    backgroundColor: 'rgba(200,255,255,1)' ,
    // borderColor: 'white' ,
    borderColor: 'rgba(37,37,48,0.05)' ,
    // borderWidth : 5 , 

  },

  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
    backgroundColor  : 'rgba(0,0,0,0)',
  },

  toucharea: { 
    // backgroundColor : 'maroon',
    backgroundColor  : 'rgba(0,0,0,0)',
    paddingRight : 7 ,
    paddingBottom : 0 ,  

  },

  textpart : { 
    color : 'black' ,
    // backgroundColor: 'aliceblue',
    backgroundColor  : 'rgba(0,0,0,0)',
  },

 

  crosspart:{
    // backgroundColor : 'pink',
    // flex:1, 
    display : 'flex',
    flexDirection:'row', 
    justifyContent:'flex-end',
    alignItems : "flex-start" , 
    // alignItems : 'right',
    backgroundColor  : 'rgba(0,0,0,0)',

  }
  
});

//--------------------------------------------------------------------------------------------------------------------

// devices 



const Devices = ({devices, curr_added, deleteDevice}) => {
  return (
      <View>
          <View  style={stylesDevices.devices}>
              {devices.map((device) => (<Device key={device.id} device ={device} deleteDevice={deleteDevice}/>))}
          </View>
      </View>
  )
}

const stylesDevices= StyleSheet.create({
  devices:{
      display:"flex",
      flexWrap: "wrap",
      justifyContent:"space-around",
      width:Dim_width,
      // marginTop:30,
      // marginHorizontal:10,
      // marginRight:20,
      flexDirection:'row',
      height : "100%" , 
    backgroundColor  : 'rgba(0,0,0,0)',

  }
})

// ------------------------------------------------------------------------------------------------------------
// remaining devices

const RemainingDev = ({remaining, AddDeviceToConnected}) => {

  return (
    <View style = {[  stylesRemDev.listItem]}>

      {/* <View style={stylesRemDev.listItemName}> */}
      <Text style={stylesRemDev.listItemName}>{remaining.type + " " + remaining.device_num}</Text>
      {/* </View> */}

      <TouchableOpacity style={stylesRemDev.touchArea} onPress={() => AddDeviceToConnected(remaining.id)}>
          <Text style = {{color : "white"}}> ADD </Text>
      </TouchableOpacity>

    </View>
  );
}

const stylesRemDev= StyleSheet.create({
  listItem: {
    display : "flex",
    flexDirection : "row" ,
    justifyContent : "space-between" ,
      // padding: 15,
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderBottomWidth: 2,
      borderColor: 'pink',
      alignItems : "center" , 
  },

  listItemName: {
      alignItems : "stretch" , 
      textAlign : "center" ,
      textAlignVertical : "center"  ,
      color : "cyan" , 
      fontSize: 18,
      margin : 17 ,
      marginLeft : 25 , 
  },

  touchArea : { 
    display : "flex" ,
    justifyContent : "space-evenly",
    textAlignVertical : "center" ,
    backgroundColor : 'rgba(128,128,128,0.7)',
    marginRight : 25 ,
    paddingVertical : 10 ,
    paddingHorizontal : 20 ,  

  }
})

// ------------------------------------------------------------------------------------------------------------

// AddDevice

const AddDevice = ({toggleRemaining, state}) => {

  return (
      <View style={stylesAddDevice.card}>
          <TouchableNativeFeedback
              style = { stylesAddDevice.toucharea}
              onPress={toggleRemaining}
              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>


              <View style={[stylesAddDevice.button , { width : state ? '60%' : '40%' } , ]}>

                  <Text style={stylesAddDevice.buttonText}> {state ? "Show Available Devices" : "Hide" } {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
              </View>
          </TouchableNativeFeedback>
      </View>
  );
}

const stylesAddDevice= StyleSheet.create({


  card : {
    backgroundColor :'rgba(140,220,200,0)' ,
    // backgroundColor  : 'rgba(90,10,200,1)',
    // 
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
      // backgroundColor: 'rgba( 255,255,255,0.4)',
      backgroundColor: 'rgba(160,240,220,0.25)',
      // 
      borderRadius: 8,
      // borderWidth : 1 ,
      borderColor : 'grey' ,
      alignSelf : 'center' ,
      display : 'flex' ,
      justifyContent : 'space-around' ,

    },

    toucharea : { 
      // width: '10%',
      color : 'pink' ,
      borderRadius:'30 0 0 30',
    } ,

    buttonText: {
      // color : 'rgba(100,30,180,1)',
      color : 'rgba(160,240,220,1)',
      // color : 'black',
      alignItems : 'center' ,
      textAlign: 'center',
      fontWeight : "500" ,
      fontSize:15,
    }
})

// ------------------------------------------------------------------------------------------------------------








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

        <Text style = { {color : "rgb(37,37,48)" , height : "3%", paddingTop : 5 , fontWeight : '600',  alignSelf : "center", borderBottomColor : "rgba(200,204,208,0.7)",borderTopColor : "rgba(200,204,208,0.9)", borderBottomWidth : 0 , }}>  {connected_dev.length > 0 ? "Connected (" + connected_dev.length + ")" : "No Device Connected"} </Text>

        <ScrollView contentContainerStyle = {styles.spl} style = {show_remaining ? styles.gridExpand : styles.gridCollapse}  >

            {connected_dev.length > 0 ? <Devices devices={connected_dev} curr_added={curr_added} deleteDevice={deleteDevice}/> : <Text style = { styles.noDeviceText}> </Text>}
  
          
        </ScrollView>

        
        <View style = {show_remaining ? styles.addButtonBaseExpand : styles.addButtonBaseCollapse} >
          <AddDevice toggleRemaining={toggleRemaining} state = {!show_remaining} />
        </View>

        <ScrollView style = {show_remaining ? styles.additionListExpand : styles.additionListCollapse } >
          
    
          <View>
            { !show_remaining ? ""
                  : (connected_dev.length == devices.length ) ? <Text style = { styles.noDeviceText}> Nothing more to Add</Text>
                            
                      :(remaining_dev.map((not_connected) => (<RemainingDev key={not_connected.id} remaining={not_connected} AddDeviceToConnected={AddDeviceToConnected}/>))) 
                          
                          
            }
          </View>

          

        </ScrollView>
    </View>
    
  );
}

const xx = 30 ; 

const styles = StyleSheet.create({
  gridExpand:{
    marginTop : 10 ,
    // marginBottom : 10 , 
    // backgroundColor: "rgba(120,180,120,0.6)",
    backgroundColor: "aliceBlue",

    width:Dim_width,
    height:"0%",

  },

  spl: {
    justifyContent: 'space-around',
    // height : Dim_height,
    // height :"auto",

  } , 
  
  addButtonBaseExpand:{
    justifyContent: 'space-around',
    height : '10%',
    backgroundColor: 'rgb(37,37,48)',
  },

  additionListExpand : {
    // backgroundColor: "cyan",
    backgroundColor: "rgb(0,50,50)",

    width:Dim_width,
    height:'71%',
  },


  gridCollapse:{

    flexGrow:0 , 

    marginTop : 10 ,
    // paddingTop : 10 , 
    // backgroundColor: "rgba(120,180,120,0.6)",
    backgroundColor: "aliceblue",
    width:Dim_width,
    height:"67%",
  },

  addButtonBaseCollapse:{
    justifyContent: 'space-around',
    paddingVertical : 0 , 
    height : '10%',
    backgroundColor: 'rgb(37,37,48)',
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
    textAlignVertical : "center" ,
    height : 300,
    

  } , 
  total:{
    display : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height:'100%',
    backgroundColor  : 'rgba(160,240,220,0.4)',
    // backgroundColor  : 'rgba(160,240,220,0.4)',
    // rgb(37,37,48)
    // backgroundColor  : "aliceblue",

  }
});

export default App
