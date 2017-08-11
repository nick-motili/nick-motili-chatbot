import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo';

import { ChatStyles } from '../../styles';
import { B } from '../common';

class WelcomeResponse extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
    this.greeting = new Audio.Sound();
    await this.greeting.loadAsync(require('../../audio/look-at-me.mp3')); // eslint-disable-line global-require
    this.greeting.playAsync();
  }

  render() {
    return (
      <View style={ChatStyles.StdBubble}>
        <View style={ChatStyles.StdBubbleRow}>
          <Text style={ChatStyles.StdBubbleText}>
            I&lsquo;m Motili Meeseeks! Look at me! My purpose is to help you learn
            about Motili jobs and then stop existing. Sooooo what questions do you
            have? You can always just ask for help by typing <B>HELP</B>!
          </Text>
        </View>
      </View>
    );
  }
}

export default WelcomeResponse;
