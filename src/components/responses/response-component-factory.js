import React from 'react';
import { MessageTypes } from '../../store/actions/chat-actions';
import {
  BasicText,
  JobDetails,
  QualificationsSelector,
} from '.';


const factory = (messageType, messageDetails) => {
  switch (messageType) {
    case MessageTypes.Text:
      return <BasicText details={messageDetails} />;
    case MessageTypes.JobDetails:
      return <JobDetails details={messageDetails} />;
    case MessageTypes.QualificationsSelector:
      return <QualificationsSelector details={messageDetails} />;
    default:
      throw new Error(`Can not locate component for ${messageType}`);
  }
};

export default factory;
