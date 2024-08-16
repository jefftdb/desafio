function countOccurrences(fruits){
    let objFrutas = [];
    const listaFruitsUnicos = Array.from(new Set(fruits));
    
    for (const fruta of listaFruitsUnicos) {
        objFrutas[fruta] = 0
        for (const fruit of fruits){
            
            if(fruta == fruit){
                objFrutas[fruta]= objFrutas[fruta] +1;
            }
        }
       

    }
    return objFrutas;
}
//Achei o erro