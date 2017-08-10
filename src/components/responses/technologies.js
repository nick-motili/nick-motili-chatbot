import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ChatStyles } from '../../styles';

const styles = StyleSheet.create({
  TechnologyRowHeader: {
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  TechnologyRowSection: {
    paddingLeft: 15,
    paddingTop: 5,
    backgroundColor: '#74cee8',
    borderRadius: 8,
    marginBottom: 8,
  },
  BonusBubble: {
    marginTop: 10,
  },
});

const createDetailsRow = (key, value) => {
  if (typeof (value) === 'object') {
    return (
      <View key={key}>
        <View style={ChatStyles.StdBubbleRow}>
          <Text style={ChatStyles.StdBubbleText}>{ key } : </Text>
        </View>
        <View style={styles.TechnologyRowSection}>
          {
            Object.keys(value).map(x => createDetailsRow(x, value[x]))
          }
        </View>
      </View>
    );
  }
  return (
    <View style={ChatStyles.StdBubbleRow} key={key}>
      <Text style={ChatStyles.StdBubbleText}>{ key } : </Text>
      <Text style={ChatStyles.StdBubbleText}>{ value }</Text>
    </View>
  );
};

const Technologies = props => (
  <View>
    <View style={ChatStyles.StdBubble}>
      <View style={[ChatStyles.StdBubbleRow, styles.TechnologyRowHeader]}>
        <Text style={ChatStyles.StdBubbleText}>
            Alright, here are the technologies we use:
        </Text>
      </View>
      {
        Object.keys(props.details.qualifications).map(
          x => createDetailsRow(x, props.details.qualifications[x]),
        )
      }
    </View>
    <View style={[ChatStyles.StdBubble, styles.BonusBubble]}>
      <View style={[ChatStyles.StdBubbleRow, styles.TechnologyRowHeader]}>
        <Text style={ChatStyles.StdBubbleText}>
            Oh! And Bonus points for:
        </Text>
      </View>
      {
        Object.keys(props.details.bonus).map(x => createDetailsRow(x, props.details.bonus[x]))
      }
    </View>
  </View>
);

export default Technologies;
