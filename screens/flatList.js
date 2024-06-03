// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList } from "react-native-web";
import { StyleSheet, Text, View, TouchableOpacity,Button, Image, TextInput, text, FlatList, Alert } from 'react-native';

import React from "react";
import image from "../assets/favicon.png"

const myDummyArray = [
    {key:0,
        title:     'ABC',
        class: 'Bsc',
        time : '8:00AM'
    },

    {key:1,
        title: 'TEAM',
        class: 'Bsc',
        time : '8:00AM'


    },
    {key:2,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:3,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:4,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:5,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:6,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:7,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
    {key:8,
        title: 'KHR',
        class: 'Bsc',
        time : '8:00AM'

    },
]

export default function List() {
    const [text, onChangeText] = React.useState("useless text")

    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image 
                    style={styles.tinyLogo}
                    source={{
                        // source = {require('.')},
                        // source={require('@expo/snack-static/react-native-logo.png')}
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                 />
                
            </View>
            <View style= {styles.center}>
                    <FlatList
                      data={myDummyArray}
                      keyExtractor={item=>item.key}
                      renderItem={({item})=> (
                        <View style={{backgroundColor: "grey",height: 40, marginBottom:10, flex:1, flexDirection: 'row', borderRadius: 50}}>
                          <View style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
                            <Text>{item.title}</Text>
                            <Text>{item.class}</Text>
                          </View>

                        <View style={{backgroundColor: 'grey', flex:1, alignItems: 'center', justifyContent: 'center',  borderRadius: 50}}>
                           <Text>{item.time}</Text>
                        </View>
                          
                        </View>
                    )}
                    />
            </View>
            <View style={styles.bottom}>
            <Button
                title = "Press me"
                onPress = {()=> Alert.alert('Simple Button Pressed')}
            />
            </View>
        </View>
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
      // alignItems: 'center',
      padding: 10,
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