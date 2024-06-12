// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View, Image, TextInput, Button, Alert, FlatList } from "react-native-web";
// import { StyleSheet, Text, View, TouchableOpacity,Button, Image, TextInput, text, FlatList, Alert, SectionList } from 'react-native';

// import React, { useEffect, useState } from "react";
// import image from "../assets/favicon.png"

// // const myDummyArray = [
// //     {key:0,
// //         title:     'ABC',
// //         class: 'Bsc',
// //         time : '8:00AM'
// //     },

// //     {key:1,
// //         title: 'TEAM',
// //         class: 'Bsc',
// //         time : '8:00AM'
// //     }
// // ]



//     const mySecArray = [
//       {
//         key : 0,
//         title : "Pakistan",
//         data : [{key : 4, title : 'Karachi'},{key : 1, title : 'Lahore'},{key : 2, title : 'Islamabad'},{key : 3, title : 'Faisalabad'}]
//       },
//       {
//         key : 0,
//         title : "India",
//         data : [{key : 4, title : 'Dehli'},{key : 1, title : 'Mumbai'},{key : 3, title : 'Chenai'}]
//       }
//     ];

// export default function List() {
//     const [text, onChangeText] = React.useState("useless text")

//     const [data, setData] = useState([]);


//     useEffect( (  ) => {
//           fetchData();                                                                                                             
//       }, []);

//       const fetchData = async() => {
//         try{
//           const response = await fetch('http://localhost:3000/users'
//           // mode: 'no-cors',
//           // method: "get",
//           // headers: {
//             //  "Content-Type": "application/json"
//             // },
            
//           )
//           const json = await response.json();
//           setData(json);
          
          
//         } catch(error){
//           console.log('Error Fetching Data :', error)
//         }
//       };
      
//       console.log(data)

    // // return(
    //     <View style={styles.container}>
    //         <View style={styles.top}>
    //             <Image 
    //                 style={styles.tinyLogo}
    //                 source={{
    //                     // source = {require('.')},
    //                     // source={require('@expo/snack-static/react-native-logo.png')}
    //                     uri: 'https://reactnative.dev/img/tiny_logo.png',
    //                 }}
    //              />
                
    //         </View>
// //     //         <View style= {styles.center}>
//                      <FlatList
//                       data={myDummyArray}
//                       keyExtractor={item=>item.key}
//                       renderItem={({item})=> (
//                         <View style={{backgroundColor: "grey",height: 40, marginBottom:10, flex:1, flexDirection: 'row', borderRadius: 50}}>
//                           <View style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
//                             <Text>{item.title}</Text>
//                             <Text>{item.class}</Text>
//                           </View>

//                         <View style={{backgroundColor: 'grey', flex:1, alignItems: 'center', justifyContent: 'center',  borderRadius: 50}}>
//                            <Text>{item.time}</Text>
//                         </View>
                          
//                         </View>
//                     )}
//                     /> 







//     //                 <SectionList
//     //                   sections={mySecArray}
//     //                   keyExtractor={item=>item.key}
//     //                   renderSectionHeader={({ section: { title } }) => (
//     //                     <Text style={styles.header}>{title}</Text>
//     //                 )}
//     //                   renderItem={({item})=> (
//     //                     <View style={{backgroundColor: "grey",height: 40, marginBottom:10, flex:1, flexDirection: 'row', borderRadius: 50}}>
//     //                       <View style={{flex:1, alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
//     //                         <Text>{item.title}</Text>
//     //                         <Text>{item.class}</Text>
//     //                       </View>

//     //                     <View style={{backgroundColor: 'grey', flex:1, alignItems: 'center', justifyContent: 'center',  borderRadius: 50}}>
//     //                        <Text>{item.time}</Text>
//     //                     </View>
                          
//     //                     </View>
//     //                 )}
//     //                 />
//     //         </View>

//     return (
//       <View style={styles.container}>
//         <View style={styles.top}>
//           <Image
//             style={styles.tinyLogo}
//             source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//           />
//         </View>
//         <View style={styles.center}>
//           <SectionList
//             sections={mySecArray}
//             keyExtractor={item => item.key}
//             renderSectionHeader={({ section: { title } }) => (
//               <Text style={styles.header}>{title}</Text>
//             )}
//             renderItem={({ item }) => (
//               <View style={{ backgroundColor: "grey", height: 40, marginBottom: 10, flex: 1, flexDirection: 'row', borderRadius: 50 }}>
//                 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
//                   <Text>{item.title}</Text>
//                   <Text>{item.class}</Text>
//                 </View>
//                 <View style={{ backgroundColor: 'grey', flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
//                   <Text>{item.time}</Text>
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//             <View style={styles.bottom}>
//             <Button
//                 title = "Press me"
//                 onPress = {()=> Alert.alert('Simple Button Pressed')}
//             />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       flexDirection : 'column',
//       //  alignItems: 'center',
//       //  justifyContent: 'center',
//     },
//     top: {
//       flex: 1,
//       // backgroundColor: 'cyan',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     center: {
//       flex: 2,
//       // backgroundColor: 'lightgreen',
//       // alignItems: 'center',
//       padding: 10,
//       justifyContent: 'center',
//     },
//     bottom: {
//       flex: 1,
//       // backgroundColorv: 'red',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     tinyLogo: {
//       width: 50,
//       height: 50,
//     },
//     input: {
//       height: 40,
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//     },
//     button: {
//       alignItems: 'center',
//       backgroundColor: '#DDDDDD',
//       padding: 10,
//     },
//     header: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       backgroundColor: '#f4f4f4',
//       padding: 5,
//   }
  
//   });



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://9791-103-70-86-96.ngrok-free.app/users');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const groupDataByCountry = () => {
        const groupedData = data.reduce((acc, item) => {
            const country = item.country;
            if (!acc[country]) {
                acc[country] = [];
            }
            acc[country].push(item);
            return acc;
        }, {});

        return Object.keys(groupedData).map(country => ({
            title: country,
            data: groupedData[country]
        }));
    };



    return (
        <View style={styles.container}>
            <SectionList
                sections={groupDataByCountry()}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionHeaderText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        backgroundColor: '#CCCCCC',
        padding: 10,
    },
    sectionHeaderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MyComponent;

