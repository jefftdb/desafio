function transformData(users){
    let nomes_ativos = []
    indice = 0
    users.forEach(function(objeto) {
        if(objeto.isActive){
            nomes_ativos[indice] = objeto
            indice++
        }
    
    nomes_ativos.sort(function(a,b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
        });
        return nomes_ativos    
  }