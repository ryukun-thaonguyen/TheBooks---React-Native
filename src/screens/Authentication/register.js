/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import CInput from '../../components/CInput';
import {Colors} from '../../themes/index';
import NavigationUtils from '../../navigation/Utils';
import { useSelector, useDispatch } from 'react-redux';
import registerType from '../../redux/RegisterRedux/actions';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const cancel = () =>{
    NavigationUtils.startLogin();
  };

  const dispatch = useDispatch();

  const registerUser = () =>{
    let dataUser = {
      firstName: 'Azura',
      lastName: name,
      phoneNumber: phone,
      email: email,
      password: password,
      address: 'Que Lam, Nong Son',
      gender: 0,
      dateOfBirth: '10-10-2000',
    };
    dispatch(registerType.userRegister(dataUser));
  };
  return (
    <ScrollView>
      <View style={styles.formRegister}>
        <View style={styles.headersFormRegister}>
          <TouchableOpacity onPress={()=> cancel()}>
            <Icon name="ic-delete" size={22} color = {Colors.blackLight} style={styles.iconHeaderFormRegister}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Đăng Ký </Text>
        </View>
        <View style={styles.formInputRegister}>
          <CInput title={'Tên người dùng*'} subTitle = {''} pass={false} onChangeText={setName}/>
          <CInput title={'Email*'} subTitle = {''} pass={false} onChangeText={setEmail}/>
          <CInput title={'Số điện thoại*'} subTitle = {''} pass={false} onChangeText={setPhone}/>
          <CInput title={'Tên tài khoản*'} subTitle = {''} pass={false} onChangeText={setUsername}/>
          <CInput title={'Mật khẩu*'} subTitle = {''} pass={true} onChangeText={setPassword}/>
          <CInput title={'Xác nhận mật khẩu*'} subTitle = {''} pass={true} onChangeText={setConfirmPassword} />
        </View>
        <View style={styles.functionFormRegisters}>
          <TouchableOpacity style={styles.buttonFormRegisters} onPress={()=> cancel()}>
            <Text style={[styles.textButtonFormRegisters, {color: Colors.darkGray}]}> Đăng Nhập </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonFormRegisters,{backgroundColor: Colors.lightBlue}]} onPress={() => registerUser()}>
            <Text style={[styles.textButtonFormRegisters, {color: Colors.white}]}> Đăng Ký </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerFormRegister}>
            <Text>Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý </Text>
            <Text> với các <Text style={{color: Colors.primary}}>điều khoản quy định</Text> của chúng tôi </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formRegister: {
    marginLeft: 15,
    marginRight: 15,
  },
  headersFormRegister: {
    marginTop: 24,
    flexDirection: 'row',
  },
  iconHeaderFormRegister: {
    marginTop: 9,
  },
  headerTitle: {
    fontSize: 25,
    color: Colors.blackLight,
    textAlign: 'center',
    marginLeft: Dimensions.get('window').width / 3 - 20,
    fontWeight: 'bold',
  },
  formInputRegister: {
    marginTop: 10,
  },

  functionFormRegisters: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFormRegisters: {
    width: Dimensions.get('screen').width / 3,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderColor: Colors.lightBlue,
    borderRadius: 5,
  },
  textButtonFormRegisters: {
    fontSize: 15,
    padding: 10,
    textAlign: 'center',
  },
  footerFormRegister: {
    marginBottom: 14,
    marginTop: 5,
  },
});
