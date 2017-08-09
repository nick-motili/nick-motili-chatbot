import * as shortid from 'shortid';

import ResponseFactory from '../response-factory';
import * as ChatActions from '../store/actions/chat-actions';
import { ADD_MESSAGE } from '../store/actions/action-types';

const ResponseMiddleware = store => next => (action) => {
  const result = next(action);

  // When we see a message type go by of ADD_MESSAGE we may need to generate a
  // response for it.
  if (action.type === ADD_MESSAGE && !action.isBot) {
    const { responseType, responseDetails } = ResponseFactory(action.messageDetails);

    store.dispatch(
      ChatActions.AddMessage(
        shortid.generate(),
        true,
        responseType,
        responseDetails,
      ),
    );
  }

  return result;
};

export default ResponseMiddleware;
