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
    paddingLeft: 10,
    borderTopWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#fafafa',
  },
  StdBubble: {
    backgroundColor: StyleConstants.MotiliBackgroundColor,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  StdBubbleHeader: {
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  StdBubbleUser: {
    color: '#333333',
    backgroundColor: '#f4f4f4',
  },
  StdBubbleText: {
    color: '#ffffff',
    fontSize: 14,
  },
  StdBubbleTextBold: {
    fontWeight: 'bold',
  },
  StdBubbleRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  StdBubbleHeadline: {
    fontSize: 16,
    marginVertical: 2,
    color: '#ffffff',
  },
  StdBubbleSection: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    backgroundColor: '#74cee8',
    borderRadius: 8,
    marginBottom: 8,
  },
  StdIcon: {
    marginRight: 10,
  },
  CalloutSection: {
    flex: 2,
    backgroundColor: '#74cee8',
    padding: 15,
    borderRadius: 8,
  },
  CalloutSectionHeader: {
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: 10,
    alignItems: 'flex-start',
    paddingBottom: 5,
  },
});

export default styles;
