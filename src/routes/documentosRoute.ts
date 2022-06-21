
import { Router } from 'express';

import { documentosController }  from './../controllers/documentosController';

class DocumentosRoute{
    public router: Router = Router();
    
    constructor(){
        this.onConfig();
    }

    onConfig(): void{

        this.router.post('/obterDocumentos', documentosController.obterDocumentos);
    }
}
const documentosRoute = new DocumentosRoute();
export default documentosRoute.router;