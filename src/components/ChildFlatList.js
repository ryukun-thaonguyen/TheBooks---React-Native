/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import BookItemComponent from './BookItemComponent';
import colors from '../themes/Colors';
const ChildFlatList = (props)=> {
  // const data = props.item;
  // console.log(data);
  return (
    <View>
        <View style={styles.headerTitle}>
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.readMore}>Xem hết</Text>
        </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.item.data}
        keyExtractor={(d) => d.id}
        renderItem={(d) => <BookItemComponent item={d} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    margin: 15,
    alignItems: 'center',
},title: {
  fontSize: 16,
},
readMore: {
  fontSize: 12,
  color: colors.primary,
},
});
export default ChildFlatList;
