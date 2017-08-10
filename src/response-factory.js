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
    const developerType = parts[0].toLowerCase();

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

const equipmentResponse = (text) => {
  let rval = null;

  if (text.match(/equipment/i)) {
    rval = {
      responseType: MessageTypes.Equipment,
      responseDetails: JobData.equipment,
    };
  }

  return rval;
};

const methodologyResponse = (text) => {
  let rval = null;

  if (text.match(/methodo/i)) {
    rval = {
      responseType: MessageTypes.Methodology,
      responseDetails: JobData.methodology,
    };
  }

  return rval;
};

const scheduleResponse = (text) => {
  let rval = null;

  if (text.match(/schedule/i)) {
    rval = {
      responseType: MessageTypes.Schedule,
      responseDetails: JobData.specs,
    };
  }

  return rval;
};

const otherResponse = (text) => {
  let rval = null;

  if (text.match(/other things/i)) {
    rval = {
      responseType: MessageTypes.Other,
      responseDetails: JobData.misc,
    };
  }

  return rval;
};

const helpResponse = (text) => {
  let rval = null;
  if (text.match(/help/i)) {
    rval = {
      responseType: MessageTypes.Help,
      responseDetails: {},
    };
  }

  return rval;
};

const defaultResponse = (/* text */) => ({
  responseType: MessageTypes.Text,
  responseDetails: "Hmmm.. I don't get it. You can always ask for help (hint: type HELP).",
});

const responses = [
  jobDetailsReponse,
  qualificationsSelectorResponse,
  technologiesResponse,
  equipmentResponse,
  methodologyResponse,
  scheduleResponse,
  otherResponse,
  helpResponse,
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
