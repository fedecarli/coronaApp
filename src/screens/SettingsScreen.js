import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { Linking } from 'expo';
import { gStyle, images } from '../constants';
import Touch from '../components/Touch';

const headerImage = __DEV__ ? 'rabbitDev' : 'rabbitProd';

const SettingsScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >
      {/* <Text style={gStyle.text[theme]}>Settings content area</Text> */}

      <View style={gStyle.spacer16} />
      <View style={gStyle.spacer16} />

      <Text style={[gStyle.text[theme], gStyle.textPacifico, { fontSize: 32 }]}>
        Você é gestante?
      </Text>
      {/* <View style={gStyle.spacer16} /> */}
      <Text style={gStyle.text[theme]}>Crie seu chá de bebê virtual</Text>
      <View style={gStyle.spacer16} />
      <View style={gStyle.spacer16} />

      <Touch
        onPress={() => Linking.openURL('http://bit.ly/bbchow-download')}
        text="ver mais"
      />
    </ScrollView>
  );
};

SettingsScreen.navigationOptions = ({ theme }) => {
  return {
    headerTitleStyle: gStyle.headerTitleStyle,
    title: 'Menu'
    // headerLeft: (
    //   <View style={{ flex: 1, paddingLeft: 16 }}>
    //     <Text style={gStyle.text[theme]}>left</Text>
    //   </View>
    // ),
    // headerRight: (
    //   <View style={{ flex: 1, paddingRight: 16 }}>
    //     <Text style={gStyle.text[theme]}>right</Text>
    //   </View>
    // )
    // headerTitle: (
    //   <View style={{ flex: 1 }}>
    //     <Image
    //       style={{ alignSelf: 'center', height: 40, width: 40 }}
    //       source={images[headerImage]}
    //     />
    //   </View>
    // )
  };
};

/*
// shoutout @notbrent: https://snack.expo.io/H105kxsG7
const shouldShowBackButton = stackRouteNavigation => {
  const parent = stackRouteNavigation.dangerouslyGetParent();
  return parent.state.routes.indexOf(stackRouteNavigation.state) > 0;
};

SettingsScreen.navigationOptions = ({ navigation }) => ({

headerLeft: !shouldShowBackButton(navigation) ? (
  <View style={{ flex: 1 }}>
    <Text>left</Text>
  </View>
) : null,
*/

export default SettingsScreen;
