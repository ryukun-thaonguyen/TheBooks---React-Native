import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
const SIDE_MENU_ID = 'sideMenu';
const SCREEN_OVERLAY = {
  android: 'overCurrentContext',
  ios: 'overFullScreen',
};

export const defaultBottomTab = {
  textColor: 'grey',
  iconColor: 'grey',
  selectedIconColor: 'black',
  selectedTextColor: 'black',
  iconInsets: {
    top: 5,
    left: 0,
    bottom: -5,
    right: 0,
  },
  fontSize: 10,
  drawBehind: true,
  disableIconTint: true, // set true if you want to disable the icon tinting
  disableSelectedIconTint: true,
};

export const defaultTopBar = {
  visible: true,
  drawBehind: false,
  hideOnScroll: false,
  noBorder: true, // no border for ios
  elevation: 0, // no border for android
  title: {
    alignment: 'center',
    fontSize: 16,
  },
  background: {
    color: 'white',
  },
};

const startMainContent=()=> {
  console.log("start");
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}
const NavigationUtils={startMainContent}
export default NavigationUtils;
