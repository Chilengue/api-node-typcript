
import { Router } from "express";
import { CidadesController } from "../controllers/cidade";
// import { StatusCodes } from "http-status-codes";

const router = Router();

router.get('/', (_, res)=>{
         res.send('ola dev');
})

    router.post('/cidade', CidadesController.create);

export { router };
