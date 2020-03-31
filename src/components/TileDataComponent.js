import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import fonts from '../constants/fonts';
import Thousand from '../utils/Thousand';

class TileData extends PureComponent {
  render() {
    const { label, dataType } = this.props;

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#07a9ac',
          width: 'auto',
          height: 54,
          paddingHorizontal: 5,
          borderRadius: 3,
          marginBottom: -4
        }}
      >
        <View
          style={{
            width: 200,
            height: 44,
            backgroundColor: '#FFD900',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            borderColor: '#88888888',
            borderWidth: 3,
            marginRight: 2
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: fonts.comfortaaRegular,
              fontSize: 24,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            {label.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            width: 120,
            height: 44,
            backgroundColor: '#FFD900',
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            borderColor: '#88888888',
            borderWidth: 3,
            marginLeft: 2
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: fonts.comfortaaBold,
              fontSize: 32,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            {/* {dataType} */}
            {Thousand.separator(dataType)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 6,
    minWidth: 64,
    alignItems: 'flex-start',
    marginLeft: 4,
    marginRight: 12
  },
  icon: {
    color: '#22222260',
    marginLeft: 0,
    alignSelf: 'center'
    // width: 16,
    // height: 32,
    // color: '#FFD900',
  },
  text: {
    color: '#22222240',
    lineHeight: 20,
    fontSize: 18,
    letterSpacing: -0.25,
    fontFamily: 'sfdisplay-regular',
    alignSelf: 'center',
    marginLeft: 0
  }
});

export default TileData;
