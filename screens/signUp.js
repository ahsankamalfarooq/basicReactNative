// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';
// import Checkbox from 'expo-checkbox'

// // import {TextFieldLarge} from '..'
// // import {TitleBarLogin} from '..'
// // import {ButtonRegular} from '..'

// const signUp = ({navigation}) => {
//     const [isChecked, setChecked] = useState(false);
//     const [text, onChangeText] = useState('Useless Text');
//     const refInput = useRef('');

// }



// onChangeTextForTesting = (item) => {

//     onChangeText(item);
//     // refCount.current = item
//     // console.log('refInput.current', refInput.current)
// }



// sighUpBtnPressed = () => {
//     refCount.current++;
//     console.log('signup Btn Pressed')
//     refInput.current.focus()
//     refInput.current.setNativeProps({
//         fontSize : 60
//     })
// }

// return(
//     <View style={StyleSheet.container}>
//         console.log('____Retyrn____')
//         <TitleBarLogin title={"Sign Up"} isBackVIsible={true}
//         />
    

// <TextInput
//     cursorColor={"darkgrey"}
//     style={{marginLeft:20, fontFamily: "poppins"}}
//     placeholder="label"
//     onChangeText={(changeText) => onChangeTextForTesting(changeText)}
//     value={text}
//     ref={refInput}
// />



// <View style={{alignItems: "center", flex: 0.60}}>
    
// </View>

    
// </View>
// )



import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useContext } from "react";
import AppContext from '../Context'


const SignUp = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const refInputUsername = useRef(null);
    const refInputEmail = useRef(null);
    const refInputPassword = useRef(null);
    const {users} = useContext(AppContext);
    // console.log({users})
    console.log(users[0].title)


    const signUpBtnPressed = () => {
        console.log('signup Btn Pressed');
        refInputUsername.current.focus();
        // refInputUsername.current.setNativeProps({
        //     style: { fontSize: 60 }
        // });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up @ {users[0].title}</Text>

            <TextInput
                cursorColor={"darkgrey"}
                style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
                ref={refInputUsername}
            />
            <TextInput
                cursorColor={"darkgrey"}
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                ref={refInputEmail}
            />
            <TextInput
                cursorColor={"darkgrey"}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
                ref={refInputPassword}
            />

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={styles.checkboxLabel}>Accept Terms and Conditions</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={signUpBtnPressed}>
                <Text style={styles.buttonText}>Sign Up </Text>
            </TouchableOpacity>
        </View>
    );
};

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
        fontFamily: 'poppins',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default SignUp;












