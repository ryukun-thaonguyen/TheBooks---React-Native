export default HomeTab=(listIcon,selectedColor)=>{
    return (
        {
            stack:{
              id:"HomeTab",
              options:{
                backButton:{
                  color:"red"
                }
              },
              children:[
                {
                  component:{
                    name:"Home",
                    options:{
                      topBar:{
                        leftButtons: [
                          {
                            id: 'sideBar',
                            icon: listIcon[0],
                          }
                        ],
                        rightButtons: [
                          {
                            id: 'searchButton',
                            icon: listIcon[1],
                          }
                        ]
                      },
                      bottomTab: {
                        icon: listIcon[2],
                        selectedIconColor: selectedColor,
                        animate:true
                      },
                     
                    }
                  }
                }
              ]
            }
          }
    )
  }