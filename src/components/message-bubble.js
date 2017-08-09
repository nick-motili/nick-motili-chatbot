import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import { ChatStyles } from '../styles';
import ResponseComponentFactory from './responses/response-component-factory';

const MessageBubble = (props) => {
  const componentForType = (isBot, messageType, messageDetails) => {
    if (!isBot) {
      return (<Text style={ChatStyles.TextBubble}>{ messageDetails }</Text>);
    }

    return ResponseComponentFactory(messageType, messageDetails);
  };

  const rowStyles = [ChatStyles.ChatListRow];
  const itemStyles = [ChatStyles.ChatEntry];
  let avatar = null;

  if (props.isBot) {
    rowStyles.push(ChatStyles.ChatListRowBot);
    itemStyles.push(ChatStyles.ChatEntryBot);
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
      <View style={itemStyles}>
        {
          componentForType(
            props.isBot,
            props.messageType,
            props.messageDetails,
          )
        }
      </View>
    </View>
  );
};

export default MessageBubble;
