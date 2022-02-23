import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import {Card } from 'react-native-paper';
// import { default as data } from "../../api/data2.json";
import { useStarships } from "../hooks/useStarships";


const renderItem = ({ item }) => {
  

  return (
 
    <Card style={styles.card}>
      <Card.Content>
      <Text style={styles.name}>{item.name}</Text>
      <Text>{item.model}</Text>
      <Text>{item.cost_in_credits}</Text>
      <Text>{item.crew}</Text>
      <Text>{item.hyperdrive_rating}</Text>
      <Text>{item.cost_in_credits}</Text>
      </Card.Content>
    </Card>


  )
  };

export const StarshipFeedScreen = () => {
  const {isLoading, isError, data}= useStarships()
   console.log("bonjour", isLoading)
   console.log("bonjour", data)

  if (isLoading) {
   return  <Text>loading</Text>
  }

  if (isError) {
    return <Text>We are sorry something bad happend ... </Text>
  }
 console.log(data)

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList

          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#7C9CB4",
  },

  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#7C9CB4",
  },

  card: {
    backgroundColor: "#D0E6F5",
    marginBottom: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 35,
    marginBottom: 12,

  },

  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  }

});