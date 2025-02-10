import { server } from "./server/Server.js";


const PORT = 3000;

server.listen(PORT, () => {
    console.log(` Servidor rodando em http://localhost:${PORT}`);
});
