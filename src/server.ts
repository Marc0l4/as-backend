import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';
import http from 'http';

import adminRoutes from './routes/admin';
import siteRoutes from './routes/site';

import { requestIntercepter } from './utils/requestIntercepter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', requestIntercepter);

app.use('/admin', adminRoutes);
app.use('/', siteRoutes);

const runServer = (port: Number, server: http.Server) => {
    server.listen(port, () => {
        console.log(`Running at PORT ${port}`);
    });
}

const regularServer = http.createServer(app);
if (process.env.NODE_ENV === 'production') {
    // TODO: configurar SSl
    // TODO: rodar server na 80 e na 443
} else {
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000;
    runServer(serverPort, regularServer);
}