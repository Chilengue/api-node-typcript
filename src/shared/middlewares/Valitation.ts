import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


type Tvalidation = (schema: yup.ObjectSchema<any>) => RequestHandler;




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
          
            


// import { RequestHandler } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import { SchemaOf, ValidationError } from 'yup';



// type TProperty = 'body' | 'header' | 'params' | 'query';

// type TGetSchema = <T>(schema: SchemaOf<T>) => SchemaOf<T>

// type TAllSchemas = Record<TProperty, SchemaOf<any>>;

// type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

// type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;


// export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
//   const schemas = getAllSchemas((schema) => schema);


//   const errorsResult: Record<string, Record<string, string>> = {};

//   Object.entries(schemas).forEach(([key, schema]) => {
//     try {
//       schema.validateSync(req[key as TProperty], { abortEarly: false });
//     } catch (err) {
//       const yupError = err as ValidationError;
//       const errors: Record<string, string> = {};

//       yupError.inner.forEach(error => {
//         if (error.path === undefined) return;
//         errors[error.path] = error.message;
//       });

//       errorsResult[key] = errors;
//     }
//   });


//   if (Object.entries(errorsResult).length === 0) {
//     return next();
//   } else {
//     return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
//   }
// };