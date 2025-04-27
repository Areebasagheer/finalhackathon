import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import path from 'path';

const app = express()

app.use('/', express.static(path.join(__dirname, './web/dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}

))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())









export { app }

