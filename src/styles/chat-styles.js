import { StyleSheet, Dimensions } from 'react-native';
import StyleConstants from './constants';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ChatList: {
    flex: 2,
    backgroundColor: '#ffffff',
  },
  ChatListContainer: {
    paddingTop: 30,
  },
  ChatListRow: {
    flexDirection: 'row',
  },
  ChatListRowUser: {
    flexDirection: 'row-reverse',
  },
  ChatEntry: {
    width: screenWidth * 0.80,
    marginBottom: 10,
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
  StdBubble: {
    backgroundColor: StyleConstants.MotiliBackgroundColor,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  StdBubbleUser: {
    color: '#333333',
    backgroundColor: '#f4f4f4',
  },
  StdBubbleText: {
    color: '#ffffff',
    fontSize: 14,
  },
  StdBubbleRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  StdBubbleHeadline: {
    fontSize: 16,
    marginVertical: 2,
    color: '#ffffff',
  },
});

export default styles;
