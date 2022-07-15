const express = require("express");
const router = express.Router();
const ModelCompany = require("../models/companiesModel");

router.post("/company", async(req, res) => {
    console.log(req.body)
    const data = new ModelCompany({
        name: req.body.name
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Metodo GET para la obtencion de todos los datos de la BD
router.get("/company", async (req, res) => {
    try {
        const data = await ModelCompany.find();
        res.status(200).json(data);
        } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Metodo GET para la obtencion de un dato para la BD
router.get("/company/:id", async (req, res) => {
    try {
        const data = await ModelCompany.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//metodo PUT(PATCH) para actualizar datos en la BD
router.put("/company/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};
        const data  = await ModelCompany.findByIdAndUpdate(id, updatedData, options);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//metodo DELETE para eliminar datos en la BD
router.delete("/company/:id", async (req, res) => {
    try {
        const data = await ModelCompany.findByIdAndDelete(req.params.id);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})

    }
});

module.exports = router;