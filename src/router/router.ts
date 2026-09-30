import { Router } from "express"

const router = Router()

router.get("/", (req, res) =>{
    res.send("AAADADADDA");
})


router.get("/about", (req, res) =>{
    res.send("algo legal");
})

export default router