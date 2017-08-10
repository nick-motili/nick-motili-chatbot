import React from 'react';
import { Text, View } from 'react-native';

import { ChatStyles } from '../../styles';
import { KeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const Other = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Here are all the other cool things we offer!</Text>
    </View>
    {
      RenderResponse(props.details, KeyRenderer, ValueRenderer)
    }
  </View>
);

export default Other;
