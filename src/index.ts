import express, {type Request, type Response} from "express";
import {getEnv} from "./utils/getEnv.js";
import helmet from 'helmet';
import morgan from 'morgan';
import router from "./router/router.js"

const app = express()
const env = getEnv();

app.use(morgan("combined"))
app.use(helmet())
app.use(router)


app.listen(env.PORT, () => {
    console.log(`To ouvindo na porta ${env.PORT}.`)
})