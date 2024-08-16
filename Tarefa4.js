function groupByCategory(items) {
    let objCategoria = {};

    for (const item of items) {
        if (!objCategoria[item.category]) {
            objCategoria[item.category] = [];
        }
        objCategoria[item.category].push(item);
    }

    console.log(objCategoria);
}