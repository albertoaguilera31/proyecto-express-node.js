const express = require('express');
const app = express();

const {infoCursos}= require('./cursos.js');

//ROUTERS
const routerProgramacion= express.Router();
app.use('/api/cursos/programacion', routerProgramacion);



//routing= conocido como direccionamiento o enrutamiento

app.get('/', (req, res)=>{
    res.send('Mi primer servidor con Express');
})

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

//CURSOS DE PROGRAMACION
routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})

app.get('/api/cursos/programacion/:lenguaje', (req, res)=>{
    const lenguaje= req.params.lenguaje;
    const resultados= infoCursos.programacion.filter(curso=> curso.lenguaje === lenguaje);

    if(resultados.length ===0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    console.log(req.query.ordenar);

    res.send(JSON.stringify(resultados));
});

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req,res)=>{
    const lenguaje= req.params.lenguaje;
    const nivel= req.params.nivel;

    const resultados= infoCursos.programacion.filter(curso=> curso.lenguaje ===lenguaje && curso.nivel=== nivel);

    if(resultados.length ===0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    
    res.send(JSON.stringify(resultados));
})

//CURSOS DE MATEMATICAS

app.get('/api/cursos/matematicas', (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
})

app.get('/api/cursos/matematicas/:tema', (req, res)=>{
    const tema= req.params.tema;
    const resultados= infoCursos.matematicas.filter(curso=> curso.tema === tema);

    if(resultados.length ===0){
        return res.status(404).send(`No se encontró el tema ${tema}`);
    }
    
    res.send(JSON.stringify(resultados));
});


const PUERTO= process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto ${PUERTO}...`)
})






//});