require("dotenv").config();

const cors = require("cors");
const express = require ("express");
const mongoose = require ("mongoose");
const mongoString = process.env.DATABASE_URL;

//seccion de coneccion a la base de datos
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) =>{
    console.error(error);
});

database.once("connected", () =>{
    console.log("Base de datos conectada.");
});

//seccion de aplicacion (server web)
const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const userCompany = require("./routes/companyRoutes");
app.use(userRoutes);
app.use(userCompany);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Servidor express ejecutandose en http://${process.env.PORT}:${process.env.HOST}/`)
});