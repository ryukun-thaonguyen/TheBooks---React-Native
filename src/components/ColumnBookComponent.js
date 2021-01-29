/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import BookItemComponent from './BookItemComponent';
import bookItem from './data/bookItem';
const ColumnBookComponent = (props)=> {
    return (
        <View>
            <FlatList
                data={props.item.data}
                keyExtractor={(d) => d.id}
                renderItem={(d) => <BookItemComponent item={d} />}
            />
        </View>
    );
};
export default ColumnBookComponent;
