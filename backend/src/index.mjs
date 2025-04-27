// // require('dotenv').config({path: '/env'})
// import dotenv from "dotenv"
// import connectDB from "./db/index.mjs";
// import path from "path"

// dotenv.config({
//     path: './env'
// })


// const __dirname = path.resolve()
// app.use('/',express.static(path.join(__dirname,'./web/dist')))




// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((error) => {
//     console.log("MONGODB connection failed !!! ", err);
// })


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

const app = express(); // Make sure app is defined before use

// Serve static files
app.use('/', express.static(path.join(process.cwd(), 'web/dist')));

// Middleware setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app };
























// import express from "express"
// const app = express()
// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERROR: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port $
//                 {process.env.PORT}`);
//         })

//     }catch(error){
//         console.log("ERROR:", error);
        
        
//     }
// })
