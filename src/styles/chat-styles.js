import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const motiliBackgroundColor = '#49C3E7';

const styles = StyleSheet.create({
  ChatList: {
    flex: 2,
    backgroundColor: '#ffffff',
  },
  ChatListContainer: {
    paddingTop: 30,
  },
  ChatListRow: {
    flexDirection: 'row-reverse',
  },
  ChatListRowBot: {
    flexDirection: 'row',
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
  TextBubble: {
    color: '#333333',
    backgroundColor: '#f4f4f4',
    fontSize: 14,
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    overflow: 'hidden',
  },
  TextBubbleBot: {
    color: '#ffffff',
    backgroundColor: motiliBackgroundColor,
  },
  JobDetailsView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: motiliBackgroundColor,
    padding: 20,
    borderRadius: 8,
    borderColor: '#cccccc',
  },
  JobDetailsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  JobDetailsHeadline: {
    fontSize: 16,
    marginVertical: 2,
    color: '#ffffff',
  },
  JobDetailsText: {
    color: '#ffffff',
    marginLeft: 10,
    paddingTop: 5,
  },
});

export default styles;
