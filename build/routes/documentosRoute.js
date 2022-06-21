"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documentosController_1 = require("./../controllers/documentosController");
class DocumentosRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.onConfig();
    }
    onConfig() {
        this.router.post('/obterDocumentos', documentosController_1.documentosController.obterDocumentos);
    }
}
const documentosRoute = new DocumentosRoute();
exports.default = documentosRoute.router;
