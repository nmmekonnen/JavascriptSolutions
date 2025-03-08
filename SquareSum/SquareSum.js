function squareSum(numbers){
 
    let squares = numbers.map((number)=>Math.pow(number, 2))
    
    let count = 0; 
    
    for(let i =0; i<squares.length; i++){
      
      count += squares[i]
    }
  
    return count 
  
  }