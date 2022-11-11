import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
import {ServicioReserva } from '../services/ServicioReserva.js'

export class ControladorHabitacion{

    constructor(){}

    async buscarHabitaciones(request,response){

        let objetoServicioHabitacion=new ServicioHabitacion()

        try{

            response.status(200).json({
                "mensaje":"exito en la consulta",
                "datos":await objetoServicioHabitacion.buscarHabitaciones(),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }

        
        
    }

    async buscarHabitacionPorId(request,response){
        let id=request.params.id //recibo id de la peticion
        let objetoServicioHabitacion=new ServicioHabitacion()
        try{

            response.status(200).json({
                "mensaje":"exito en la consulta "+id,
                "datos":await objetoServicioHabitacion.buscarHabitacionPorId(id),
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async registrarHabitacion(request,response){

        let datosHabitacion=request.body //Obtengo datos del body
        let objetoServicioHabitacion=new ServicioHabitacion()
        
        try{
            
            if(datosHabitacion.numeroMaximoPersonas<8){
            await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)

                response.status(200).json({
                    "mensaje":"exito registrando la habitacion",
                    "datos":null
                })
            }else{
                response.status(400).json({
                    "mensaje":"no caben tantas babys",
                    "datos":null
                })
            }

            await objetoServicioHabitacion.agregarHabitacionEnBD(datosHabitacion)
          
        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }

    async editarHabitacion(request,response){

        let id = request.params.id
        let datosHabitacion = request.body

        let objetoServicioHabitacion=new ServicioHabitacion()
       

        try{

            await objetoServicioHabitacion.editarHabitacion(id,datosHabitacion)

            response.status(200).json({
                "mensaje":"exito editando"+id,
                "datos":datosHabitacion,
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"error en la consulta "+error,
                "datos":null,
            })

        }
    }


}