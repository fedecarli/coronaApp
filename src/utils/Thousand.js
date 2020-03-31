export default class Thousand {
  static separator(num) {
    const number = num.toString();
    if (number.length === 4) {
      return `${number.substr(0, 1)}.${number.substring(1)}`;
    }
    if (number.length === 5) {
      return `${number.substr(0, 2)}.${number.substring(2)}`;
    }
    if (number.length === 6) {
      return `${number.substr(0, 3)}.${number.substring(3)}`;
    }
    if (number.length < 4) {
      return number;
    }
  }
}
