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
  arrayconcat.push(todosArray[0]);
  
  for (const arr1 of arrayconcat){
      for (const arr2 of todosArray){
          if(arr1.id == arr2.id ){
              const unir = Object.assign(arr1,arr2);
              arrayconcat.push(unir);
              
          }else{
              arrayconcat.push(arr2);
              console.log(arrayconcat);
      }
      }
  }

  
  //Algum erro no laço de repetição