/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import CInput from '../../components/CInput';
import {Colors} from '../../themes/index';

export default function Login() {
  const [userName, setUsername] = useState('');
  const [passWord, storePassword] = useState('');
  const clickTest = () =>{
    alert('username: ' + userName + ' || password: ' + passWord);
  };
  return (
    <ScrollView>
      <View style={styles.formLogin}>
        <View style={styles.headersFormLogin}>
          <TouchableOpacity>
            <Icon name="ic-delete" size={22} color = {Colors.blackLight} style={styles.iconHeaderFormLogin}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Đăng Nhập </Text>
        </View>
        <View style={styles.formInputLogin}>
          <CInput title={'Tài Khoản'} pass={false} onChangeText={setUsername}/>
          <CInput title={'Mật Khẩu'} pass={true} onChangeText={storePassword}/>
        </View>
        <View style={styles.functionFormLogin}>
          <TouchableOpacity style={[styles.buttonFormLogin,{backgroundColor: Colors.lightBlue}]} onPress={() => clickTest()}>
            <Text style={[styles.textButtonFormLogin, {color: Colors.white}]}> Đăng Nhập </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFormLogin}>
            <Text style={[styles.textButtonFormLogin, {color: Colors.darkGray}]}> Đăng Ký </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonResetPassword}>
          <Text style={[styles.textButtonFormLogin, {color: Colors.darkGray}]}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formLogin: {
    marginLeft: 15,
    marginRight: 15,
  },
  headersFormLogin: {
    marginTop: 24,
    flexDirection: 'row',
  },
  iconHeaderFormLogin: {
    marginTop: 9,
  },
  headerTitle: {
    fontSize: 25,
    color: Colors.blackLight,
    textAlign: 'center',
    marginLeft: Dimensions.get('window').width / 3 - 40,
    fontWeight: 'bold',
  },
  formInputLogin: {
    marginTop: 10,
  },
  functionFormLogin: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFormLogin: {
    width: Dimensions.get('screen').width / 3,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: Colors.lightBlue,
    borderRadius: 5,
  },
  textButtonFormLogin: {
    fontSize: 15,
    padding: 10,
    textAlign: 'center',
  },
  buttonResetPassword: {
    marginTop: 4,
  },
});
