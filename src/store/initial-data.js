import * as shortid from 'shortid';

import * as ChatActions from '../store/actions/chat-actions';

export default function populateInitialMessage(store) {
  store.dispatch(
    ChatActions.AddMessage(
      shortid.generate(),
      true,
      ChatActions.MessageTypes.Welcome,
      {},
    ),
  );
}
