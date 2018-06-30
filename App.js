import { createStackNavigator } from 'react-navigation';
import HomeScreen from './component/HomeScreen';
import AboutScreen from './component/AboutScreen';

export default createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: 'Home',
  }
);