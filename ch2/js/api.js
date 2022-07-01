const endPointUno = "https://jsonplaceholder.typicode.com/users"
const endPointDos = "https://jsonplaceholder.typicode.com/users/1/albums"

const getUsers = async(cb) => {
    let data = await cb(endPointUno)
    let copy = [...data]
        mapUsers(copy);
}

const getAlbums = async(...params) => {
let [id, cb] = params

    let data = await cb(endPointDos);
    let albums = [...data];
    let filtered = filterById(id, albums)

console.log(filtered);
}

const Promesas = async(endPoint) =>{
    return fetch(endPoint)
    .then(response => response.json())
    .then(data => data);
}

const AsyncAwait = async(endPoint) =>{
    const json = await fetch(endPoint);
    const data = await json.json();
    return data;
}

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

function filterById(...params) {
    let [id, albums] = params
    return albums.filter(e => e.id === id);
}

getUsers(Promesas);
getAlbums(2, AsyncAwait);