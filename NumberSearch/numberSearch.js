function NumberSearch(str) { 
    let regex = /[0-9]/gm;
    let letters = /[A-Za-z]/gm;
    let arr = []; 
    let count = 0; 
    let charsArr =[]
  
    for(let i=0; i<str.length; i++){
      if(str[i].match(regex)){
        arr.push(parseInt(str.charAt(i)))
      } 
    }
  
    for(let i=0; i<str.length; i++){
      if(str[i].match(letters)){
        charsArr.push(str.charAt(i))
      }
    }
  
    for(let i=0; i<arr.length; i++){
        count += arr[i];
      }
  
    return Math.round(count/charsArr.length)
  
  }
  
    
  
  
  // keep this function call here 
  console.log(NumberSearch(readline()));