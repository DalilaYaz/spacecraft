import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";

import { default as data } from "../../api/data.json";

const renderItem = ({ item }) => {
  console.log(item);
  return (
    <View>
    <Text> {item.name} </Text>
    <Text> {item.model} </Text>
    <Text> {item.crew} </Text>
    <Text> {item.hyperdrive_rating} </Text>
    <Text> {item.cost_in_credits} </Text>

  </View>
  )
  };

export const StarshipFeedScreen = () => {
  console.log(data);  
  
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
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});