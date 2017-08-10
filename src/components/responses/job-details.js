import React from 'react';
import { Text, View } from 'react-native';

import { ChatStyles } from '../../styles';
import { IconKeyRenderer, ValueRenderer, RenderResponse } from '../../response-renderers';

const iconMap = {
  locations: 'location-on',
  employment: 'alarm-on',
  experience: 'check-circle',
  startdate: 'perm-contact-calendar',
  companysize: 'face',
  teamsize: 'group-work',
};

const JobDetails = props => (
  <View style={ChatStyles.StdBubble}>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleText}>Sure thing! Here are the details about the job:</Text>
    </View>
    <View style={ChatStyles.StdBubbleRow}>
      <Text style={ChatStyles.StdBubbleHeadline}>{ props.details.headline }</Text>
    </View>
    {
      RenderResponse(props.details.essentials, IconKeyRenderer(iconMap), ValueRenderer)
    }
  </View>
);

export default JobDetails;
