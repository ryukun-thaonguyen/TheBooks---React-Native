/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import BookDetailComponent from '../../components/BookDetailComponent';
import { Navigation } from 'react-native-navigation';
import  NavigationUtils  from '../../navigation/Utils';
const BookDetail = (props) => {
  return (
        <BookDetailComponent dataDetail = {props.data} />
  );
};
export default BookDetail;
