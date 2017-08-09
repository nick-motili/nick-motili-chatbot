import React from 'react';
import { Text } from 'react-native';
import { ChatStyles } from '../../styles';

export default props => (
  <Text style={[ChatStyles.TextBubble, ChatStyles.TextBubbleBot]}>{ props.details }</Text>
);
