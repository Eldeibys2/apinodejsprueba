import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EsquemaDeReserva = new mongoose.Schema ({
    idHabitacion:{
        required:true,
        type:String,
    },
    fechaDeEntrada:{
        required:true,
        type:Date,
    },
    fechaDeSalida:{
        required:true,
        type:Date,
    },
    numeroDeAdultos:{
        required:true,
        type:Number,
    },
    numeroDeNiños:{
        required: true,
        type: Number,
    },
    costoDeReserva:{
        required: true,
        type: Number,
    }
  
})
export const modeloReserva = mongoose.model('reserva',EsquemaDeReserva)