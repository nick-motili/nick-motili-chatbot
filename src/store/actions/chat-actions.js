import { ADD_MESSAGE } from './action-types';

export function AddMessage(messageId, isBot, message) { // eslint-disable-line import/prefer-default-export, max-len
  return {
    type: ADD_MESSAGE,
    messageId,
    isBot,
    message,
  };
}
