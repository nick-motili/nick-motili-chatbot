import { ADD_MESSAGE } from './action-types';

const MessageTypes = {
  Text: 'TEXT',
  JobDetails: 'JOBDETAILS',
  QualificationsSelector: 'QUALIFICATIONS-SELECTOR',
  Technologies: 'TECHNOLOGIES',
  Equipment: 'EQUIPMENT',
  Help: 'HELP',
  Methodology: 'METHODOLOGY',
  Schedule: 'SCHEDULE',
  Benefits: 'BENEFITS',
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
