import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import React, { useEffect , useState   } from 'react'

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

  return (
    <View style={[styles.card, styles.elevation]}>
        <View style={{flexDirection:'row', alignContent:'center', justifyContent:'center', alignSelf:'center', alignItems:'center'}}> 
            <Image source={require('./../assets/unify1.png')} /> 
        </View>
        
        {/* <View>
          <Text style ={{color:'white', fontWeight : "800" ,}}> {date.slice(0,3)}, {date.slice(4,10)}  </Text>
          <Text style ={{color:'white', fontWeight : "800" ,}}> {temperature} °C </Text>
          <Text style ={{color:'white', fontWeight : "800" ,}}> {description} </Text>
        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});

export default Header