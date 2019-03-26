import { createStackNavigator } from 'react-navigation';

import ProductForm from '../screens/product/ProductForm';
import ProductView from '../screens/product/ProductView';
import ProductIndex from '../screens/product/index';

const Routes = createStackNavigator({
  ProductForm,
  ProductView,
  ProductIndex
});

export default Routes;