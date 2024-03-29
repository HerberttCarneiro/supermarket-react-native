import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import ProductForm from '../screens/product/form';
import ProductView from '../screens/product/view';
import ProductIndex from '../screens/product/index';

// import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  ProductIndex,
  ProductForm,
  ProductView,
}));