import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import * as Icon from '@expo/vector-icons';

// screens
import MultiBaseScreen from '../screens/MultiBaseScreen';
import MultiLevel2Screen from '../screens/MultiLevel2Screen';

// icons
import SvgPages from '../components/icons/Svg.Pages';

const MultiTabBarIcon = ({ focused }) => (
  <Icon.FontAwesome
    name="flag"
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? '#07a9ac' : '#88888888'}
  />
);
MultiTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Multi Stack
// /////////////////////////////////////////////////////////////////////////////
const MultiStack = createStackNavigator(
  {
    MultiBase: MultiBaseScreen,
    MultiLevel2: MultiLevel2Screen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Países',
      tabBarIcon: MultiTabBarIcon
    }
  }
);

export default MultiStack;
