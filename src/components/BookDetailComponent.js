/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,  Alert, FlatList} from 'react-native';
import  Icon  from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
import CommentComponent from './commentComponent';

const BookDetailComponent = (props) => {
    const data = props.dataDetail;
    console.log('sdsfsdfdsd' + JSON.stringify(data));
    const handleAddToCart = ()=>{
        Alert.alert(
            '',
            'Sách này hiện đã được mượn hết. Bạn có muốn nhận thông báo ngay khi có lại không?',
            [
              {text: 'Nhận thông báo',backgroundColor: colors.warning},
              {text: 'Không, cảm ơn'},
            ],
            { cancelable: false }
        )}
    return (
        <ScrollView>
            <View style={styles.viewDetail}>
                <Image style={styles.image} source={{ uri: data.image}}/>
                <Text style={styles.txtTitle}>{data.name} </Text>
                <Text style={styles.txtAuthor}> {data.author} </Text>
                <View style={styles.viewComment}>
                    <View style={styles.viewRow}>
                        <Icon name="star" size={9} color={colors.warning} />
                        <Icon name="star" size={9} color={colors.warning} />
                        <Icon name="star" size={9} color={colors.warning} />
                        <Icon name="star" size={9} color={colors.warning} />
                        <Icon name="star" size={9} color={colors.warning} />
                    </View>
                    <View style={styles.viewRow}>
                        <Icon name="ic-price" size={9} color={colors.warning} />
                        <Text style={styles.txtPrice}>{data.price}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewCate}>
                <TouchableOpacity style={styles.btnCate}>
                    <Text style={styles.txtCate}>tình cảm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCate}>
                    <Text style={styles.txtCate}>đời sống</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCate}>
                    <Text style={styles.txtCate}>học đường</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewDescription}>
                <Text>{data.description}...<Text style={styles.txtText}>Xem hết</Text></Text>
            </View>
            <View>
                <View style={styles.viewRow}>
                    <Text style={styles.txtTitle}>Sách tương tự</Text>
                    <Text style={styles.txtText}>Xem hết</Text>
                </View>
                <View>
                    {/* <BookItemComponent data={data} /> */}
                </View>
            </View>
            <View>
                <Text style={styles.txtComment}>Nhận xét</Text>
                <View style={styles.viewbtnComment}>
                    <TouchableOpacity style={styles.btnComment}>
                        <Text style={styles.txtText}>Viết nhận xét cho cuốn sách này</Text>
                    </TouchableOpacity>
                </View>
                <CommentComponent/>
                <Text style={styles.txtText}>Xem tất cả nhận xét</Text>
            </View>
            <TouchableOpacity style= {styles.btnAddCart} onPress={()=>handleAddToCart()}>
                <Text style={styles.txtAddCart}>Thêm vào giỏ</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    viewDetail: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 135,
        height: 197,
    },
    txtTitle: {
        fontSize: 16,
        color: '#262626',
    },
    txtAuthor: {
        color: '#ababab',
        fontSize: 12,
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent:'space-between',
    },
    txtPrice: {
        marginLeft: 5,
        color: '#ababab',
    },
    viewComment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:135,
    },
    viewCate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 51,
        marginTop: 10,
    },
    btnCate: {
        width: 70,
        height: 25,
        borderWidth: 1,
        borderColor: '#cecece',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtCate: {
        fontSize: 12,
        color: '#ababab',
    },
    viewDescription: {
        margin: 15,
    },
    btnComment: {
        borderWidth: 1,
        borderColor: colors.textLightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 252,
    },
    viewbtnComment: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    txtComment: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#262626',
        marginBottom: 10,
    },
    txtText: {
        textAlign: 'center',
        color: colors.textLightBlue,
    },
    btnAddCart: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fc9619',
        marginTop: 10,
    },
    txtAddCart: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'SVN-ProximaNovaSemiBold',
    }
});
export default BookDetailComponent;
