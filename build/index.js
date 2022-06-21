"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const documentosRoute_1 = __importDefault(require("./routes/documentosRoute"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.onConfig();
        this.onRoutes();
    }
    onConfig() {
        this.app.set('port', process.env.PORT || 999);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    onRoutes() {
        this.app.use('/api', documentosRoute_1.default);
    }
    onStart() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor iniciado na porta:', this.app.get('port'));
        });
    }
}
const server = new Server();
server.onStart();
