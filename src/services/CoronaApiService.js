// import { Alert } from 'react-native';
import axios from 'axios';

class CoronaApiService {
  static async WorldData() {
    return axios
      .get(`https://corona.lmao.ninja/all`)
      .then(response => {
        console.log('response.data', response.data);
        return response.data;
      })
      .catch(error => console.error(error));
  }

  static async AllCountries() {
    return axios
      .get(`https://corona.lmao.ninja/countries`)
      .then(response => {
        console.log('response.data', response.data);
        return response.data;
      })
      .catch(error => console.error(error));
  }

  static async CountryData(country) {
    return axios
      .get(`https://corona.lmao.ninja/countries/${country}`)
      .then(response => {
        console.log('response.data', response.data);
        return response.data;
      })
      .catch(error => console.error(error));
  }

  static async BrazilData() {
    return axios
      .get(`https://corona.lmao.ninja/countries/brazil`)
      .then(response => {
        console.log('response.data', response.data);
        return response.data;
      })
      .catch(error => console.error(error));
  }
}

export default CoronaApiService;
