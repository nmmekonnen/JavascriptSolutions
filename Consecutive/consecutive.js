function Consecutive(arr) { 

    let sorted = arr.sort((a,b)=> a-b);
  
    let min = sorted[0]; 
  
    let max = Math.max(...arr); 
  
    let range = []; 
  
    let final = [];
  
    for(let i=min; i<=max; i++){
      range.push(i);
    } 
  
    for(let i=0; i<range.length; i++){
      if(!arr.includes(range[i])){
        final.push(range[i])
      }
    }
  
    return final.length; 
  
    
    
    
    
      
    return arr; 
  
  }
     
  // keep this function call here 
  console.log(Consecutive(readline()));