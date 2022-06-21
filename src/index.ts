import express, {Application} from 'express';

import documentosRoute from './routes/documentosRoute';

class Server{
    public app:Application;
    constructor(){
        this.app=express();
        this.onConfig();
        this.onRoutes();
    }

    onConfig():void{
        this.app.set('port',process.env.PORT || 999);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    onRoutes():void{
        this.app.use('/api', documentosRoute)
    }

    onStart():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Servidor iniciado na porta:',this.app.get('port'));
        });
    }
}

const server = new Server();
server.onStart();