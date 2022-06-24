
const json = {}
let provisorio = {}

const text = document.querySelector("textarea");
const input = document.querySelector("input");

input.addEventListener("click", e => {
    e.preventDefault()
    objetoJson = text.value;
    myParse(objetoJson);
    text.value="";
})

const myParse = (object) => {
    /*La funcion lo que gace primero es quitar todas las comillas, comas, espacios al princio
     y final, saltos de linea y caracteres vacios en la funcion clean  */

    function clean (){
        if(typeof object === 'string'){

            let filtradoFinal = [];
    
            object = object.replace(/['"]+/g, '');
    
            object = object.replace(/,/g, '');
    
            let array  = object.split("\n");
    
            let filtrado = array.filter(e => e !== "")
    
            filtrado.forEach(e => filtradoFinal.push(e.trim()));

            filtradoFinal.pop();
            filtradoFinal.shift();

        return filtradoFinal
    }
}
/* la funcion setObject toma el array que devuelve clean y lo recorre, utilizando banderas y marcadores, cada vez que encuente un corchete,
genera un array y asi mismo cuando encuentra una llave genera un objeto y luego mientras recorre pone cada sub array
 con su clave valor en objeto que le corresponde, y luego lo envia por consola */

    function setObject (){

        let array = clean();
        let objetoUno = {};
        let objetoDos = {};
        let marca = false;
        let banderaUno = false;
        let banderaDos = false;
        let banderaTres = 0;
        let banderaCuatro = 0;
        
        for(let i = 0; i< array.length; i++ ){

            array[i] = array[i].split(" : ")

            if(array[i][0] !== "{" && array[i][0] !== "}" && marca === false && banderaUno === false ){
                json[array[i][0]] = array[i][1]
            }

            if(array[i][1] === "["){
                json[array[i][0]] = [objetoUno, objetoDos];
                marca === true
            }

            if(array[i][0] === "{"){
                banderaUno = true;
                banderaTres = 1;
            }
            if(banderaUno === true && banderaDos === false && array[i][0] !== "{" && array[i][0] !== "}" ){
                marca = true
                objetoUno[array[i][0]] = array[i][1]
            }
            if(array[i][0] === "}"){
                banderaDos = true
                banderaCuatro = 1;
            }
            if(array[i][0] === "{" && banderaUno === true){
                banderaTres = 2;
            }

            if(banderaTres === 2 && array[i][0] !== "{" && array[i][0] !== "}" ){
                    marca = true
                    objetoDos[array[i][0]] = array[i][1]
            }

            if(array[i][0] === "}"){
                banderaTres = 0;
            }
            if(array[i][0] === "]"){
                marca = false;
                banderaUno = false;
            }
        }
        console.log(array)

    }
    
    setObject()
    console.log(json)
    return json;
}