


// var express = require('express')

import * as express from 'express'
import * as core from "express-serve-static-core";
let app: core.Express = express();



let port: number = process.env.port || 3000;

let booksRouter: core.Router = express.Router();

booksRouter.route('/books')
    .get((req: core.Request, res: core.Response) => {
        let l = { hello: 'my api j hckj hkjh ckjvhkcjhvk h' };
        res.json(l);
    });

app.use('/api', booksRouter);
app.use('/api', booksRouter);

app.get('/', (req: core.Request, res: core.Response) => {
    res.send('wtf')
})

app.listen(port, () => {
    console.log(`process.env.port ${process.env.port}`);
    console.log(`listening on port ${port}`);
})
