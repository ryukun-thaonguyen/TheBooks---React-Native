/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
const CommentComponent = () => {
    return (
        <View>
            <View style={styles.viewRow}>
                <View style={styles.viewRow}>
                    <Image style={styles.imageUser} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8qZhU1Txsawv-erzdH57-hZS-qBjnIGcHQ&usqp=CAU'}}/>
                        <View style={styles.viewUser}>
                            <Text style={styles.txtUser}>Kim Dung</Text>
                            <View style={styles.viewStar}>
                                <Icon name="star" size={9} color={colors.warning} />
                                <Icon name="star" size={9} color={colors.warning} />
                                <Icon name="star" size={9} color={colors.warning} />
                                <Icon name="star" size={9} color={colors.warning} />
                                <Icon name="star" size={9} color={colors.warning} />
                            </View>
                        </View>
                </View>
                <View style={styles.viewRow}>
                    <Icon name="ic-edit-comment" size={14} color={'#5f5f5f'} style={styles.iconEdit} />
                    <Icon name="ic-trash" size={14} color={'#5f5f5f'} />
                </View>
            </View>
            <View>
                <Text style={styles.txtContent}>Sách hay cần có thêm nhiều đầu sách như vậy hơn nữa để tuổi trẻ bớt bị tẩy não. Ghi hoài mà nó không đủ 3 dòng, mệt</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imageUser: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    viewRow: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent:'space-between',
    },
    viewStar: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: -5,

    },
    viewUser: {
        marginLeft: 10,
    },
    txtUser: {
        margin: 10,
        fontFamily: 'SVN-ProximaNova',
        fontSize: 12,
        color: '#262626',
        marginTop: 0,
    },
    txtContent: {
        marginHorizontal: 15,
    },
    iconEdit: {
        marginRight: 12,
    },
});
export default CommentComponent;
