import express, {type Request, type Response} from "express";
import {getEnv} from "./utils/getEnv.js";
import helmet from 'helmet';
import morgan from 'morgan'
import router from "./router/router.js"

const app = express()
const {PORT} = getEnv();

app.use(morgan("combined"))
app.use(helmet())
app.use(router)


app.listen(PORT, () => {
    console.log(`To ouvindo na porta ${PORT}.`)
})