const express = require("express");
const router = express.Router();
const ModelUser = require("../models/usersModel");
const ModelCompany = require("../models/companiesModel")

//en el post de usuarios se puede cargar usuarios con o sin compañia ya que este ultimo no es un dato obligatorio
router.post("/users", async(req, res) => {
    //creamos el newUser con los datos obligatorios
    const newUser = new ModelUser({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
    });
    try {
        //si se ingreso el id de la compañia por body se busca el modelo y se agrega al nuevo usuario
        if(req.body.company){
            const company = await ModelCompany.findById(req.body.company);
            company.users.push(newUser);
            company.save();
            newUser.company = company;
        }
        //en caso de no ingresar un id de compañia el usuario se guarda con los demas datos completados
        const dataToSave = await newUser.save();
        //luego se envia la respuesta con el resultado tanto si tiene compañia como si no la tiene
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Metodo GET para la obtencion de todos los datos de la BD
router.get("/users", async (req, res) => {
    try {
        const user = await ModelUser.find();
        res.status(200).json(user);
        } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Metodo GET para la obtencion de un dato para la BD
router.get("/users/:id", async (req, res) => {
    try {
        const user = await ModelUser.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//metodo PUT para actualizar datos en la BD
router.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};
        const data  = await ModelUser.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//metodo DELETE para eliminar datos en la BD
router.delete("/users/:id", async (req, res) => {
    try {

        const data = await ModelUser.findByIdAndDelete(req.params.id);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})

    }
});

module.exports = router;