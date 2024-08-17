const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 }
  ];
  const arrayconcat=[];
  const todosArray = array1.concat(array2);

  
  
  for (const arr1 of todosArray){
      if(todosArray[todosArray.indexOf(arr1 + 1)]== undefined){
          arrayconcat.push(arr1);
      }

 for (let arr2 of arrayconcat) {
      for (let arr3 of todosArray) {
          if(arr2.id == arr3.id){
             const unir = Object.assign(arr2,arr3);
              
              console.log(arrayconcat.indexOf(arr3));
          }
         
     }
 }         
         
        
  }
      
  
console.log(arrayconcat);

  
  //So falta conseguir apagar apenas o certo