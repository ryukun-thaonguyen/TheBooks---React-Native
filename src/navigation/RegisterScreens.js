/* eslint-disable prettier/prettier */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../redux/store';
import Home from '../screens/Home';
import IntroView from '../screens/Intro';
import Login from '../screens/Authentication/login';
import Register from '../screens/Authentication/register';
import SeeAllBook from '../screens/Home/seeAll';
import Notification from '../screens/Notification';
import Order from '../screens/Order';
import User from '../screens/User';
import Info from '../screens/Info';
import SideBar from './SideBar/SideBar';
import BookDetail from '../screens/BookDetail';

const SCREENS_WITH_REDUX = {
  Home,
  IntroView,
  Login,
  Order,
  User,
  Notification,
  Info,
  SideBar,
  Register,
  SeeAllBook,
  BookDetail
};
const SCREENS = {};

function ReduxProvider(Component, store, persistor) {
  return (props) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
}
function registerScreens(store, persistor) {
  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponent(
      screenName,
      () => ReduxProvider(SCREENS_WITH_REDUX[screenName], store, persistor),
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
    );
  });
}
export default registerScreens;
