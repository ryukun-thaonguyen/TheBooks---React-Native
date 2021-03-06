/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes/index';
import bookItem from '../../components/data/bookItem';
import BookItemComponent from '../../components/BookItemComponent';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Navigation } from 'react-native-navigation';

export default function SeeAllBook(props) {
  const [bookDataType, setbookData] = useState(props.data);
  return (
    <ScrollView>
      <View style={styles.containViewAll}>
        <Text style={styles.titleBookType}> Đọc nhiều </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containViewAll: {
    marginLeft: 12,
    marginRight: 19,
    marginTop: 20,
  },

  titleBookType: {
    marginLeft: 8,
    marginTop: 15,
    fontSize: 19,
    color: Colors.black,
  },

  viewItem: {
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: Dimensions.get('screen').width - 30,
    flexWrap: 'wrap',

  },
});
