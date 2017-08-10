import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ChatStyles } from '../../styles';
import { KeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const styles = StyleSheet.create({
  BonusBubble: {
    marginTop: 10,
  },
});

const Technologies = props => (
  <View>
    <View style={ChatStyles.StdBubble}>
      <View style={[ChatStyles.StdBubbleRow, ChatStyles.StdBubbleHeader]}>
        <Text style={ChatStyles.StdBubbleText}>
          YAAAAAA! Here are the things Motili is looking for in a developer!
        </Text>
      </View>
      {
        RenderResponse(
          props.details.qualifications,
          KeyRenderer,
          ValueRenderer,
        )
      }
    </View>
    <View style={[ChatStyles.StdBubble, styles.BonusBubble]}>
      <View style={[ChatStyles.StdBubbleRow, ChatStyles.StdBubbleHeader]}>
        <Text style={ChatStyles.StdBubbleText}>
            Oh! And Bonus points for:
        </Text>
      </View>
      {
        RenderResponse(
          props.details.bonus,
          KeyRenderer,
          ValueRenderer,
        )
      }
    </View>
  </View>
);

export default Technologies;
