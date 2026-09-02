import express, {type Request, type Response} from "express";
import {getEnv} from "./utils/getEnv.js";
import router from "./router/router.js"

const app = express()
const {PORT} = getEnv();

app.use(router)

app.listen(PORT, () => {
    console.log(`To ouvindo na porta ${PORT}.`)
})