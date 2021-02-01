/* eslint-disable prettier/prettier */
export default NotificationTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Notification',
      children: [
        {
          component: {
            name: 'Notification',
            options: {
              topBar: {
                title: {
                  text:'Thông báo',
                },
              },
              bottomTab: {
                icon: listIcon[0],
                selectedIconColor: selectedIconColor,
                animate: false,
              },
            },
          },
        },
      ],
    },
  };
};