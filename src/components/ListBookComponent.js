/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import colors from '../themes/Colors';
import bookItem from './data/bookItem';
import ChildFlatList from './ChildFlatList';
const ListBookComponent = () => {
    const [bookData, setbookData] = useState(bookItem);
    return (
        <View style={styles.container}>
            <FlatList
               data={bookData}
               keyExtractor={(item)=>item.id}
               renderItem={({item,index})=><ChildFlatList item={item} />
               }
            />
        </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
      fontSize: 16,
  },
  readMore: {
      fontSize: 12,
      color: colors.primary,
  },
});
export default ListBookComponent;
