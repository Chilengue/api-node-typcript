import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { SchemaOf } from "yup";



type Tvalidation = (schema: SchemaOf<any>) => RequestHandler;



export const validation:Tvalidation =(scheme) => async (req, res, next)=>{
      try{
                  await scheme.validate(req.body, {abortEarly:false});
                  return next();
    
             }catch(error){
                const yupError =error as yup.ValidationError;
                const validationsError:Record<string, string> ={ }
    
                yupError.inner.forEach(error=>{
                  if(error.path === undefined) return;
                    validationsError[error.path]=error.message
                })
    
    
                res.status(StatusCodes.BAD_REQUEST).json({ error});
        }
};
          
            


