
function mergeArrays(array1,array2){
    

  const arrayconcat=[];
   
  
  for (const arr1 of array1){      
          arrayconcat.push(arr1);
      }

 for (const arrc of arrayconcat) {
      for (const arr2 of array2) {
          if(arrc.id == arr2.id){
             const unir = Object.assign(arrc,arr2);
              
          }else{
              const idJaExiste = arrayconcat.find((arrayconcat)=>{
                  return arrayconcat.id == arr2.id
              })

              if(idJaExiste){
              }
              else{
                arrayconcat.push(arr2);  
              }
              
          }
         
     }
 }
    return arrayconcat
}