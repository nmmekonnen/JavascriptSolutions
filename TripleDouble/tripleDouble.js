function TripleDouble(num1,num2) { 

    let x = num1.toString()

    let y = num2.toString()

    let arr1 = x.split("")

    let arr2 = y.split("")
  
    let newArr= []; 

    let final = 0; 


    for(let i=0; i<arr1.length; i++){if(arr1[i]===arr1[i+1]){ newArr.push(arr1[i])}}

    for(let i=0; i<arr2.length; i++){if(newArr.includes(arr2[i])&& arr2[i] === arr2[i+1]){ final = 1}}

    return final 

}
   
// keep this function call here 
console.log(TripleDouble(readline()));