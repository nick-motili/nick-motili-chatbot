import { MessageTypes } from './store/actions/chat-actions';
import JobData from './data';

const jobDetailsReponse = (text) => {
  let rval = null;

  if (text.match(/job/i) !== null) {
    rval = {
      responseType: MessageTypes.JobDetails,
      responseDetails: {
        headline: JobData.headline,
        essentials: JobData.essentials,
      },
    };
  }

  return rval;
};

const qualificationsSelectorResponse = (text) => {
  let rval = null;

  if (text.match(/qualif/i) !== null) {
    rval = {
      responseType: MessageTypes.QualificationsSelector,
      responseDetails: JobData.technologies,
    };
  }

  return rval;
};

const technologiesResponse = (text) => {
  let rval = null;
  const match = /(\w+) developer/i.exec(text);

  if (match !== null) {
    const parts = match[0].split(' ');
    const developerType = parts[0];

    if (developerType in JobData.technologies) {
      rval = {
        responseType: MessageTypes.Technologies,
        responseDetails: {
          qualifications: JobData.technologies[developerType],
          bonus: JobData.bonuspoints,
        },
      };
    }
  }

  return rval;
};

const defaultResponse = (/* text */) => ({
  responseType: MessageTypes.Text,
  responseDetails: "Hmmm.. I don't get it. You can always ask for help (hint: type 'help').",
});

const responses = [
  jobDetailsReponse,
  qualificationsSelectorResponse,
  technologiesResponse,
  defaultResponse,
];

const ResponseFactory = (text) => {
  const response = responses.reduce((x, y) => {
    if (x === null) {
      return y(text);
    }

    return x;
  }, null);

  return response;
};

export default ResponseFactory;
