import * as shortid from 'shortid';

import * as ChatActions from '../store/actions/chat-actions';

export default function populateInitialMessage(store) {
  let initialMessage = 'I\'m Motili Meeseeks! Look at me! My purpose is to help you learn about Motili';
  initialMessage += ' jobs and then stop existing. Sooooo what questions do you have? You can always';
  initialMessage += ' just ask for HELP!';

  store.dispatch(
    ChatActions.AddMessage(
      shortid.generate(),
      true,
      ChatActions.MessageTypes.Text,
      initialMessage,
    ),
  );
}
