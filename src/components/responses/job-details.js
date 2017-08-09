import React from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ChatStyles } from '../../styles';

const createDetailsRow = (icon, text) => (
  <View style={ChatStyles.JobDetailsRow}>
    <Icon name={icon} color="#ffffff" />
    <Text style={ChatStyles.JobDetailsText}>{ text }</Text>
  </View>
);

const JobDetails = (props) => {
  const teamsize = props.details.essentials.teamsize;
  const startDate = moment(props.details.essentials.startdate);

  return (
    <View style={ChatStyles.JobDetailsView}>
      <View style={ChatStyles.JobDetailsRow}>
        <Text style={{ color: '#ffffff' }}>Sure thing! Here are the details about the job:</Text>
      </View>
      <View style={ChatStyles.JobDetailsRow}>
        <Text style={ChatStyles.JobDetailsHeadline}>{ props.details.headline }</Text>
      </View>
      { createDetailsRow('location-on', props.details.essentials.locations) }
      { createDetailsRow('alarm-on', props.details.essentials.employment) }
      { createDetailsRow('check-circle', props.details.essentials.experience) }
      { createDetailsRow('perm-contact-calendar', startDate.format('MMM Do YYYY')) }
      { createDetailsRow('face', props.details.essentials.companysize) }
      { createDetailsRow('group-work', `${teamsize.min} - ${teamsize.max}`) }
    </View>
  );
};

export default JobDetails;
