require('dotenv').config();
const express = require('express');
const path = require('path')
const configViewEngine = require('./config/viewEngine');
const app = express();
const webRoutes = require('./router/web');
configViewEngine(app,path,express);
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
const port = process.env.PORT || 8888;
const hostname=process.env.HOST_NAME;
app.use('/',webRoutes);
app.listen(port,hostname,()=>console.log(`Express server listening on port ${port}`));