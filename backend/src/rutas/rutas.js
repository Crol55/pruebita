var express = require('express');
var router = express.Router(); // para manejar todas las rutas que entren al servidor


// PETICIONES HTTP A LA APP

router.get ('/', (req,res) =>{
    res.send("Enviando respuesta...");
}); 


module.exports = router;  