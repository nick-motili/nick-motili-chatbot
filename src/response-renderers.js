/** ****************************************************************************
* In looking at the test data it's apparent that the rendering process can be
* generalized by building a set of smart functions to examine it and render
* it appropriately. Then building views should be quite easy.
***************************************************************************** */

/* eslint no-use-before-define: 0 */

import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import { ChatStyles } from './styles';
import StyleConstants from './styles/constants';

/** ****************************************************************************
* Key Renderers
* These are responsible for rendering the left side of the object.
***************************************************************************** */

const KeyRenderer = key => <Text style={ChatStyles.StdBubbleText}>{ key } : </Text>;

// This key renderer renders icons for keys. It takes an icon map which is
// used to map keys to icons. If a key doesn't exist it just falls back
// to the text renderer.
const IconKeyRenderer = iconMap => (key) => {
  if (key in iconMap) {
    return (<Icon
      name={iconMap[key]}
      color={StyleConstants.StdIconColor}
      size={StyleConstants.StdIconSize}
      style={ChatStyles.StdIcon}
    />);
  }

  return KeyRenderer(key);
};

/** ****************************************************************************
* Value Renderers
* These are responsible for rendering the right side of the object. Most of the
* logic is here as the data types vary quite a bit
***************************************************************************** */

// Ok the idea here is to setup a series of functions that examine the data to
// decide if they can render it. The first one in the chain to render it wins.

const basicStringRenderer = value => <Text style={ChatStyles.StdBubbleText}>{ `${value}` }</Text>;

const dateRenderer = (value) => {
  if (value instanceof Date) {
    return <Text style={ChatStyles.StdBubbleText}>{ moment(value).format('MMM Do YYYY') }</Text>;
  }

  return null;
};

const rangeRenderer = (value) => {
  if (typeof (value) === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 2) {
      return <Text style={ChatStyles.StdBubbleText}>{ value[keys[0]] } - { value[keys[1]] }</Text>;
    }
  }

  return null;
};

const oneOfRenderer = (value) => {
  if (typeof (value) === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 1 && keys[0] === 'oneof') {
      const oneOfList = value.oneof;

      return (
        <View style={ChatStyles.CalloutSection}>
          <View style={ChatStyles.CalloutSectionHeader}>
            <Text style={ChatStyles.StdBubbleText}>One of</Text>
          </View>
          {
            Object.keys(oneOfList).map(key => (
              <View style={ChatStyles.StdBubbleRow} key={key}>
                { KeyRenderer(key) }
                { ValueRenderer(oneOfList[key]) }
              </View>
            ))
          }
        </View>
      );
    }
  }

  return null;
};

const boolRenderer = (value) => {
  if (value === true) {
    return (<Icon
      name="check"
      color={StyleConstants.StdIconColor}
      size={StyleConstants.StdIconSize}
      style={ChatStyles.StdIcon}
    />);
  } else if (value === false) {
    return (<Icon
      name="highlight-off"
      color={StyleConstants.StdIconColor}
      size={StyleConstants.StdIconSize}
      style={ChatStyles.StdIcon}
    />);
  }

  return null;
};

const arrayRenderer = (value) => {
  if (Array.isArray(value)) {
    return (
      <View style={ChatStyles.CalloutSection}>
        {
          value.map(item => (
            <View style={ChatStyles.StdBubbleRow} key={item}>
              <Text style={ChatStyles.StdBubbleText}>- </Text>{ ValueRenderer(item) }
            </View>
          ))
        }
      </View>
    );
  }

  return null;
};

const renderingChain = [
  rangeRenderer,
  dateRenderer,
  oneOfRenderer,
  boolRenderer,
  arrayRenderer,
  basicStringRenderer,
];

const ValueRenderer = (value) => {
  const response = renderingChain.reduce((x, y) => {
    if (x === null) {
      return y(value);
    }

    return x;
  }, null);

  return response;
};

/** ****************************************************************************
* Rendering API
* This function is what's actually used to render data
***************************************************************************** */

const RenderResponse = (valueObject, keyRenderer, valueRenderer) => (
  <View>
    {
      Object.keys(valueObject).map((key) => {
        const value = valueObject[key];

        return (
          <View style={ChatStyles.StdBubbleRow} key={key}>
            { keyRenderer(key) }
            { valueRenderer(value) }
          </View>
        );
      })
    }
  </View>
);

export {
  KeyRenderer,
  IconKeyRenderer,
  ValueRenderer,
  RenderResponse,
};
