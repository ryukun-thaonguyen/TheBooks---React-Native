/* eslint-disable prettier/prettier */
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from '../themes';
const SIDE_MENU_ID = 'sideMenu';
const SCREEN_OVERLAY = {
  android: 'overCurrentContext',
  ios: 'overFullScreen',
};

const pushScreen=()=>{

}

const popScreen=()=>{

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
  .then(([ic_menu,ic_search,ic_books,ic_orders,ic_profile,ic_notifications,ic_library])=>{
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
                {
                  stack:{
                    id:"Home",
                    children:[
                      {
                        component:{
                          name:"Home",
                          options:{
                            topBar:{
                              leftButtons: [
                                {
                                  id: 'sideBar',
                                  icon: ic_menu,
                                }
                              ],
                              rightButtons: [
                                {
                                  id: 'searchButton',
                                  icon: ic_search,
                                }
                              ]
                            },
                            bottomTab: {
                              icon: ic_books,
                              selectedIconColor: Colors.primary,
                              animate:true
                            },
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack:{
                    id:"Order",
                    children:[
                      {
                        component:{
                          name:"Order",
                          options:{
                            topBar:{
                             
                            },
                            bottomTab: {
                              icon: ic_orders,
                              selectedIconColor: Colors.primary,
                              animate:false
                            },
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack:{
                    id:"User",
                    children:[
                      {
                        component:{
                          name:"User",
                          options:{
                            topBar:{
                             
                            },
                            bottomTab: {
                              icon: ic_profile,
                              selectedIconColor: Colors.primary,
                              animate:false
                            },
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack:{
                    id:"Notification",
                    children:[
                      {
                        component:{
                          name:"Notification",
                          options:{
                            topBar:{
                             
                            },
                            bottomTab: {
                              icon: ic_notifications,
                              selectedIconColor: Colors.primary,
                              animate:false
                            },
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack:{
                    id:"Info",
                    children:[
                      {
                        component:{
                          name:"Info",
                          options:{
                            topBar:{
                             
                            },
                            bottomTab: {
                              icon: ic_library,
                              selectedIconColor: Colors.primary,
                              animate:false
                            },
                          }
                        }
                      }
                    ]
                  }
                },
              ]
            }
          }
        }
      }
    })
  }
  )
}


const startMainContent = () => {
  Promise.all([
    Icon.getImageSource('ic-menu', 20),
    Icon.getImageSource('ic-search', 20),
  ]).then(([menu, search]) => {
   Navigation.setRoot({
    root: {
      stack: {
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
const NavigationUtils = {startRoot,startMainContent, startIntro, startLogin};
export default NavigationUtils;
