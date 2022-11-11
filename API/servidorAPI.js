import  express from 'express'
import { rutasPersonalizadas } from '../Routes/rutas.js'
import { connectarConMongo } from '../Database/conexion.js'
import cors from 'cors'

export class ServidorAPI{
    constructor(){
         this.app = express()
         this.conectarConBD()
         this.activarBody()
         this.atenderPeticiones()
    }
    //Metodos de la clase ServidorAPI
    despertarServidor(){
        this.app.listen(process.env.PORT,function () {
            console.log("Exito encendiendo el servidor: "+process.env.PORT)
        })
    }

    atenderPeticiones(){
        this.app.use('/',rutasPersonalizadas)
    }

    activarBody(){
        this.app.use(express.json())
    }

    
    conectarConBD(){
        connectarConMongo()
    }

    activarBody(){
     this.app.use(cors())   
     this.app.use(express.json())  
    }

}