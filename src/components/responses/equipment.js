import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ChatStyles } from '../../styles';

const Equipment = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Icon name="language" color="#ffffff" />
      <Text style={ChatStyles.StdBubbleText}>{ props.details.operatingsystem }</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Icon name="computer" color="#ffffff" />
      <Text style={ChatStyles.StdBubbleText}>{ props.details.computer }</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Icon name="desktop-windows" color="#ffffff" />
      <Text style={ChatStyles.StdBubbleText}>{ props.details.monitors }</Text>
    </View>
  </View>
);

export default Equipment;
