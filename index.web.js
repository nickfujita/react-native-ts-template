'use strict'

import { AppRegistry } from 'react-native';
import App from './build/index.js'

AppRegistry.registerComponent('ReactNativeTemplate', () => App)
AppRegistry.runApplication('ReactNativeTemplate', {
  rootTag: document.getElementById('react-root')
});
