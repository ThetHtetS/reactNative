/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import RecoilApp from "./RecoilRoot";
AppRegistry.registerComponent(appName, () => RecoilApp);
