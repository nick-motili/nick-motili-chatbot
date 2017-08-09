import * as shortid from 'shortid';
import React, { Component } from 'react';
import {
  View,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';

import { MessageBubble, MessageBox } from '.';
import ResponseFactory from '../response-factory';
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
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={0} style={{ flex: 1 }}>
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
    // NOTE: There are many better ways to implement the response logic. I'm
    // just implementing it as an action that is called at the same time as
    // the message is added to the queue because that's the simplest thing to
    // do. In a real application that type of coupling would obviously not make
    // sense. One could imagine that it would be done server side and thus
    // happen asynchronously. Or we could use some sort of middleware
    // abstraction to effectively implement an event processing chain. There
    // are quite a few options, but I'm not going to deal with that complexity
    // in this prototype.

    // So dispatch the actual user message to add it to the store
    dispatch(
      ChatActions.AddMessage(
        shortid.generate(),
        false,
        ChatActions.MessageTypes.Text,
        text,
      ),
    );

    // Now we need to generate a response
    const { responseType, responseDetails } = ResponseFactory(text);

    dispatch(
      ChatActions.AddMessage(
        shortid.generate(),
        true,
        responseType,
        responseDetails,
      ),
    );
  },
});

const ChatList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatComponent);

export default ChatList;
