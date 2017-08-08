import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ChatList: {
    flex: 2,
    backgroundColor: '#ffffff',
  },
  ChatListContainer: {
    paddingTop: 30,
  },
  TextChatListRow: {
    flexDirection: 'row-reverse',
  },
  TextChatListRowBot: {
    flexDirection: 'row',
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
  ChatFooter: {
    height: 40,
    paddingTop: 6,
    borderTopWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#fafafa',
  },
  MessageBox: {
    height: 34,
    padding: 0,
    paddingLeft: 10,
    backgroundColor: '#cccccc',
  },
});

export default styles;
