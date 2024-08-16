async function fetchUserData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let userData = await response.json();
    return userData.name; 

}




try {
 console.log(fetchUserData());
} catch (e) {
 console.error(e);
 
}

//não consigo recuperar os dados e não consigo encontrar o erro sem usar IA