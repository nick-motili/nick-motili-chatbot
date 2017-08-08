import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import { ChatStyles } from '../styles';

export default class MessageBubble extends PureComponent {
  render() {
    const rowStyles = [ChatStyles.TextChatListRow];
    const bubbleStyles = [ChatStyles.TextChatBubble];
    let avatar = null;

    if (this.props.isBot) {
      rowStyles.push(ChatStyles.TextChatListRowBot);
      bubbleStyles.push(ChatStyles.TextChatBubbleBot);
      avatar = require('../images/robot-avatar.png'); // eslint-disable-line global-require
    } else {
      avatar = require('../images/nick-avatar.png'); // eslint-disable-line global-require
    }

    return (
      <View style={rowStyles}>
        <Avatar
          small
          rounded
          source={avatar}
          style={ChatStyles.Avatar}
        />
        <Text style={bubbleStyles}>{ this.props.message }</Text>
      </View>
    );
  }
}
