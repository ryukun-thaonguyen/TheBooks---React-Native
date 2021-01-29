/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from '../themes';
import HomeTab from './Tabs/HomeTab';
import InfoTab from './Tabs/InfoTab';
import NotificationTab from './Tabs/NotificationTab';
import OrderTab from './Tabs/OrderTab';
import UserTab from './Tabs/UserTab';
const pushScreen=(stackId, componentName)=>{
  Navigation.push(stackId,{component:{name:componentName}})
}
const popScreen=(stackId)=>{
  Navigation.pop(stackId)
}
const startRoot=()=>{
  Promise.all([
    Icon.getImageSource('ic-menu', 20),
    Icon.getImageSource('ic-search', 20),
    Icon.getImageSource('ic-book',20),
    Icon.getImageSource('ic-order',20),
    Icon.getImageSource('ic-profile-1',20),
    Icon.getImageSource('ic-notification-1',20),
    Icon.getImageSource('ic-library-1',20)
  ])
  .then(([ic_menu,ic_search,ic_book,ic_orders,ic_profile,ic_notifications,ic_library])=>{
    console.log("start root");
    Navigation.setRoot({
      root:{
        sideMenu:{
          left:{
            component:{
              name:"SideBar",
              id:"Sidebar"
            }
          },
          center:{
            bottomTabs:{
              id:"TABS",
              options: {
                bottomTabs: {
                  animate: true,
                },
              },
              children:[
                HomeTab([ic_menu,ic_search,ic_book],Colors.primary),
                OrderTab([ic_orders],Colors.primary),
                UserTab([ic_profile],Colors.primary),
                NotificationTab([ic_notifications],Colors.primary),
                InfoTab([ic_library],Colors.primary)
              ]
            }
          }
        }
      }
    })
  })
}

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
                bottomTab: {
                    icon: menu
                }
              },
            },
          },
        ],
      },
    },
  });
});
};

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
const NavigationUtils = {pushScreen,popScreen,startRoot, startMainContent, startIntro, startLogin, startRegister, startSeeAllBook};
export default NavigationUtils;
