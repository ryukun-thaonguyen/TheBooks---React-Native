/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,TextInput,StyleSheet, ScrollView,Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../../themes/Colors';
import DropDownItem from 'react-native-drop-down-item';
import bookCategory from '../../components/data/bookCategory';
const IC_DOWN = require('../../assets/Images/down.png');
const IC_UP = require('../../assets/Images/up.png');
const SideBar = () => {
  const [categoryBook, setbookCategory] = useState(bookCategory);

  // const categoryBook = useSelector((state) => state.category);
  // console.log('Category: ' + JSON.stringify(categoryBook));
  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <TextInput placeholder={'Tìm thể loại'} />
        <Icon name="ic-search" size={20} color={'#5f5f5f'}/>
      </View>
      <ScrollView>
        {categoryBook ? categoryBook.map((param, i) => {
          return (
            <DropDownItem
              key={i}
              style={[styles.dropDownItem, styles.border]}
              contentVisible={true}
              invisibleImage={IC_UP}
              visibleImage={IC_DOWN}
              header={
                <View style={[styles.header, styles.dropDown]}>
                  <Text style={styles.text}>{param.name}</Text>
                </View>
              } />
          );
        })
         : null}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    flex: 1,
    marginBottom: 5,
  },
  dropDown: {
    marginLeft: 20,
    marginRight: 10,
  },
  dropDownItem: {
    marginBottom: 15,
    marginTop: 15,
  },
  text: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 16,
  },

  border: {
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
  },
});
export default SideBar;
