import axios from "axios";

export async function GetUser({ email, password }) {
    // TODO: antentos a lo que hay que hacer aquí para que funcione en serio.
    let userList = await axios("http://localhost:3333/users");
    let user = await userList.data.filter(u => u.email === email && u.password === password)
    if(user.length > 0){
        return user
    }else{
        alert("no existe el usuario, registrese")
        return false
    }
}

export function setUser(newUser) {
    
    // TODO:
    axios.post("http://localhost:3333/users" , newUser)
    .then(res => {
        console.log(res.data)
        alert("Se registro exitosamente");
})
}