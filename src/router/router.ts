import { Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) =>{
    res.send("AAADADADDA");
})


router.get("/about", (req: Request, res: Response) =>{
    res.send("algo legal");
})

export default router