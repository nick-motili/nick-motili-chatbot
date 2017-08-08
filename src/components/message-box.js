import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { ChatStyles } from '../styles';

class MessageBox extends Component {
  render() {
    return (
      <View style={ChatStyles.ChatFooter}>
        <TextInput
          ref={(input) => { this.messageText = input; }}
          style={ChatStyles.messageBox}
          placeholder="message..."
          blurOnSubmit={false}
          onSubmitEditing={(event) => {
            this.props.onAddMessage(event.nativeEvent.text);
            this.messageText.setNativeProps({ text: '' });
          }}
        />
      </View>
    );
  }
}

export default MessageBox;
