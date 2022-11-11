import mongoose from 'mongoose';

 export async function connectarConMongo(){

    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito en la conexion con mongo")

    } catch (error) {
        console.log(error)
    }
}