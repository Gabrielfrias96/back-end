const express = require('express')
const req = require('express/lib/request')

const app = express()

const connectServer = app.listen(8080 , ()=>{
    console.log('Servidor Online')
})


app.get('/', (req , res)=>{
    res.send('<h1>Hola mundoooo</h1>')
} )

app.get('/fyh', (req,res)=> {
    res.send(horario())
})

const horario = () =>{

    const horario =  new Date()
    const hora = horario.getHours()

    if (hora > 6  && hora < 13) {return 'Buenos diaaaas'}
    if (hora > 12 && hora < 19) { return 'Buenas tardes'}
    else { return 'Buenas Noches'}
}


let productos = [
    {
    id:1,
    nombre: 'Manzana',
    color: 'Rojo'
    },
    {
    id:2,
    nombre: 'Banana',
    color: 'Amarillo'
    },
    {
    id:3,
    nombre: 'Pera',
    color: 'Verde'
    },
    {
    id:4,
    nombre: 'Mandarina',
    color: 'Naranja'
    }

]


app.get('/productos', (req,res)=>{

    res.send(JSON.stringify(productos))

})


const idRamdom = () => {
    let idRamdom = Math.floor(Math.random() *(4 - 1) + 1);

    let productRamdom = productos.find(prod => idRamdom === prod.id);


    return JSON.stringify(productRamdom)

}

app.get('/productoRandom', (req,res)=>{
    res.send(idRamdom())
})
