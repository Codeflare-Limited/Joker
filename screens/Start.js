import React, {Component} from 'react';
import {ImageBackground, View, Text } from 'react-native';
import {Button} from 'react-native-elements';
import joker from '../assets/images/joker.jpg';
import {styles} from '../assets/style/Style';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();


class Start extends Component {
  render() {
    return (
      <ImageBackground style={styles.background} source={joker}>
        <View style={styles.textCon}>
          <Text style={styles.leadText}>Joke's On You!</Text>
        </View>

        <View style={styles.startButtonCon}>
          <Button
            buttonStyle={styles.startButton}
            icon={
              <Icon name="chevron-forward-outline" size={40} color="white" />
            }
            onPress={() => this.props.navigation.navigate('Jokes')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Start;
