import * as shortid from 'shortid';
import React, { Component } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';

import { MessageBubble, MessageBox } from '.';
import { ChatStyles } from '../styles';
import * as ChatActions from '../store/actions/chat-actions';

// This is a version of FlatList that just scrolls nicely to
// the bottom when it's modified
class MessageList extends FlatList {
  componentDidUpdate(/* prevState, prevProps */) {
    this.scrollToEnd();
  }
}

class ChatComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    function renderItem(row) {
      return (
        <MessageBubble
          isBot={row.item.isBot}
          messageType={row.item.messageType}
          messageDetails={row.item.messageDetails}
        />
      );
    }

    return (
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={20} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <MessageList
            data={this.props.messages}
            keyExtractor={x => x.id}
            renderItem={renderItem}
            style={ChatStyles.ChatList}
            inverted
            contentContainerStyle={ChatStyles.ChatListContainer}
          />
          <MessageBox
            onAddMessage={(x) => {
              this.props.addMessage(x);
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chat,
});

const mapDispatchToProps = dispatch => ({
  addMessage: (text) => {
    dispatch(
      ChatActions.AddMessage(
        shortid.generate(),
        false,
        ChatActions.MessageTypes.Text,
        text,
      ),
    );
  },
});

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatComponent);

export default ChatList;
