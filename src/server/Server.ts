import express from 'express';
import { router } from '../router';
import 'dotenv/config';


import '../shared/services/TranslationYup'
const server = express();

server.use(express.json());

server.use(router);
const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`)
});


export { server };
