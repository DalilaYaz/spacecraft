import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
// You can import from local files
import { Headline } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Routes';
// or any pure javascript modules available in npm


export default function LoginScreen(props) {
  console.log(props);
  const [text, setText] = React.useState("");

  function navigateToFeed() {
    props.navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }
  
  function navigateToTerms() {
    props.navigation.navigate(Routes.TERMS_SCREEN);
  }

  return (

    <View style={styles.container}>
    <View>
       <Headline style={styles.paragraph}> Welcome to STARPORT </Headline>  
    </View>

    <Image 
    style={styles.image}
    source={{
      uri: "https://www.9lives-magazine.com/wp-content/uploads/2017/05/giphy-7.gif",
      }}
    />

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
      <Button style={styles.bouton} mode="contained"  onPress={navigateToFeed}>
      <Image 
          style={styles.image2}
          source={{
          uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b2d2d.png",
      }}
    />
        <Text style={styles.log}>Login</Text>
        <Image 
          style={styles.image1}
          source={{
          uri: "https://assets.stickpng.com/images/580b585b2edbce24c47b2d2d.png",
      }}
    />
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
    backgroundColor: "#7C9CB4",
    padding: 50,
  },

  log: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  bouton:{
    backgroundColor: "#ACD8F6",
  },

  image: {
    width: 368,
    height: 278,
    marginBottom: 20,
    alignSelf: "center",
    resizeMode: 'contain', 
    borderRadius:15,
},

image1:{
  width: 28,
  height: 28,
  marginLeft: 16,
},

image2:{
  width: 28,
  height: 28,
  marginRight: 16,
  borderRadius: 30,
},


  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  body: {
    margin: 14,
  },

  end: {
    textAlign: 'center',
    color: 'grey',
    fontStyle: "italic",
  }


});