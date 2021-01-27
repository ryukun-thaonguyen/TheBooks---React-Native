/* eslint-disable prettier/prettier */
import React,  { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Colors} from '../themes/index';
import Icon from 'react-native-vector-icons/thebook-appicon';

export default function CInput(props) {
    const [eyes, setEyes] = useState(true);
  return (
    // <Icon name="ic-delete" size={22} color = {Colors.blackLight} style={styles.iconHeaderFormLogin}/>
    <View style={styles.formInput}>
        <Text style={styles.titleInput}>{props.title}</Text>
            {props.pass === true ? (
                <View style={styles.inputPassword}>
                    <TextInput style={styles.tabInputPass} placeholder = {'Nhập ' + props.title} secureTextEntry={eyes} onChangeText={(text) => props.onChangeText(text)}/>
                    <TouchableOpacity onPress={() => setEyes(!eyes)}>
                    {
                        eyes ? <Icon name="ic-hide-password" size = {25} style={{marginTop: 8}}/> : <Icon name = "ic-show-password" size = {25} style={{marginTop: 8}}/>
                    }
                    </TouchableOpacity>
                </View>
            ) :  <TextInput style={styles.tabInput} placeholder = {'Nhập ' + props.title} onChangeText={(text) => props.onChangeText(text)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
    formInput: {
        marginTop: 20,
    },
    titleInput: {
        fontSize: 14,
        fontFamily: 'SVN-ProximaNova',
        color: Colors.greyishBrown,
    },
    tabInput: {
        marginTop: 7,
        height: 42,
        borderWidth: 1,
        borderColor: Colors.darkGray,
        width: Dimensions.get('screen').width - 30,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 16,
    },
    tabInputPass: {
        height: 42,
        fontSize: 16,
        paddingLeft: 10,
        paddingTop: 8,
        paddingBottom: 8,
        width: Dimensions.get('screen').width - 70,
    },
    inputPassword: {
        marginTop: 7,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.darkGray,
    },
});
