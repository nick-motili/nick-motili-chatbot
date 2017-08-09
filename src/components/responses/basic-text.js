import React from 'react';
import { Text, View } from 'react-native';
import { ChatStyles } from '../../styles';

export default props => (
  <View style={ChatStyles.StdBubble}>
    <Text style={ChatStyles.StdBubbleText}>{ props.details }</Text>
  </View>
);
