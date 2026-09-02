import express, {type Request, type Response} from "express";
import {getEnv} from "./utils/getEnv.ts";


const app = express()
const {PORT} = getEnv();
const novavariavel = 123;

app.get("/", (req: Request, res: Response) =>{
    res.send("AAADADADDA");
})
app.listen(PORT, () => {
    console.log(`To ouvindo na porta ${PORT}.`)
})