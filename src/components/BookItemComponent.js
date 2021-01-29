/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
import { NavigationUtils } from '../navigation';
const BookItemComponent = (props) =>{
    var data = props.item.item;
    if (!data){
        data = props.item;
    }
    const handleBookDetail = (dataDetail) =>{
        NavigationUtils.startBookDetail(dataDetail);
    };
    return (
         <View style={[styles.viewBookContent, props.thisStyle && props.thisStyle]}>
            <TouchableOpacity onPress = {()=>handleBookDetail(data)}>
                <Image source={{uri: data.image}} style={styles.image} />
                <Text style={styles.txtName}>{data.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.txtAuthor}>{data.author}</Text>
            </TouchableOpacity>
            <View style={styles.viewComment} >
                <View style={styles.viewStar} >
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                    <Icon name="star" size={9} color={colors.warning} />
                </View>
                <Text style={styles.txtComment}>{data.comment} đánh giá</Text>
            </View>
         </View>
    );
};
const styles = StyleSheet.create({
    viewBookContent: {
        marginTop: 7.5,
        width: Dimensions.get('screen').width / 2 - 30,
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
        height: 170,
        width: 155,
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
        width: 155,
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
