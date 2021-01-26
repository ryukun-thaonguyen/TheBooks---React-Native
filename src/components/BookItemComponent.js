/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
const BookItemComponent = (props) =>{
    const data = props.item;
    return (
         <View style={styles.viewBookContent}>
            <TouchableOpacity>
                <Image source={{uri: data.item.image}} style={styles.image} />
                <Text style={styles.txtName}>{data.item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txtAuthor}>{data.item.author}</Text>
            </TouchableOpacity>
            <View style={styles.viewComment} >
                <View style={styles.viewStar} >
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                </View>
                <Text style={styles.txtComment}>{data.item.comment} đánh giá</Text>
            </View>
         </View>
    );
};
const styles = StyleSheet.create({
    viewBookContent: {
        marginLeft: 15,
        flex: 1,
        marginTop: 7.5,
    },
    image: {
        height: 163.5,
        width: 112.5,
    },
    txtName: {
        fontSize: 13,
        fontFamily: 'Cabin-Regular',
    },
    txtAuthor: {
        fontSize: 13,
        fontFamily: 'SVN-ProximaNovaLight',
        color: '#ababab',
    },
    viewComment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewStar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtComment: {
        fontSize: 9,
        fontFamily: 'Cabin-Regular',
        color: '#ababab',
    },
});
export default BookItemComponent;
