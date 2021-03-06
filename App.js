import React from 'react';
import { StyleSheet, 
         Text, 
         View,
         KeyboardAvoidingView, 
         Platform, 
         ImageBackground } from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco',
    }
  }
  handleUpdatedLocation = location => {
    this.setState({ location })
  }
  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground source={require('./assets/rain.jpg')} style={styles.imageContainer} imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24˚</Text>
            <SearchInput 
              placeholder="Search any city" 
              onSubmit={this.handleUpdatedLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18
  }, 
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null, 
    height: null,
    resizeMode: 'cover'
  }
});
