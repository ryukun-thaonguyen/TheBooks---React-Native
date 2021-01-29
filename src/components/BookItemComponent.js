/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
import { NavigationUtils } from '../navigation';
const BookItemComponent = (props) =>{
    const data = props.item;
    const handleBookDetail = (dataDetail) =>{
        NavigationUtils.startBookDetail(dataDetail);
    };
    return (
         <View style={styles.viewBookContent}>
            <TouchableOpacity onPress={()=> handleBookDetail(data.item)}>
                <View elevation={4} style={styles.borderImage}>
                    <Image elevation={4} source={{uri: data.item.image}} style={styles.image} />
                </View>
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
                <Text style={styles.txtComment}>{data.item.comment}đánh giá</Text>
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
    borderImage: {
        borderRadius: 1,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    image: {
        height: 163.5,
        width: 112.5,
    },
    txtName: {
        marginTop: 7.5,
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
