import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, FlatList } from 'react-native';

export default function HomeSweet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("UseEffect . . . .");
    axios.get('https://reactnative.dev/movies.json')
      .then((response) => {
        console.log("is this a Movie ???");
        console.log(response.data.movies);
        setData(response.data.movies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is Home component</Text>

      <View style={styles.top}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <View style={styles.center}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <View style={styles.listItemText}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.releaseYear}</Text>
                <Text style={styles.itemSubtitle}>{item.id}</Text>
              </View>
              <View style={styles.listItemText}>
                <Text style={styles.itemSubtitle}>{item.releaseYear}</Text>
              </View>
            </View>
          )}
        />
      </View>
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
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  center: {
    flex: 1,
    width: '100%',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  listItem: {
    backgroundColor: '#ffffff',
    height: 80,
    marginBottom: 10,
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  listItemText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 5,
  },
});
