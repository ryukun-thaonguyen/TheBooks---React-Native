/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {ImagesIntro} from '../../themes/index';
import Swiper from 'react-native-swiper';
import NavigationUtils from '../../navigation/Utils';

export default function IntroView() {
    const DATAINTROS = [
        {
          id: 1,
          imageSource: ImagesIntro.intro1,
          title: 'Tìm sách yêu thích',
          subTitle:
            'Rất nhiều cuốn sách hay và chương trình\n thú vị được tích hợp trên hệ thống.',
          startButton: false,
        },
        {
          id: 2,
          imageSource: ImagesIntro.intro2,
          title: 'Lưu vào giỏ và đặt sách',
          subTitle:
            'Sách sẽ được giữ trong 2 giờ đồng hồ\n Hãy chắc chắn là bạn đến nhận kịp giờ.',
          startButton: false,
        },
        {
          id: 3,
          imageSource: ImagesIntro.intro3,
          title: 'Tận hưởng cuốn sách',
          subTitle:
            'Chọn một nơi yêu thích và tận hưởng\n cuốn sách mà yêu thích thôi nào.',
          startButton: true,
        },
      ];
    const loginForm = () =>{
        NavigationUtils.startLogin();
    }
  return (
    <View style={styles.homeIntro}>
        <Swiper loop = {false} dotStyle = {styles.styleDots} activeDotStyle = {styles.styleDots} style={styles.slideIntro}>
            {DATAINTROS.map((item , index) => {
                return (
                    <View style={styles.itemIntro} key={index}>
                        <Image source={item.imageSource} style={styles.imageIntro}/>
                        <Text style={styles.titleIntro}>{item.title}</Text>
                        <Text style={styles.subTitleIntro}>{item.subTitle}</Text>
                        {item.startButton === true ? (
                            <TouchableOpacity style={styles.buttonStart} onPress={() => loginForm()}>
                                <Text style={styles.textButton}> Bắc Đầu </Text>
                            </TouchableOpacity>
                        ) : null }
                    </View>
                );
            })}
        </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
    homeIntro: {
        flex: 1,
        marginLeft: 21,
        marginRight: 21,
    },
    styleDots: {
        marginBottom: Dimensions.get('screen').height / 3.9,
    },
    itemIntro: {
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    imageIntro: {
        height: 230,
        width: 300,
    },
    titleIntro: {
        marginTop: 23,
        fontSize: 16,
        color: '#262626',
    },
    subTitleIntro: {
        marginTop: 12,
        color: '#7f7f7f',
        textAlign: 'center',
        fontSize: 14,
    },
    buttonStart: {
        marginTop: 61,
        paddingTop: 7,
        paddingLeft: 29,
        paddingRight: 29,
        paddingBottom: 8,
        borderRadius: 3,
        backgroundColor: '#1d9dd8',
        alignItems: 'center',
    },
    textButton:{
        color: '#ffffff',
        fontSize: 13,
        textAlign: 'center',
    },
});
