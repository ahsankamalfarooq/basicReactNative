// // import {useNavigation} from '@react-navigation/native'

// // import axios from 'axios';
// // import { useEffect, useState } from 'react';

// // import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';


// // export default function LoginScreen({navigation}) {

// //     const [myFlag, setMyFlag] = useState(110)
// //     const [username, onChangeUsername] = useState(' ');
// //     const [password, onChangePassword] = useState(' ');
// //     const [fonts, setFonts] = useState(5)

// //     // const navigation = useNavigation();
// //     // const {data, signup} = PostAPIHooks();

// //     // const DATA = [
// //     //     {title : 'A',
// //     //     data: ['Ali', 'KHR', 'SHR', 'HAM', 'SHAHEED', 'UBAID'],
// //     //     },
// //     //     {title : 'B',
// //     //     data: ['Haider', 'Shah', 'saim', 'noman', 'naheed', 'motla'],
// //     //     },
// //     //     {title : 'C',
// //     //     data: ['Water', 'Coke', 'Beer', 'Sauge'],
// //     //     },
// //     //     {title : 'E',
// //     //     data: ['Cheese'],
// //     //     },
// //     // ];

// //     const loginBtnPressed = () => {
// //         // signup ('abc@gmail.com', '1234567890', 'ali Bhai')
// //         // myFlag = myFlag+20;
// //         console.log(myFlag);
// //     } ;

// //     useEffect(() => {
// //         global.setting={
// //             fs: 50,
// //             fc: 'cyan',
// //             bc: 'pink'
// //         }
// //     })


// //     useEffect(() => {
// //         // console.log("Return is called");
// //         const unsubscribe = navigation.addListener('focus', () => {
// //             setFonts(global.setting.fs);
// //             console.log("Navigation useEffect is called = ", global.setting);
// //         });
// //         return unsubscribe
// //     }, [navigation]);

// //     // var myFlag = 100;

// //     return (
// //         <View style= {styles.container}>
// //             <Text style={{fontSize: fonts}}>Login Screen! My Flag is = {myFlag}</Text>

// //             <TextInput
// //                 style = {styles.input}
// //                 onChangeText={onChangeUsername}
// //                 value={username}
// //             ></TextInput>
// //             <Button
// //                 title ='GO TO Effect'
// //                 // onPress = { () => navigation.navigate("Home")  }
// //                 // onPress={() => setMyFlag(myFlag+10)}
// //                 onPress={() => navigation.navigate('effect', {value:myFlag})}
// //             ></Button>
// //         </View>
// //     )
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#f0f0f0',
// //       },
// //       title: {
// //         fontSize: 24,
// //         marginBottom: 20,
// //       },
    
// //       input: {
// //         height: 40,
// //         margin: 12,
// //         borderWidth: 1,
// //         padding: 10,
// //       },

    
// //   });


// // // import React from 'react';
// // // import { View, Text, Button, StyleSheet } from 'react-native';

// // // const LoginScreen = ({ navigation }) => {
// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Login Screen</Text>
// // //       <Button
// // //         title="Go to Home"
// // //         onPress={() => navigation.navigate('Home')}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     backgroundColor: '#f0f0f0',
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     marginBottom: 20,
// // //   },
// // // });

// // // export default LoginScreen;

  



// import {useNavigation} from '@react-navigation/native'
// import { StatusBar } from 'expo-status-bar';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import {StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
// import PostAPIHooks from '../APIHooks/PostAPIHooks';

// export default function Login() {

//     const [username , onChangeUsername] = useState('');
//     const [password , onChangePassword] = useState('');

//     const navigation = useNavigation();

//     const {data, signup}  = PostAPIHooks();

//     const loginBtnPressed = () => {
//         // signup('abx@gmail.com', '123321', "abc")
//         // console.log('login btn pressed')

//         const url = ''
//         const params = {
//             email : 'abc@gmail.com',
//             password: '12345',
//             display_name : 'abc'
//         }

//         const headers = {
//             'Content-Type' : 'application/json'
//         }

//         axios.post(url, params, {
//             headers: headers
//         }).then(res => {
//             console.log("I am success = ", res.data)
//         }).catch(err => {
//             console.log("This is the Error ==", err)
//         })
//     }

//     const DATA = [
//         {
//             tittle : 'A',
//             data : [a, b, c, d]
//         },
//         {
//             tittle : 'B',
//             data : [e,f,g,h]
//         },
//         {
//             tittle : 'C',
//             data : [i,j,k,l]
//         },
//         {
//             tittle : 'D',
//             data : [1,2,3,4]
//         },
//         {
//             tittle : 'E',
//             data : [5,6,7,8]
//         },
      
//     ];

//     return(
//         <View style={StyleSheet.container}>
//             <Text>"Login Screen !</Text>
//             <TextInput
//                 style = {styles.input}
//                 onChangeText = {onChangeUsername}
//                 value = {username}
//                 palceholder =  'User Name '
//             />
//             <TextInput
//                 style = {styles.input}
//                 onChangeText = {onChangePassword}
//                 value = {password}
//                 palceholder =  'Password '
//             />
//         </View>

//     )



// }

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
//   input: {
//             height: 40,
//             margin: 12,
//             borderWidth: 1,
//             padding: 10,
//           },
// });

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import PostAPIHooks from '../APIHooks/PostAPIHooks';

export default function Login() {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation();
  const { data, signup } = PostAPIHooks();

  const loginBtnPressed = () => {
    const url = '';
    const params = {
      email: 'abc@gmail.com',
      password: '12345',
      display_name: 'abc'
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    axios.post(url, params, { headers })
      .then(res => {
        console.log("I am success = ", res.data);
      })
      .catch(err => {
        console.log("This is the Error ==", err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder='User Name'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
























