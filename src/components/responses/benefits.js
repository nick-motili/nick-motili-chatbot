import React from 'react';
import { Text, View } from 'react-native';

import { ChatStyles } from '../../styles';
import { KeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const Benefits = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>
        Heeeeeeereeeee we go! Checkout these great benefits!
      </Text>
    </View>
    {
      RenderResponse(props.details, KeyRenderer, ValueRenderer)
    }
  </View>
);

export default Benefits;
