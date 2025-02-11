"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_js_1 = require("./server/Server.js");
const PORT = process.env.PORT || 3333;
Server_js_1.server.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
