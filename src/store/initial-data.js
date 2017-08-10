import * as shortid from 'shortid';

import * as ChatActions from '../store/actions/chat-actions';

export default function populateInitialMessage(store) {
  let initialMessage = 'Hi! I am a Motili Job Chat Bot!';
  initialMessage += ' I\'m happy to answer any questions you may have about our job.';
  initialMessage += ' Not sure what to ask? Simply ask for HELP.';

  store.dispatch(
    ChatActions.AddMessage(
      shortid.generate(),
      true,
      ChatActions.MessageTypes.Text,
      initialMessage,
    ),
  );
}
