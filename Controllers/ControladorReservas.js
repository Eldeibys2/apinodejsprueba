import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"


export class ControladorReservas{
    constructor(){}

    async buscarReservas(request,response){
        let objetoServicioReserva= new ServicioReserva()
        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioReserva.consultarReservas(),
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async buscarReservasPorId(request,response){
        let id = request.params.id
        let objetoServicioReserva= new ServicioReserva()

        try {
            
            response.status(200).json({
                "mensaje":"exito en la consulta"+ id,
                "datos":await objetoServicioReserva.consultarReservaPorId(id),
            })

        } catch (error) {
            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }
    async registrarReservas(req, response){
        let datosReserva = req.body
        //console.log(datosReserva)
        let objetoServicioReserva = new ServicioReserva()
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            let datosHabitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion)
            let maximoDePersonas = datosHabitacion.numeroMaximoPersonas
            let totalPersonas = datosReserva.numeroDeNiños + datosReserva.numeroDeAdultos
            let fechaDeIngreso = new Date(datosReserva.fechaDeEntrada)
            let fechaDeExtraccion = new Date(datosReserva.fechaDeSalida)
            const diffInDays = Math.floor((fechaDeExtraccion - fechaDeIngreso) / (1000 * 60 * 60 * 24))
            let costo = 0
            if (diffInDays > 0) {
                if (maximoDePersonas >= totalPersonas) {
                    console.log(datosHabitacion.valorNoche, diffInDays)
                    costo = Number(datosHabitacion.valorNoche) * Number(diffInDays)
                    datosReserva.costoDeReserva = costo
                    console.log(datosReserva)
                    await objetoServicioReserva.agregarReservaEnBD(datosReserva)
                    response.status(200).json({
                        "mensaje" :"Reserva exitosa",
                        "datos":datosReserva,
                    })
                }else{
                    response.status(400).json({
                        "mensaje" : "La habitacion no esta capacitado para reservar a mas de " + maximoDePersonas,
                        "datos" : null,
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje" : "Debes dijitar una fecha valida, como minimo debes quedarte un día",
                    "datos" : null,
                })
            }
        } catch (error) {
            response.status(400).json({
                "mensaje" :"Error en el guardado " + error,
                "datos":null
            })
        }
    }

    async editarReservas(req, response){
        let id = req.params.idReserva
        let datosReserva = req.body
        let objetoServicioReserva = new ServicioReserva()
        let objetoServicioHabitacion = new ServicioHabitacion()
        try {
            let datosHabitacion = await objetoServicioHabitacion.buscarHabitacionPorId(datosReserva.idHabitacion)
            let maximoDePersonas = datosHabitacion.numeroMaximoPersonas
            let totalPersonas = datosReserva.numeroDeNiños + datosReserva.numeroDeAdultos
            let fechaDeIngreso = new Date(datosReserva.fechaDeEntrada)
            let fechaDeExtraccion = new Date(datosReserva.fechaDeSalida)
            const diffInDays = Math.floor((fechaDeExtraccion - fechaDeIngreso) / (1000 * 60 * 60 * 24))
            let costo = 0
            if (diffInDays > 0) {
                if (maximoDePersonas >= totalPersonas) {
                    console.log(datosHabitacion.valorNoche, diffInDays)
                    costo = Number(datosHabitacion.valorNoche) * Number(diffInDays)
                    datosReserva.costoDeReserva = costo
                    console.log(datosReserva)
                    await objetoServicioReserva.agregarReservaEnBD(datosReserva)
                    response.status(200).json({
                        "mensaje" :"Reserva exitosa",
                        "datos":datosReserva,
                    })
                }else{
                    response.status(400).json({
                        "mensaje" : "La habitacion no esta capacitado para reservar a mas de " + maximoDePersonas,
                        "datos" : null,
                    })
                }
            }else{
                response.status(400).json({
                    "mensaje" : "Debes dijitar una fecha valida, como minimo debes quedarte un día",
                    "datos" : null,
                })
            }
        } catch (error) {
            response.status(400).json({
                "mensaje" :"Error en el guardado " + error,
                "datos":null
            })
        }
    }
}