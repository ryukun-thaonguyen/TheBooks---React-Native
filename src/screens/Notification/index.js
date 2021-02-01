/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { ScrollView, FlatList } from 'react-native';
import notification from '../../components/data/notification';
import Notification from '../../components/notification';
const Notifications = ()=> {
    const [notifications, setbookCategory] = useState(notification);
    console.log('Thông báo: ' + JSON.stringify(notifications));
    return (
        <ScrollView>
            <FlatList
            data={notifications}
            keyExtractor={(item) => item.id}
            renderItem={(item) => <Notification item={item} />}
        />
       </ScrollView>
    );
};
export default Notifications;
