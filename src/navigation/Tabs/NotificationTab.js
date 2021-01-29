export default NotificationTab=(listIcon,selectedIconColor)=>{
    return(
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
                        icon: listIcon[0],
                        selectedIconColor: selectedIconColor,
                        animate:false
                      },
                    }
                  }
                }
              ]
            }
          }
    )
}