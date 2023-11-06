import express , {Router} from'express'
import {fighterPost,fighterGet} from '../controller/fighter';


const router : Router = express.Router()

router.post("/fighter",fighterPost)
router.get("/fighter",fighterGet)


export default router;