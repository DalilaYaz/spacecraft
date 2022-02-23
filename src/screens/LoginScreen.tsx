import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// You can import from local files
import { Headline } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Routes';
// or any pure javascript modules available in npm


export default function LoginScreen(props) {
  console.log(props);
  const [text, setText] = React.useState("");
  
  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (

    <View style={styles.container}>
    <View>
       <Headline style={styles.paragraph}> Welcome to STARPORT </Headline>  
    </View>

    <View style={styles.body}>
      <TextInput autoComplete={true}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>

    <View style={styles.body}>
      <TextInput autoComplete={true}
        label="Password"
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>

    <View style={styles.body}>
      <Button mode="contained" onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>

    <View>
    <TouchableOpacity onPress={navigateToTerms}>
      <Text style={styles.end}>
        Read conditions and Tearms
      </Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 50,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  body: {
    margin: 24,
  },

  end: {
    textAlign: 'center',
    color: 'grey',
    fontStyle: "italic",
  }

});