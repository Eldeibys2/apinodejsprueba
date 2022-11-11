

import * as dotenv from 'dotenv' 
dotenv.config()

import { ServidorAPI } from './API/servidorAPI.js'

let servidorHoteles = new ServidorAPI()//Instancia de una clase (OBJETO)
servidorHoteles.despertarServidor()


