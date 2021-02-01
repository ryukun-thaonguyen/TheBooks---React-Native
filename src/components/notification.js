/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import colors from '../themes/Colors';
const Notification = (props)=> {
    const data = props.item.item;
    return (
        <View style={styles.container}>
            <View style={styles.viewRow}>
                {
                    (data.title == "Thông báo") ?(
                    <View style={[styles.viewIcon,{backgroundColor: '#eb6f6f'}]}>
                    <Icon name= {data.image} size={15} color={colors.white} style={styles.icon}/>
                </View>
                    ) : (data.title == "Mượn sách") ? (
                        <View style={[styles.viewIcon,{backgroundColor: '#7ed321'}]}>
                            <Icon name= {data.image} size={15} color={colors.white} style={styles.icon}/>
                        </View>
                    ) : (
                        <View style={[styles.viewIcon,{backgroundColor: '#f5a623'}]}>
                            <Icon name= {data.image} size={15} color={colors.white} style={styles.icon}/>
                        </View>
                    )
                }
                <View>
                    <View style={[styles.viewRow, styles.txtContent]}>
                        <Text style={styles.txtTitle}>{data.title}</Text>
                        <Text style={styles.txtTime}>{data.time}</Text>
                    </View>
                    <Text style={styles.txtContent}>{data.content}</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtTime: {
        marginRight: 20,
        fontSize: 10,
        color: '#ababab',
    },
    txtContent: {
        paddingHorizontal: 15,
        color: '#7f7f7f',
    },
    txtTitle: {
        fontFamily: 'SVN-ProximaNova',
        fontSize: 14,
        color:'#4a4a4a',
    },
    viewIcon: {
        width: 30,
        height:30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Notification;
