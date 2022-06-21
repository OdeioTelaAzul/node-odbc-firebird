import { Request, Response } from 'express';

import {bd} from './../dbconexion'

class DocumentosController{

    async obterDocumentos (req: Request, res: Response): Promise<any>{
        const parametros = req.body;


        const result = await bd.query('select * from tb_funcionarios')

        res.json(parametros);
    }

}

export const documentosController = new DocumentosController();