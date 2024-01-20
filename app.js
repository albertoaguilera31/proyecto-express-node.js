const express = require('express');
const app = express();

const {infoCursos}= require('./cursos.js');


//routing= conocido como direccionamiento o enrutamiento

app.get('/', (req, res)=>{
    res.send('Mi primer servidor con Express');
})

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion', (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})

app.get('/api/cursos/matematicas', (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
})

const PUERTO= process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto ${PUERTO}...`)
})