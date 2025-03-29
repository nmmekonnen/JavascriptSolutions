function DistinctList(arr) { 

    let arrMap = new Map(); 
 
    let newArr = []; 
 
    let sum = 0; 
 
    for(let i=0; i<arr.length; i++){
      if(arrMap.has(arr[i])){
 
        arrMap.set(arr[i], arrMap.get(arr[i])+1);
      } else {
 
        arrMap.set(arr[i], 1)
      }
 
    }
   
 
   for(let[key, value] of arrMap){
     if(value > 1){
        newArr.push(key)
       sum += value
     }
 
   }
 
 
   return sum - newArr.length; 
 
 }
    
 // keep this function call here 
 console.log(DistinctList(readline()));