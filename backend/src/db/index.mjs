import mongoose from "mongoose"
import { DB_NAME } from "../constants.mjs"

const connectDB = async () => {
    try{
        const connectionIns = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MONGODB connected !! DB HOST: ${
            connectionIns.connection.host}`);
        
    } catch(error){
        console.log("MONGODB CONNECTION ERROR" , error);
        process.exit(1)
        
    }
}
export default connectDB