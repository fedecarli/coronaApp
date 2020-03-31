import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, Alert } from 'react-native';
import { useTheme } from 'react-navigation';
import moment from 'moment';
import { gStyle } from '../constants';
import fonts from '../constants/fonts';
import CoronaApiService from '../services/CoronaApiService';
import 'moment/locale/pt-br';

// components
import Touch from '../components/Touch';
import TileData from '../components/TileDataComponent';
import LoadingComponent from '../components/LoadingComponent';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: gStyle.headerTitleStyle,
    title: 'Mundo'
  };

  constructor(props) {
    super(props);
    this.state = {
      cases: '',
      deaths: '',
      recovered: '',
      updatedAt: '',
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      const worldData = await CoronaApiService.WorldData();
      await this.setData(worldData);
    } catch (error) {
      // console.log('error:', error);
      Alert.alert(
        `Muitas requisições simultâneas. Tente novamente mais tarde. `
      );
    }
    // this.setState({
    //   loading: false
    // });
  };

  async setData(worldData) {
    console.log('worldData :', worldData);
    const myDate = new Date(worldData.updated);
    console.log('myDate :', myDate);
    const updatedTime = moment(myDate)
      .subtract(3, 'hours')
      .format('LLLL');
    console.log('updatedTime :', updatedTime);
    this.setState({
      cases: worldData.cases,
      deaths: worldData.deaths,
      recovered: worldData.recovered,
      updatedAt: updatedTime,
      loading: false
    });
  }

  render() {
    const { navigation } = this.props;
    const { cases, deaths, recovered, updatedAt, loading } = this.state;

    if (cases && loading) {
      return <LoadingComponent />;
    }
    return (
      <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <ScrollView
          contentContainerStyle={[gStyle.contentContainer, { paddingTop: 32 }]}
          style={{ paddingTop: 32 }}
        >
          <Text
            style={[
              {
                fontFamily: fonts.comfortaaRegular,
                fontSize: 18,
                letterSpacing: 1.5
              }
            ]}
          >
            DADOS DO CORONA VÍRUS NO MUNDO
          </Text>

          <View style={gStyle.spacer16} />
          <View style={gStyle.spacer16} />
          <TileData label="Casos" dataType={cases} />
          <TileData label="Mortes" dataType={deaths} />
          <TileData label="Recuperados" dataType={recovered} />
          {/* <View style={gStyle.spacer16} /> */}

          <View style={{ marginTop: 32, marginBottom: 32 }}>
            <Text
              style={{
                color: '#999',
                fontWeight: '200',
                fontSize: 13,
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              {`última atualização:\n${updatedAt}`}
            </Text>
          </View>

          <View style={gStyle.spacer16} />
          <View style={gStyle.spacer16} />

          <Touch
            onPress={() => navigation.navigate('MultiBase')}
            text="Ver dados por país"
          />

          {/* <Touch
            onPress={() => screenProps.updateTheme('light')}
            text="Light theme"
          />
          <Touch
            onPress={() => screenProps.updateTheme('dark')}
            text="Dark theme"
          /> */}
        </ScrollView>
      </View>
    );
  }
}

// HomeScreen.navigationOptions = {
//   headerTitleStyle: gStyle.headerTitleStyle,
//   title: 'MUNDO'
// };

HomeScreen.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default HomeScreen;
