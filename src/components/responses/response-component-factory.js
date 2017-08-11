import React from 'react';
import { MessageTypes } from '../../store/actions/chat-actions';
import {
  BasicText,
  JobDetails,
  QualificationsSelector,
  Technologies,
  Equipment,
  Methodology,
  Schedule,
  Benefits,
  Help,
  Welcome,
} from '.';


const factory = (messageType, messageDetails) => {
  switch (messageType) {
    case MessageTypes.Text:
      return <BasicText details={messageDetails} />;
    case MessageTypes.JobDetails:
      return <JobDetails details={messageDetails} />;
    case MessageTypes.QualificationsSelector:
      return <QualificationsSelector details={messageDetails} />;
    case MessageTypes.Technologies:
      return <Technologies details={messageDetails} />;
    case MessageTypes.Equipment:
      return <Equipment details={messageDetails} />;
    case MessageTypes.Methodology:
      return <Methodology details={messageDetails} />;
    case MessageTypes.Schedule:
      return <Schedule details={messageDetails} />;
    case MessageTypes.Benefits:
      return <Benefits details={messageDetails} />;
    case MessageTypes.Help:
      return <Help details={messageDetails} />;
    case MessageTypes.Welcome:
      return <Welcome details={messageDetails} />;
    default:
      throw new Error(`Can not locate component for ${messageType}`);
  }
};

export default factory;
