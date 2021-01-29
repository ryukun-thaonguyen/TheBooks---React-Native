/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/thebook-appicon';
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

const startMainContent = () => {
  Promise.all([
    Icon.getImageSource('ic-menu', 20),
    Icon.getImageSource('ic-search', 20),
  ]).then(([menu, search]) => {
  Navigation.setRoot({
    root: {
      stack: {
        id:"root",
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  visible: true,
                  leftButtons: [
                    {
                      icon: menu,
                    },
                  ],
                  rightButtons: [
                    {
                      icon: search,
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
});
};
const startBookDetail = (data) => {
  Promise.all([
    Icon.getImageSource('ic-back', 25),
    Icon.getImageSource('ic-like-pre', 25),
  ]).then(([back, heart])=>{
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'BookDetail',
              passProps: {
                data: data,
              },
              options: {
                topBar: {
                  visible: true,
                  leftButtons: [
                    {
                      id: 'back',
                      icon: back,
                    },
                  ],
                  rightButtons: [
                    {
                      id: 'heart',
                      icon: heart,
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
});
}

const startIntro = () => {
  console.log('start');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'IntroView',
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
};
const startLogin = () => {
  console.log('form Login');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
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
};
const startRegister = () => {
  console.log('form Register');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Register',
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
};

const startSeeAllBook = (data) => {
  Promise.all([
    Icon.getImageSource('ic-back', 25),

  ]).then(([back])=>{
  console.log('form SeeAllBook');
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SeeAllBook',
              passProps: {
                data: data,
              },
              options: {
                topBar: {
                  visible: true,
                  leftButtons: [
                    {
                      id: 'back',
                      icon: back,
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });
});
};
const NavigationUtils = {startMainContent, startIntro, startLogin, startRegister, startBookDetail, startSeeAllBook};
export default NavigationUtils;
