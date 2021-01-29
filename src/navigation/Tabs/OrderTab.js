export default OrderTab=(listIcon,selectedIconColor)=>{
    return (
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