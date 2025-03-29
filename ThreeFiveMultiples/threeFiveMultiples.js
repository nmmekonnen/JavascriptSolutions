function ThreeFiveMultiples(num) { 

    let arr = []; 
    let count = 0; 
    let newArr = []; 
  
    for(let i=0; i<num; i++){
      arr.push(i)
    }
  
    
    
    for(let i =0; i<arr.length; i++){
      if(arr[i]%3===0 || arr[i]%5===0){
        newArr.push(i)
      }
    }
  
  
    for(let i=0; i<newArr.length; i++){
      count += newArr[i]
  
    }
  
    return count 
  
  }
     
  // keep this function call here 
  console.log(ThreeFiveMultiples(readline()));