export default InfoTab=(listIcon,selectedIconColor)=>{
    return(
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