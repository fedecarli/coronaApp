import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  Text,
  View,
  Alert,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import { useTheme } from 'react-navigation';
import * as Icon from '@expo/vector-icons';
// import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { gStyle } from '../constants';
import CoronaApiService from '../services/CoronaApiService';

// components
import Touch from '../components/Touch';
import LoadingComponent from '../components/LoadingComponent';

const { width, height } = Dimensions.get('window');

class MultiBaseScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: gStyle.headerTitleStyle,
    title: 'Lista de Países'
  };

  constructor(props) {
    super(props);
    this.state = {
      casesBrazil: '',
      flagBrazil: '',
      cases: '',
      todayCases: '',
      deathsBrazil: '',
      deaths: '',
      todayDeaths: '',
      recovered: '',
      active: '',
      critical: '',
      casesPerOneMillion: '',
      deathsPerOneMillion: '',
      updatedAt: '',
      countriesData: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      await this.setData();
    } catch (error) {
      // console.log('error:', error);
      Alert.alert(
        `Muitas requisições simultâneas. Tente novamente mais tarde. `
      );
    }
    this.setState({
      loading: false
    });
  };

  async setData() {
    const brazilData = await CoronaApiService.BrazilData();
    console.log('brazilData :', brazilData);
    const countriesData = await CoronaApiService.AllCountries();
    console.log('brazilData :', brazilData);

    // const myDate = new Date(brazilData.updated);
    // console.log('myDate :', myDate);
    // const updatedTime = moment(myDate)
    //   .subtract(3, 'hours')
    //   .format('LLLL');
    // console.log('updatedTime :', updatedTime);
    this.setState({
      casesBrazil: brazilData.cases,
      deathsBrazil: brazilData.deaths,
      flagBrazil: brazilData.countryInfo.flag,
      countriesData
    });
  }

  render() {
    const { navigation } = this.props;
    const {
      casesBrazil,
      cases,
      deathsBrazil,
      deaths,
      recovered,
      flagBrazil,
      countriesData,
      loading
    } = this.state;

    if (loading) {
      return <LoadingComponent />;
    }

    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MultiLevel2', { countrySelected: 'Brazil' })
          }
        >
          <View
            style={{
              height: 100,
              width: width - 20,
              alignSelf: 'center',
              paddingVertical: 10,
              paddingHorizontal: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF',
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { height: 2, width: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3
                },
                android: {
                  elevation: 3
                }
              }),
              marginTop: 16,
              marginBottom: 16,
              borderRadius: 3
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <Image
                source={{ uri: flagBrazil }}
                style={{
                  width: 70,
                  height: 49,
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              />
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                  color: '#FFD900',
                  letterSpacing: 1,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginLeft: 2
                }}
              >
                BRASIL
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '900',
                  color: '#222222',
                  textAlign: 'center',
                  alignSelf: 'center'
                }}
              >
                {casesBrazil}
              </Text>
              <Text
                style={{
                  letterSpacing: 1,
                  fontWeight: '200',
                  textAlign: 'center'
                }}
              >
                CASOS
              </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '900',
                  color: '#222222',
                  textAlign: 'center'
                }}
              >
                {deathsBrazil}
              </Text>
              <Text
                style={{
                  letterSpacing: 1,
                  fontWeight: '200',
                  textAlign: 'center'
                }}
              >
                MORTES
              </Text>
            </View>
            <Icon.MaterialCommunityIcons
              style={{ alignSelf: 'center' }}
              name="chevron-right"
              size={24}
              color="#CCCCCC"
            />
          </View>
        </TouchableOpacity>
        <ScrollView
          contentContainerStyle={gStyle.contentContainer}
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <Text
            style={{
              color: '#888888',
              marginBottom: 36
            }}
          >
            Países com maior número de casos
          </Text>
          {countriesData.map((item, index) => {
            if (item.country === 'USA') {
              item.countryInfo.flag =
                'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/us.png';
            }
            if (item.country === 'Iran') {
              item.countryInfo.flag =
                'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/ir.png';
            }
            if (item.country === 'S. Korea') {
              item.countryInfo.flag =
                'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/kr.png';
            }
            if (item.country === 'UK') {
              item.countryInfo.flag =
                'https://raw.githubusercontent.com/NovelCOVID/API/master/assets/flags/gb.png';
            }
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MultiLevel2', {
                    countrySelected: item.country
                  })
                }
                key={index.toString()}
                style={{
                  marginBottom: 1
                }}
              >
                <View
                  style={{
                    height: 60,
                    paddingVertical: 12.5,
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#FEFEFF',
                    width,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: StyleSheet.hairlineWidth
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around'
                      // flex: 0.3
                    }}
                  >
                    <Image
                      source={{ uri: item.countryInfo.flag }}
                      style={{
                        width: 56,
                        height: 35,
                        borderRadius: 2,
                        overflow: 'hidden'
                      }}
                    />
                    <Text
                      style={{
                        fontWeight: '200',
                        fontSize: 16,
                        color: '#888888',
                        letterSpacing: 0.5,
                        textAlign: 'center',
                        alignSelf: 'center',
                        marginLeft: 20
                      }}
                    >
                      {item.country}
                    </Text>
                  </View>
                  {/* <View>
                  <Text>Casos</Text>
                  <Text>{item.cases}</Text>
                </View>
                <View>
                  <Text>Mortes</Text>
                  <Text>{item.deaths}</Text>
                </View> */}
                  <Icon.MaterialCommunityIcons
                    style={{ alignSelf: 'center' }}
                    name="chevron-right"
                    size={24}
                    color="#CCCCCC"
                  />
                </View>
              </TouchableOpacity>
            );
          })}
          {/* <View style={gStyle.spacer64} />

          <Touch
            onPress={() => navigation.navigate('MultiLevel2')}
            text="Go to level 2"
          /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// MultiBaseScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'Lista de Países'
// };

MultiBaseScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MultiBaseScreen;
