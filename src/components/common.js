import React from 'react';
import { Text } from 'react-native';

import { ChatStyles } from '../styles';

const B = props => (
  <Text style={[ChatStyles.StdBubbleText, ChatStyles.StdBubbleTextBold]}>
    { props.children }
  </Text>
);

export { B }; // eslint-disable-line import/prefer-default-export
