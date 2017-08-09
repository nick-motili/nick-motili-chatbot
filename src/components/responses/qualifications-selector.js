import React from 'react';
import * as shortid from 'shortid';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { ChatStyles } from '../../styles';
import StyleConstants from '../../styles/constants';
import * as ChatActions from '../../store/actions/chat-actions';

const styles = StyleSheet.create({
  ButtonList: {
    marginTop: 20,
  },
  SelectorButton: {
    marginBottom: 20,
  },
});

const QualificationsSelectorComponent = (props) => {
  const levels = Object.keys(props.details);

  return (
    <View style={ChatStyles.StdBubble}>
      <Text style={ChatStyles.StdBubbleText}>
        Ok! First I need to know what type of developer you are. Choose one below:
      </Text>
      <View style={styles.ButtonList}>
        {
          levels.map(
            x => (<Button
              key={x}
              style={styles.SelectorButton}
              title={x}
              backgroundColor={StyleConstants.StdButtonBackgrounColor}
              borderRadius={8}
              onPress={() => { props.addMessage(x); }}
            />),
          )
        }
      </View>
    </View>
  );
};

const mapStateToProps = (/* state */) => ({
});

const mapDispatchToProps = dispatch => ({
  addMessage: (text) => {
    dispatch(
      ChatActions.AddMessage(
        shortid.generate(),
        false,
        ChatActions.MessageTypes.Text,
        `I am a ${text} developer`,
      ),
    );
  },
});

const QualificationsSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QualificationsSelectorComponent);

export default QualificationsSelector;
