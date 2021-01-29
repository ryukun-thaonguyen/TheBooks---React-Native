export default UserTab=(listIcon,selectedIconColor)=>{
    return(
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