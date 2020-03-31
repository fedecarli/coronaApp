import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import fonts from '../constants/fonts';

const { width, height } = Dimensions.get('window');

class LoadingComponent extends PureComponent {
  render() {
    const { label, dataType } = this.props;

    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          backgroundColor: '#00000099',
          zIndex: 99999,
          top: 0,
          left: 0
        }}
      >
        <View style={{ height, width }} />
        <View
          style={{
            alignSelf: 'center',
            marginTop: height * 0.3,
            position: 'absolute',
            opacity: 1,
            backgroundColor: '#FFFFFFDD',
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 6
          }}
        >
          <Text
            style={{
              color: '#07a9ac',
              fontSize: 16
              // fontFamily: 'AmsiProNarw-UltraItalic'
            }}
          >
            carregando
          </Text>
          <ActivityIndicator
            size="small"
            color="#07a9ac"
            style={{ marginTop: 16 }}
          />
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

export default LoadingComponent;
