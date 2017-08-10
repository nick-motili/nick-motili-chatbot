import React from 'react';
import { Text, View } from 'react-native';

import { ChatStyles } from '../../styles';
import { KeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const Schedule = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>OOOOKKKAAAYYY! Check out this schedule!</Text>
    </View>
    {
      RenderResponse(props.details, KeyRenderer, ValueRenderer)
    }
  </View>
);

export default Schedule;
