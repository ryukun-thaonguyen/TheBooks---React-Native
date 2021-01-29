/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ListBookComponent from '../../components/ListBookComponent';
const Home = ()=> {
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'sideBar') {
      Navigation.mergeOptions('sideBar', {
        sideMenu: {
          left: {
            visible: true,
          }, 
        },
      })
    }
  });
    return (
      <ScrollView>
        <ListBookComponent />
       </ScrollView>
    );
};

export default Home;
