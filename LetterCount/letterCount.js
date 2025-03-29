function LetterCount(str) { 

    let arr = str.split(" ")
    
    let x = {}
    
    let sum = 0; 
    
    for(let i =0; i<arr.length; i++){
      let topMap = new Map(); 
      
      function count(elem){
          let map = new Map(); 
          let max = 0; 
          let most = {}; 
    
          for(let i =0; i<elem.length; i++){
            if(map.has(elem[i])){
              map.set(elem[i], map.get(elem[i])+1)
            } else {
              map.set(elem[i], 1)
            }
          }
          
          for (let [key, value] of map){
            if(value > max){
              max = value; 
             
            }
          }
    
          return max 
        }
    
        topMap.set(arr[i], count(arr[i])) 
    
        for(let [key, value] of topMap){
          if(value > sum){
            sum = value; 
            x = key
          }
    
        }
       
      }
    
     if(sum ===1){
    
       return -1
     } else {
    
       return x 
     }
     
    
    }
       
    // keep this function call here 
    console.log(LetterCount(readline()));