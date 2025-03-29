function StringScramble(str1,str2) { 
  
    let strMap1 = new Map(); 
  
    let strMap2 = new Map(); 
  
    for(let i=0; i<str1.length; i++){
  
      if(strMap1.has(str1[i])){
      
        strMap1.set(str1[i], strMap1.get(str1[i])+1);
      } else {
        strMap1.set(str1[i], 1)
      }
  
    }
  
  
    for(let i=0; i<str2.length; i++){
  
      if(strMap2.has(str2[i])){
      
        strMap2.set(str2[i], strMap2.get(str1[i])+1);
      } else {
        strMap2.set(str2[i], 1)
      }
  
    }
  
    for(let [key, value] of strMap2){
      if (!strMap1.has(key) || strMap1.get(key) != value) 
      { 
        return false 
      } else {
  
        return true 
      }
    }
  
  }
  // keep this function call here 
  console.log(StringScramble(readline()));