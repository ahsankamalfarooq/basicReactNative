import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Button, Image, TextInput, text } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNavigatorFactory } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
// // import { createNavigatorFactory } from '@react-navigation/core';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import List from './screens/flatList';
import newEffect from './screens/useEffect.js';
import HomeSweet from './screens/Home.js';



 function App() {
  
   const Stack = createNativeStackNavigator()
  // const Stack = createStackNavigator();
  const [text, onChangeText] = React.useState('Useless Text');
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);


      // <NavigationContainer>
      //    <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen name="Home" component={HomeScreen} />
      //     <Stack.Screen name="Details" component={DetailsScreen} />
      //     <Stack.Screen name="flatlist" component={List} />
      //   </Stack.Navigator> 
      // </NavigationContainer>
    // );
  // }

  // const youPressedMe = () => {
  //   alert('Dev Team~KHR')
  // }

  return (

    <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="HomeSweet" component={HomeSweet} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="effect" component={newEffect} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="flatlist" component={List} />
          </Stack.Navigator>
     </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection : 'column',
    //  alignItems: 'center',
    //  justifyContent: 'center',
  },
  top: {
    flex: 1,
    // backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 2,
    // backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    // backgroundColorv: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});






// // import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// // import { createNavigatorFactory } from '@react-navigation/core';

// // const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// }

export default App;





