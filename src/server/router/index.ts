import { Router } from "express";

const router =Router();

router.get('/teste', (_, res)=>{
    res.send("ola")
})

export {router};