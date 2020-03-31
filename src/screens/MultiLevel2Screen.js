import React from 'react';
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
import { gStyle } from '../constants';
import fonts from '../constants/fonts';
import CoronaApiService from '../services/CoronaApiService';

// components
import NavigationBack from '../components/NavigationBack';
import TileData from '../components/TileDataComponent';
import LoadingComponent from '../components/LoadingComponent';

class MultiLevel2Screen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <NavigationBack navigation={navigation} />,
    headerRight: <View style={{ flex: 1 }} />,
    headerTitleStyle: gStyle.headerTitleStyle,
    title:
      navigation.getParam('countrySelected', 'Dados do país') === 'Brazil'
        ? 'Brasil'
        : navigation.getParam('countrySelected', 'Dados do país')
  });

  constructor(props) {
    super(props);
    this.state = {
      cases: '',
      todayCases: '',
      deaths: '',
      todayDeaths: '',
      recovered: '',
      active: '',
      critical: '',
      casesPerOneMillion: '',
      deathsPerOneMillion: '',
      countriesData: {},
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      await this.setData();
    } catch (error) {
      console.log('error:', error);
      Alert.alert(
        `Muitas requisições simultâneas. Tente novamente mais tarde. `
      );
    }

    this.setState({
      loading: false
    });
  };

  async setData() {
    const { navigation } = this.props;
    const country = navigation.getParam('countrySelected', null);
    console.log('country :', country);
    const countriesData = await CoronaApiService.CountryData(
      country.toLowerCase()
    );
    console.log('countriesData :', countriesData);

    this.setState({
      countriesData
    });
  }

  // async setData() {
  //   const brazilData = await CoronaApiService.BrazilData();
  //   console.log('brazilData :', brazilData);
  //   const countriesData = await CoronaApiService.AllCountries();
  //   console.log('brazilData :', brazilData);

  //   // const myDate = new Date(brazilData.updated);
  //   // console.log('myDate :', myDate);
  //   // const updatedTime = moment(myDate)
  //   //   .subtract(3, 'hours')
  //   //   .format('LLLL');
  //   // console.log('updatedTime :', updatedTime);
  //   this.setState({
  //     casesBrazil: brazilData.cases,
  //     deathsBrazil: brazilData.deaths,
  //     flagBrazil: brazilData.countryInfo.flag,
  //     countriesData
  //   });
  // }

  render() {
    const { navigation } = this.props;
    const {
      // cases,
      // todayCases,
      // deaths,
      // todayDeaths,
      // recovered,
      // active,
      // critical,
      // casesPerOneMillion,
      // deathsPerOneMillion,
      countriesData,
      loading
    } = this.state;

    if (loading) {
      return <LoadingComponent />;
    }

    return (
      <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <ScrollView
          contentContainerStyle={[gStyle.contentContainer, { paddingTop: 32 }]}
          style={{ paddingTop: 16 }}
        >
          <Image
            source={{ uri: countriesData.countryInfo.flag }}
            style={{
              width: 168,
              // height: 'auto',
              resizeMode: 'contain',
              height: 105,
              borderRadius: 2,
              overflow: 'hidden'
            }}
          />
          <View style={gStyle.spacer16} />
          <Text
            style={[
              {
                fontFamily: fonts.comfortaaRegular,
                fontSize: 18,
                letterSpacing: 1.5
              }
            ]}
          >
            {`${countriesData.country}`}
          </Text>
          <View style={gStyle.spacer16} />
          <View style={gStyle.spacer16} />
          <TileData label="Casos" dataType={countriesData.cases} />
          <TileData label="Casos Hoje" dataType={countriesData.todayCases} />
          <View style={gStyle.spacer16} />
          <TileData label="Mortes" dataType={countriesData.deaths} />
          <TileData label="Mortes Hoje" dataType={countriesData.todayDeaths} />
          <View style={gStyle.spacer16} />
          <TileData label="Ativos" dataType={countriesData.active} />
          <TileData label="Recuperados" dataType={countriesData.recovered} />
          <TileData label="Críticos" dataType={countriesData.critical} />
          <View style={gStyle.spacer16} />
          <TileData
            label="Casos por Milhão"
            dataType={countriesData.casesPerOneMillion}
          />
          <TileData
            label="Mortes por Milhão"
            dataType={countriesData.deathsPerOneMillion}
          />
          <View style={gStyle.spacer64} />
        </ScrollView>
      </View>
    );
  }
}

// MultiLevel2Screen.navigationOptions = ({ navigation }) => ({
//   headerLeft: <NavigationBack navigation={navigation} />,
//   headerRight: <View style={{ flex: 1 }} />,
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'Level 2'
// });

export default MultiLevel2Screen;
