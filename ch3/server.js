const http = require("http");
const host = "localhost";
const port = 3030;

class User {
    constructor(id, firstName, lastName, age, country){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.country = country
    }
}

let userOne = new User(01, "Dario", "Dominguez", 37, "Argentina");
let userTwo = new User(02, "Sergio", "Yepes", 24, "Colombia");
let userThree = new User(03, "Christian", "Calvanese", 28, "Chile");
let userFour = new User(04, "Romina", "Gonzales", 23, "Argentina");
let userFive = new User(05, "Anthony", "Caravajal", 25, "Colombia");

let array = [userOne, userTwo, userThree, userFour, userFive];

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/usuarios":
            res.writeHead(200);
            res.end(JSON.stringify(array));
            break
        case "/":
            res.writeHead(200);
            res.end(JSON.stringify(array));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({statusCode:"404", message:"Resource not found"}));
    }
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});