/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import {useDispatch} from 'react-redux';
import CategoryTypes from '../../redux/CategoryRedux/actions';
import ListBookComponent from '../../components/ListBookComponent';
const Home = ()=> {
  const dispatch = useDispatch();
  dispatch(CategoryTypes.GET_ALL_CATEGORIES);
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'sideBar') {
      Navigation.mergeOptions('sideBar', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  });
    return (
      <ScrollView>
        <ListBookComponent />
       </ScrollView>
    );
};

export default Home;
