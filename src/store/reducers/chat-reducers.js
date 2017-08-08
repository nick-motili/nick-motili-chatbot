import update from 'immutability-helper';

import * as actionTypes from '../actions/action-types';

const chat = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE: {
      const message = {
        id: action.messageId,
        isBot: action.isBot,
        message: action.message,
      };

      return update(state, { $push: [message] });
    }
    default:
      return state;
  }
};

export default chat;
