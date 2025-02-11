import { Request, Response } from "express";




interface ICidade{
    nome:string;
}

//eslint-disable-next-line
export const create =(req: Request<{}, {}, ICidade>, res:Response)=>  {
        console.log(req.body);
        

    // const data:Icidade  =req.body;



    // console.log(data.nome);
    


     res.send('created');

}