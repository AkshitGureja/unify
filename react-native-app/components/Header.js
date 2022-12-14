import { StatusBar , StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect , useState   } from 'react'
// import Geolocation from '@react-native-community/geolocation';

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
  StatusBar.setBackgroundColor('rgba(0,128,128,0.5)');
  // StatusBar.setTranslucent(true);

//  
  return (

      <View style = {styles0.overall}> 

          <View style = {styles0.logobase }>
          <Image source = {require("../assets/unify.png")} style = {styles0.logo}/>

          {/* <Text style = { styles0.textpart} > Unify </Text> */}

          </View>
          
          <View style = { {width : '40%' , height : '100%' , display : 'flex' , flexDirection : 'column' , justifyContent : 'space-evenly'}}> 
                  
                  <Text> {date.slice(0,3)}, {date.slice(4,10)}  </Text>
                  <Text> {temperature} °C </Text>
                  <Text> {description} </Text>
          </View>


      </View>

    );

  }

  const styles0 = StyleSheet.create({

    overall : { 
      display : 'flex' ,
      flexDirection : 'row' , 
      justifyContent : 'space-around',
      alignItems : 'center',
      height : '20%', 
      width : '100%',
      paddingVertical : '2%' ,
      marginTop : StatusBar.currentHeight , 
      marginBottom: '0%' , 
      borderBottomColor : 'black' ,
      borderBottomWidth : 1 ,
      backgroundColor : '#9fff9f' ,
    },
    textpart : { 

      alignSelf : 'center',
      
    
   },
   logobase : {
    justifyContent : 'center',
    alignItems : 'center',
    // border : '1% solid yellow' ,
    // backgroundColor : 'white' ,
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


export default Header
