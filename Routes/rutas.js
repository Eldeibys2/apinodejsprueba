import  express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReservas} from '../Controllers/ControladorReservas.js'

let controladorHabitacion = new ControladorHabitacion()//usando el controlador
let controladorReservas = new ControladorReservas()


 export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/hotelessanfe/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelessanfe/habitacion/:id',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelessanfe/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelessanfe/habitacion/:id',controladorHabitacion.editarHabitacion)      
rutasPersonalizadas.get('/hotelessanfe/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hotelessanfe/reserva/:id',controladorReservas.buscarReservasPorId)
rutasPersonalizadas.post('/hotelessanfe/reserva',controladorReservas.registrarReservas)
rutasPersonalizadas.put('/hotelessanfe/reserva/:id',controladorReservas.editarReservas)