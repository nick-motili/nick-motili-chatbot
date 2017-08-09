import React from 'react';
import moment from 'moment';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { ChatStyles } from '../../styles';
import StyleConstants from '../../styles/constants';

const styles = StyleSheet.create({
  JobDetailsView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: StyleConstants.MotiliBackgroundColor,
    padding: 20,
    borderRadius: 8,
    borderColor: '#cccccc',
  },
  JobDetailsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  JobDetailsHeadline: {
    fontSize: 16,
    marginVertical: 2,
    color: '#ffffff',
  },
});

const createDetailsRow = (icon, text) => (
  <View style={styles.JobDetailsRow}>
    <Icon name={icon} color="#ffffff" />
    <Text style={ChatStyles.StdBubbleText}>{ text }</Text>
  </View>
);

const JobDetails = (props) => {
  const teamsize = props.details.essentials.teamsize;
  const startDate = moment(props.details.essentials.startdate);

  return (
    <View style={styles.JobDetailsView}>
      <View style={styles.JobDetailsRow}>
        <Text style={{ color: '#ffffff' }}>Sure thing! Here are the details about the job:</Text>
      </View>
      <View style={styles.JobDetailsRow}>
        <Text style={styles.JobDetailsHeadline}>{ props.details.headline }</Text>
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
