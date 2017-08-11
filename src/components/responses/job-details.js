import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Audio } from 'expo';

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

class JobDetails extends Component {
  async componentDidMount() {
    await Audio.setIsEnabledAsync(true);
    this.greeting = new Audio.Sound();
    await this.greeting.loadAsync(require('../../audio/can-do.mp3')); // eslint-disable-line global-require
    this.greeting.playAsync();
  }

  render() {
    return (
      <View style={ChatStyles.StdBubble}>
        <View style={ChatStyles.StdBubbleRow}>
          <Text style={ChatStyles.StdBubbleText}>
            Ohhhhh ya! Here&lsquo;s what you need to know about this job!
          </Text>
        </View>
        <View style={ChatStyles.StdBubbleRow}>
          <Text style={ChatStyles.StdBubbleHeadline}>{ this.props.details.headline }</Text>
        </View>
        {
          RenderResponse(this.props.details.essentials, IconKeyRenderer(iconMap), ValueRenderer)
        }
      </View>
    );
  }
}

export default JobDetails;
