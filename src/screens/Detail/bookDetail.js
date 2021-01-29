/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BookDetailComponent from '../../components/BookDetailComponent';
import { Navigation } from 'react-native-navigation';
import  NavigationUtils  from '../../navigation/Utils';
const BookDetail = (props) => {
  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'back') {
      console.log('123');
      NavigationUtils.startMainContent();
    }
  });
  return (
    <View>
      <View>
        <BookDetailComponent dataDetail = {props.data} />
      </View>
    </View>
  );
};
export default BookDetail;
