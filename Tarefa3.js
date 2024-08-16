function countOccurrences(fruits){
    let objFrutas = [];
    const listaFruitsUnicos = Array.from(new Set(fruits));
    
    for (const fruta of listaFruitsUnicos) {
        objFrutas[fruta] = 0
        for (const fruit of fruits){
            console.log(Object.keys(objFrutas) == fruit); //Aqui eu queria verificar o que me retornava  true e false, mas so retorna 3 true
            if(Object.keys(objFrutas) == fruits){
                objFrutas[fruta]= objFrutas[fruta]+1;
            }
        }
       

    }
    return objFrutas;
}

//não estou sabendo somar ou o for está zerando