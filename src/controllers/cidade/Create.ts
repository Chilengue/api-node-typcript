import { Request, RequestHandler, RequestParamHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';



interface ICidade {
    nome: string;
     estado:string;
}

// Esquema de validação Yup
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3)
    // estado: yup.string().
});


export const createBodyValidator:RequestHandler =async (req, res, next)=> {
    
    try{
              await bodyValidation.validate(req.body, {abortEarly:false});

         }catch(error){
            const yupError =error as yup.ValidationError;
            const validationsError:Record<string, string> ={ }

            yupError.inner.forEach(error=>{
              if(error.path === undefined) return;
                validationsError[error.path]=error.message
            })


            res.status(StatusCodes.BAD_REQUEST).json({ error});
    }
}



//eslint-disable-next-line
export const create = async (req: Request<{}, {}, ICidade>, res:Response)=>  {
   let validateDate:ICidade |undefined= undefined;


    console.log(validateDate);

       res.send('create!');
    
}