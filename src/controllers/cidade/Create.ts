import { Request, RequestHandler, Response } from "express";
import * as yup from 'yup';

import {validation} from '../../shared/middlewares'


interface ICidade {
    nome: string;
     estado:string;
     morada:string;
}

// Esquema de validação Yup
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome  : yup.string().required().min(3),
    estado: yup.string().required().min(3),
    morada: yup.string().required().min(3),
});


export const createBodyValidator:RequestHandler =async (req, res, next)=> {

}

// export const createValidation =validation(req.query,{abort});

//eslint-disable-next-line
export const create = async (req: Request<{}, {}, ICidade>, res:Response)=>  {

    console.log(req.body);

       res.send('create!');
    
}