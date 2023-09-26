const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('Método', req.method);
    console.log('header', req.headers);
    console.log('versão', req.httpVersion);

    if(req.method === "POST"){
        res.writeHead(201, {
            'Content-Type': 'application/json',
        })

        res.write('{"Message": "Cadastro efetuado com sucesso"}')

    }else if(req.method === "GET"){

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
    
    
        res.write(`
            <!DOCTYPE html>
            <html lang="pt-br">
                <head>
                    <meta charset="utf-8 />
                    <title>Testes de protocolos</title>
                </head>
                <body>
                    <h1>Test</h1>
                </body>
            </html>
        
        `);

    }

    res.end();
})

srv.listen(3001, () => {
    console.log(`Iniciando servidor`);
})