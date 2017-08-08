import React, { Component } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';

import { MessageBubble } from '.';
import { ChatStyles } from '../styles';

class ChatComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    function renderItem(row) {
      return (
        <MessageBubble
          isBot={row.item.isBot}
          message={row.item.message}
        />
      );
    }

    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 2, overflow: 'hidden' }}>
            <FlatList
              data={this.props.messages}
              keyExtractor={x => x.id}
              renderItem={renderItem}
              contentContainerStyle={ChatStyles.ChatList}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat,
});

const mapDispatchToProps = (/* dispatch */) => ({
});

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatComponent);

export default ChatList;
