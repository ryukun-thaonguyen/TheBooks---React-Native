/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SideBarItem = (props) => {
    const data = props.item.subCategories;
    console.log('subCategory' + JSON.stringify(data.subCategories));
  return (
    <TouchableOpacity>
      <View style={[styles.dropDownChild]}>
        <Text style={styles.text}>{data.subName}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    text: {
        fontFamily: 'SVN-ProximaNova',
        fontSize: 16,
        flex: 1,
      },
      dropDownChild: {
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10,
        width: 500,
        flexDirection: 'row',
      },
      Check: {
        flex: 1,
        opacity: 0,
      },
});
export default SideBarItem;
