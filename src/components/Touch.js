import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

const Touch = ({ accessible, onPress, style, text, textStyle }) => (
  <TouchableOpacity
    accessible={accessible}
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={[
      style,
      { backgroundColor: '#07a9ac', borderColor: '#FFD900', borderWidth: 4 }
    ]}
  >
    <Text
      style={[textStyle, { color: '#FFD900', fontWeight: '900', fontSize: 16 }]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

Touch.defaultProps = {
  accessible: true,
  style: gStyle.btn,
  textStyle: gStyle.btnText
};

Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  accessible: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  textStyle: PropTypes.object
};

export default Touch;
