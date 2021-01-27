/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import CInput from '../../components/CInput';
import {Colors} from '../../themes/index';

export default function Register() {
  return (
    <ScrollView>
      <View style={styles.formRegister}>
        <Text> wellcome screen Register </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formRegister: {
    marginLeft: 15,
    marginRight: 15,
  },
});
