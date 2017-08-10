import React from 'react';
import { Text, View } from 'react-native';
import { ChatStyles } from '../../styles';
import { IconKeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const iconMap = {
  operatingsystem: 'language',
  computer: 'computer',
  monitors: 'desktop-windows',
};

const Equipment = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={[ChatStyles.StdBubbleRow, ChatStyles.StdBubbleHeader]}>
      <Text style={ChatStyles.StdBubbleText}>Here is the equipment that we use...</Text>
    </View>
    <View>
      { RenderResponse(props.details, IconKeyRenderer(iconMap), ValueRenderer) }
    </View>
  </View>
);

export default Equipment;
