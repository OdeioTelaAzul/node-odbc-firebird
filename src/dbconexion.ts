import keys from './dbconfig';

const odbc = require('odbc');

class Bd{
    constructor(){}

    async query(aSql: any, aParams: any= []): Promise<any>{
        return new Promise(res => {
            const connectionConfig ={
                connectionString: `DNS=ODBCtest;UID=${keys.bd.user};PWD=${keys.bd.password};DATABASE=${keys.bd.host}/${keys.bd.port}:${keys.bd.database}`,

                connectionTimeout: 10,
                loginTimeout:10
            }

            const connection = odbc.connect(connectionConfig, (error: any, connection: any) => {
                if (error) { console.log(error); res(error);}

                 connection.query(aSql, aParams, (error: any, result: any) => {
                     if (error) {console.log(error); res(error); }

                    res(result);

                    connection.close((error: any) => {
                        if(error) { return; }

                     });
                });
             });
        });
    }
}

export const bd = new Bd();