import express , {Router} from'express'
import {fightPost,fightGet,fightUpdate} from '../controller/fight';


const router : Router = express.Router()

router.post("/fight",fightPost)
router.get("/fight",fightGet)
router.post("/fight-update",fightUpdate)


export default router;