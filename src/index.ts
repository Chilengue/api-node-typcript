import { server } from "./server/Server.js";

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`)
});
