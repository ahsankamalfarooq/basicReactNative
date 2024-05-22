import {useNavigation} from '@react-navigation/native'

import axios from 'axios';
import { useState } from 'react';

import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';


export default function LoginScreen({navigation}) {

    const [myFlag, setMyFlag] = useState(110)
    const [username, onChangeUsername] = useState(' ');
    const [password, onChangePassword] = useState(' ');

    // const navigation = useNavigation();
    // const {data, signup} = PostAPIHooks();

    // const DATA = [
    //     {title : 'A',
    //     data: ['Ali', 'KHR', 'SHR', 'HAM', 'SHAHEED', 'UBAID'],
    //     },
    //     {title : 'B',
    //     data: ['Haider', 'Shah', 'saim', 'noman', 'naheed', 'motla'],
    //     },
    //     {title : 'C',
    //     data: ['Water', 'Coke', 'Beer', 'Sauge'],
    //     },
    //     {title : 'E',
    //     data: ['Cheese'],
    //     },
    // ];

    const loginBtnPressed = () => {
        // signup ('abc@gmail.com', '1234567890', 'ali Bhai')
        // myFlag = myFlag+20;
        console.log(myFlag);
    } ;

    // var myFlag = 100;

    return (
        <View style= {styles.container}>
            <Text>Login Screen! My Flag is = {myFlag}</Text>

            <TextInput
                style = {styles.input}
                onChangeText={onChangeUsername}
                value={username}
            ></TextInput>
            <Button
                title ='GO TO hOME'
                // onPress = { () => navigation.navigate("Home")  }
                onPress={() => setMyFlag(myFlag+10)}
            ></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
    
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

    
  });


// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login Screen</Text>
//       <Button
//         title="Go to Home"
//         onPress={() => navigation.navigate('Home')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default LoginScreen;

  


























