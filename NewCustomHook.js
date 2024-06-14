import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';



const NewCustomHook = () => {

    const [data, setData] = useState();


    const myGetAPIHook = async(url) => {
        axios.get(url).then((response) =>{
            console.log("Get API is Called")
            console.log(response.data.movies)
            setData(response.data.movies)

        })
    }

// useEffect(() => {
//     console.log("UseEffect . . . .");
//     axios.get(url)
//       .then((response) => {
//         console.log("is this a Movie ???");
//         console.log(response.data.movies);
//         setData(response.data.movies);
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//       });
//     //   myGetAPIHook('https://reactnative.dev/movies.json')
//   }, []);

//   const movies = [
//     {
//         'id' : 1,
//         'title' : 'Emile',
//         'realeaseYear' : 2000
//     },
//     {
//         'id' : 2,
//         'title' : 'shool',
//         'realeaseYear' : 2001
//     },
//     {
//         'id' : 3,
//         'title' : 'mystepfather',
//         'realeaseYear' : 2002
//     },
//     {
//         'id' : 4,
//         'title' : 'titanic',
//         'realeaseYear' : 2003
//     },
//   ]
  return {data, myGetAPIHook}
}

export default NewCustomHook;