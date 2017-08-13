import Books from '../../assets/yahoo-weather-sample.json';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,
    payload: Books
  };
}
