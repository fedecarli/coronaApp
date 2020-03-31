import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import * as Icon from '@expo/vector-icons';

// screens
import SettingsScreen from '../screens/SettingsScreen';

// icons
import SvgCog from '../components/icons/Svg.Cog';

const SettingsTabBarIcon = ({ focused }) => (
  <Icon.Entypo
    name="menu"
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? '#07a9ac' : '#88888888'}
  />
);
SettingsTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Settings Stack
// /////////////////////////////////////////////////////////////////////////////
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Menu',
      tabBarIcon: SettingsTabBarIcon
    }
  }
);

export default SettingsStack;
