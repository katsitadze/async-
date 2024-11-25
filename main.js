const mySetTimOut = (delay)=> {
    return new Promise((resolve)=>{
      setTimeout((resolve) ,delay)
    })
  }
                       
   const makeToy = () => {
      return new Promise((resolve,reject)=> {
        if (Math.random()>0.1){
          resolve ('toy made successfully')
        }else{
          reject ('toy was not made')
        }
      });
    }                   
   
   const selltoys = (status) => {
      return new Promise((resolve,reject)=> {
     if (status !=='toy was not made' && Math.random()>0.3 ){
       resolve ("toy made successfully")
     }else {
       reject ("toy was not sold")
     }
   })
    } 
   const deliveryToy=(status)=>{
      return new Promise((resolve,reject)=> {
         if (status !=='toy was not sold ' && Math.random()>0.5 ){
           resolve ("toy delivered succesfully")
         }else{
           reject ("toy was not delivered")
         }
      })
   }
   
  mySetTimOut(2000)
     .then(() => {
     return makeToy()
   })
     .then( async (res) => { 
        console.log(res)
        return   mySetTimOut(2500).then(() => {
        return selltoys(res)
   })
      })
      .then( async (res) => { 
        console.log(res)
        return   mySetTimOut(3500).then(() => {
        return deliveryToy(res)
   })
      })
     .then ((res) => console.log (res))
     .catch((err) => console.log(err))
  