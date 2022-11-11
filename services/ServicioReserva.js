import { modeloReserva } from "../Models/ModeloReserva.js";


export class ServicioReserva{
    //AQUI PROGRAMO METODOS PARA ACDA UNA DE LAS CONSULTAS QUE QUIER HACEN EN BD RESERVAS
    async consultarReservas(){
        let reservas = await modeloReserva.find()
        return reservas
    }

    async consultarReservaPorId(id){
        let reserva = await modeloReserva.findById(id)
        return reserva
    }

    async agregarReservaEnBD(datos){
        let datosvalidados = new modeloReserva(datos)
        return await datosvalidados.save()
    }

    async editarReserva(id, datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)
    }
}