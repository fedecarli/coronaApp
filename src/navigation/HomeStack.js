import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';
import * as Icon from '@expo/vector-icons';

// screens
import HomeScreen from '../screens/HomeScreen';

// icons
import SvgHome from '../components/icons/Svg.Home';

const HomeTabBarIcon = ({ focused }) => (
  <Icon.Entypo
    name="globe"
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? '#07a9ac' : '#88888888'}
  />
);
HomeTabBarIcon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

// Home Stack
// /////////////////////////////////////////////////////////////////////////////
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      tabBarLabel: 'Mundo',
      tabBarIcon: HomeTabBarIcon
    }
  }
);

export default HomeStack;
