const express = require('express')
const req = require('express/lib/request')

const app = express()

const connectServer = app.listen(3000 , ()=>{
    console.log('Servidor Online')
})


app.get('/', (req , res)=>{
    res.send('<h1>Hola mundo</h1>')
} )

app.get('/fyh', (req,res)=> {
    res.send(horario())
})

const horario = () =>{

    const horario =  new Date()
    const hora = horario.getHours()

    if (hora > 6  && hora < 13) {return 'Buenos dias'}
    if (hora > 12 && hora < 19) { return 'Buenas tardes'}
    else { return 'Buenas Noches'}
}


