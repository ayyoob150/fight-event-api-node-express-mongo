import express , {Router} from'express'
import {eventPost, eventGet} from '../controller/event';


const router : Router = express.Router()

router.post("/event",eventPost)
router.get("/event",eventGet)


export default router;