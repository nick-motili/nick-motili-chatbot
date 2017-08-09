import { MessageTypes } from './store/actions/chat-actions';
import JobData from './data';

const ResponseFactory = (text) => {
  if (text.match(/job/i) !== null) {
    return {
      responseType: MessageTypes.JobDetails,
      responseDetails: {
        headline: JobData.headline,
        essentials: JobData.essentials,
      },
    };
  } else if (text.match(/qualif/i) !== null) {
    return {
      responseType: MessageTypes.QualificationsSelector,
      responseDetails: JobData.technologies,
    };
  } return {
    responseType: MessageTypes.Text,
    responseDetails: "Hmmm.. I don't get it. You can always ask for help (hint: type 'help').",
  };
};

export default ResponseFactory;
