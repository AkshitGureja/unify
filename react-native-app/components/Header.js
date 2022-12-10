import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

const Header = () => {
  return (
    <View style={[styles.card, styles.elevation]}>
        <View style={{flexDirection:'row'}}> 
            <Image source={require('./../assets/unify.png')} /> 
            <Text style={styles.heading}>
              <Text>
                Cloudy
              </Text>
              <Text>
                10 Dec 2022
              </Text>
            </Text>  
        </View>
        
        <Text>  
            Heading 2
        </Text>
    </View>
    // <View>
    //   <View style={{flexDirection:'row'}}>
    //     <Image source={require('./../assets/unify.png')} />
    //     <View>
    //       <View>
    //         <Text>Cloudy</Text>
    //       </View>
    //       <Text>10 Dec 2022</Text>
    //     </View>
    //   </View>
    //   <View style={{flexDirection:'row'}}>
    //     <View>
    //       <Text>26°C</Text>
    //       <Text>Temperature</Text>
    //     </View>
    //     <View>
    //       <Text>48.2%</Text>
    //       <Text>Outdoor Humidity</Text>
    //     </View>
    //   </View>
    //     {/* <Text  style={styles.text} >Hello World</Text> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
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