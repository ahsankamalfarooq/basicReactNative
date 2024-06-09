// import { NavigationContainer } from '@react-navigation/native';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';


// const newEffect = ({ navigation }) => {

//     const [count , setCount] = useState(0)
//     const [number , setNumber] = useState(0)
//     const [flag , setFlag] = useState(0)

//     useEffect(() => {
//       console.log("Simple UseEffect")
//     })

//     useEffect(() => {
//       console.log("Simple UseEffect [ [] ]")
//     }, [])

//     useEffect(() => {
//       console.log("Simple UseEffect [ count ]")
//     }, [count])
 
//     useEffect(() => {
//       console.log("Simple UseEffect [ number ]")
//     }, [number])

//     useEffect(() => {
//       console.log("Simple UseEffect [ flag ]")
//     }, [flag])

//     useEffect(() => {
//       console.log("Simple UseEffect [ All ]")
//     }, [count, flag, number])




//   return (
//     <View style= {{flex:1, backgroundColor: 'white', alignItems: 'center', }}>
//         <Text style={{fontSize:30, marginBottom:20, marginTop:20}}>Count is = {count} and Number = {number} is</Text>
//         {console.log('Return Is Called OR Not')}


//         <Button style={styles.title}
//           title='Update State For Count'
//         />
//         <Button 
//           title='Update State For Count'
//         />

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

// export default newEffect;



//   // <View style={styles.container}>
//     //   <Text style={styles.title}>Use Use Effect</Text>
//     //   <Button
//     //     title="Go to Home"
//     //     onPress={() => navigation.navigate('Home')}
//     //   />
//     // </View>




import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewEffect = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    console.log("Simple UseEffect");
  });

  useEffect(() => {
    console.log("Simple UseEffect [ [] ]");
     return() => {
    console.log("Press Return");
  };
  }, []);

  useEffect(() => {
    console.log("Simple UseEffect [ count ]");
  }, [count]);

  useEffect(() => {
    console.log("Simple UseEffect [ number ]");
  }, [number]);

  useEffect(() => {
    console.log("Simple UseEffect [ flag ]");
  }, [flag]);

  useEffect(() => {
    console.log("Simple UseEffect [ All ]");
  }, [count, flag, number]);



  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, marginBottom: 20, marginTop: 20 }}>
        Count is = {count} and Number = {number}
      </Text>
      {console.log('Return Is Called OR Not')}

      <Button
        style={styles.title}
        title='Update State For Count'
        onPress={() => setCount(count + 1)}
      />
      <Button
        title='Update State For Number'
        onPress={() => setNumber(number + 1)}
      />
      <Button
        title='Update State For Flag'
        onPress={() => setFlag(flag + 1)}
      />
    </View>
  );
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
});

export default NewEffect;
