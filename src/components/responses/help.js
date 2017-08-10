import React from 'react';
import { Text, View } from 'react-native';

import { B } from '../common';
import { ChatStyles } from '../../styles';

const HelpScreen = (/* rops */) => (
  <View style={ChatStyles.StdBubble}>
    <View style={[ChatStyles.StdBubbleRow, ChatStyles.StdBubbleHeader]}>
      <Text style={ChatStyles.StdBubbleText}>Here are the things you can ask me about:</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about the <B>job</B>.</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about the <B>qualifications</B>.</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about the <B>equipment</B>.</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about our <B>methodology</B>.</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about our <B>schedule</B>.</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Ask me about <B>other things</B> we offer.</Text>
    </View>
  </View>
);

export default HelpScreen;
