function elimination(arr){
    //write your code here 
    
    let arrMap = new Map(); 
    
  
   
    
    for(let i=0; i<arr.length; i++){
      if(arrMap.has(arr[i])){
        arrMap.set(arr[i], arrMap.get(arr[i])+1)    
      } else {
        arrMap.set(arr[i], 1)
      }
    }
  
    for(let [key, value] of arrMap){
      if(value > 1){
       return key 
      } 
    }
    
    return null 
  
  
  }