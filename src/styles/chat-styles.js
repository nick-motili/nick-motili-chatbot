import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ChatList: {
    minHeight: '100%',
    justifyContent: 'flex-end',
  },
  TextChatListRow: {
    flex: 1,
    flexDirection: 'row',
  },
  TextChatListRowBot: {
    flexDirection: 'row-reverse',
  },
  TextChatBubble: {
    color: '#333333',
    backgroundColor: '#f4f4f4',
    fontSize: 14,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    width: screenWidth * 0.80,
    marginBottom: 10,
    overflow: 'hidden',
  },
  TextChatBubbleBot: {
    color: '#ffffff',
    backgroundColor: '#49C3E7',
  },
  Avatar: {
    marginRight: 25,
    marginLeft: 25,
  },
});

export default styles;
