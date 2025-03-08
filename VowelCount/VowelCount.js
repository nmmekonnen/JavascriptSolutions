function getCount(str) {
    let vow = ["a", "e","i","o","u"]; 
    let count = 0; 
    
    
    for(let i=0; i<str.length; i++){
      if(vow.includes(str.charAt(i))){
        
        count ++
      }
    }
    
    return count 
    
  }