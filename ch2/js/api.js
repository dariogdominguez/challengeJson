const endPointUno = "https://jsonplaceholder.typicode.com/users"
const endPointDos = "https://jsonplaceholder.typicode.com/users/1/albums"

// La funcion getUsers recibe un callback, que puede ser la funcion AscycAwait o promesas respectivamente
const getUsers = async(cb) => {
    let data = await cb(endPointUno)
    let copy = [...data]
        mapUsers(copy);
}
//Albums recibe un parametro rest que luego de desestructura en ID y cb que es la funcion callback que trae el array
const getAlbums = async(...params) => {
let [id, cb] = params

    let data = await cb(endPointDos);
    let albums = [...data];
    let filtered = filterById(id, albums)

console.log(filtered);
}
//Promesas es el callback que trae los datos del endpoint y lo maneja con promesas
const promesas = async(endPoint) =>{
    return fetch(endPoint)
    .then(response => response.json())
    .then(data => data);
}
//asyncAwait es el callback que trae los datos del endpoint y lo maneja con async await
const asyncAwait = async(endPoint) =>{
    const json = await fetch(endPoint);
    const data = await json.json();
    return data;
}
//la funcion mapUsers es la que se encarga de desestructurar el objeto y devolver en newArray solo los datos deseados
function mapUsers(copy) {
    let newArray = [];
    copy.map(e =>{
        let {address :{city, geo, street, suite}, company, email, id, name, username, website} = e

        address = {city, geo :{lng :geo.lng}, street, suite }

        newObj = {
            address,
            company,
            email,
            id,
            name,
            website,
        }
        newArray.push(newObj);
    })
    console.log(newArray);
}
// la funcion filterById filtra el array de objetos album por id y lo devuelve
function filterById(...params) {
    let [id, albums] = params
    return albums.filter(e => e.id === id);
}

getUsers(promesas);
getAlbums(2, asyncAwait);