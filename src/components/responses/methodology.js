import React from 'react';
import { Text, View } from 'react-native';

import { ChatStyles } from '../../styles';
import { KeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const Methodology = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>
        Allllllriight! Motili developers are very productive.
        Check out the methods they use to do it!
      </Text>
    </View>
    {
      RenderResponse(props.details, KeyRenderer, ValueRenderer)
    }
  </View>
);

export default Methodology;
