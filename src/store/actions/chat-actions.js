import { ADD_MESSAGE } from './action-types';

const MessageTypes = {
  Text: 'TEXT',
  JobDetails: 'JOBDETAILS',
  QualificationsSelector: 'QUALIFICATIONS-SELECTOR',
};

function AddMessage(messageId, isBot, messageType, messageDetails) {
  const rval = {
    type: ADD_MESSAGE,
    messageId,
    isBot,
    messageType,
    messageDetails,
  };

  return rval;
}

export { AddMessage, MessageTypes };
